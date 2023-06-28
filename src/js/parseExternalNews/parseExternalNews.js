// docs: https://newsapi.org/docs/guides/how-to-get-the-full-content-for-a-news-article

const { Readability } = require('@mozilla/readability');

document.addEventListener('DOMContentLoaded', function() {
    // Build the URL we are going to request. This will get articles related to Apple and sort them newest first
    let url = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'sortBy=publishedAt&' +
        'apiKey=0c93dc142cf744cea900b931f03e047b';

    // Make the request with jQuery's ajax() function
    jQuery.ajax({
        url: url,
        method: "GET",
    }).done(function(r1) {
        // At this point, we will have some search results from the API. Take the first search result...
        let firstResult = r1.articles[5];

        // ...and download the HTML for it, again with jQuery
        jQuery.ajax({
            url: firstResult.url,
            method: "GET"
        }).done(function(r2) {
            // We now have the article HTML, create a jQuery object from it
        let $article = jQuery(r2);

            // Create a DOM document from the HTML string
            const domParser = new DOMParser();
            const doc = domParser.parseFromString(r2, 'text/html');

            // Use jQuery to locate the article content
            let articleContent = new Readability(doc).parse();
            console.log(articleContent.textContent);
            // Done! The article content is in the articleContent variable

        });
    });

});