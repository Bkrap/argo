const { Readability } = require('@mozilla/readability');

document.addEventListener('DOMContentLoaded', function() {
  let finalResults = [];
  let category = generic_ajax_object.tags;

  let url = 'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      category +
      'sortBy=publishedAt&' +
      'pageSize='+ generic_ajax_object.fetch_daily +'&' +
      'apiKey=' + generic_ajax_object.newsApiKey;

  // console.log(url);

  if (generic_ajax_object.fetch_news) {
    async function fetchArticles() {
      try {
        const r1 = await jQuery.ajax({
          url: url,
          method: 'GET',
        });

        let results = r1.articles;

        await Promise.all(results.map(async (result) => {
          try {
            const r2 = await jQuery.ajax({
              url: result.url,
              method: 'GET',
            });

            let $article = jQuery(r2);

            const domParser = new DOMParser();
            const doc = domParser.parseFromString(r2, 'text/html');

            let articleContent = new Readability(doc).parse();
            let articleContentRaw = articleContent.textContent;

            finalResults.push({
              description: result.description,
              publishedAt: result.publishedAt,
              title: result.title,
              url: result.url,
              urlToImage: result.urlToImage,
              content: articleContentRaw.replace(/\n/g, '\n\n') + '\n\n' + 'SOURCE: ' + '<a href='+ result.url + ' target="_blank">' + result.source.name + '</a>',
            });
          } catch (error) {
            if (error.status === 403) {
              console.log('Skipped article due to 403 error:', result.url);
            } else {
              console.log('Error fetching article:', error);
            }
          }
        }));

        // console.log(finalResults);

        var formData = {
          action: 'parse_external_news_api',
          finalResults: finalResults,
        };

        jQuery.ajax({
          type: 'POST',
          url: generic_ajax_object.ajax_url,
          data: formData,
          async: false, // Make the request synchronous
          success: function(data) {
            jQuery(document)
              .ajaxStart(function () {
                //ajax request went so show the loading image
                // loadingWheel.show();
              })
              .ajaxStop(function () {
                //got response so hide the loading image
                //    loadingWheel.hide();
              });
          },
          error: function(request, status, error) {
            console.log(request);
            console.log(error);
            alert(status);
          }
        });
      } catch (error) {
        console.log('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }
});