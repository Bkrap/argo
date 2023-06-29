// const { Readability } = require('@mozilla/readability');

// document.addEventListener('DOMContentLoaded', function() {

//   let finalResults = [];

//   // Build the URL we are going to request. This will get articles related to Apple and sort them newest first
//   let url = 'https://newsapi.org/v2/everything?' +
//     'q=Apple&' +
//     'sortBy=publishedAt&' +
//     'pageSize=30&' +
//     'apiKey=0c93dc142cf744cea900b931f03e047b';

//   // Make the request with jQuery's ajax() function
//   jQuery.ajax({
//     url: url,
//     method: "GET",
//   }).then(function(r1) {
//     let results = r1.articles;

//     // Create an array of AJAX promises for individual article requests
//     let promises = results.map(function(result) {
//       return jQuery.ajax({
//         url: result.url,
//         method: "GET"
//       }).then(function(r2) {
//         // We now have the article HTML, create a jQuery object from it
//         let $article = jQuery(r2);

//         // Create a DOM document from the HTML string
//         const domParser = new DOMParser();
//         const doc = domParser.parseFromString(r2, 'text/html');

//         // Use jQuery to locate the article content
//         let articleContent = new Readability(doc).parse();

//         finalResults.push({
//             description     : result.description,
//             publishedAt     : result.publishedAt,
//             title           : result.title,
//             url             : result.url,
//             urlToImage      : result.urlToImage,
//             content         : articleContent.textContent,
//           });

//       }).catch(function(error) {
//         if (error.status === 403) {
//           console.log('Skipped article due to 403 error:', result.url);
//         } else {
//           console.log('Error fetching article:', error);
//         }
//         // Return a resolved promise to skip the error and continue with the next article
//         return Promise.resolve();
//       });
//     });

//     // Wait for all promises to resolve
//     return Promise.all(promises);

//   }).then(function() {
//     console.log(finalResults);

//     var formData = {
//       action: 'parse_external_news_api',
//       finalResults: finalResults,
//     };

//     // Push that bitch to ajax PHP
//     jQuery.ajax({
//       type: 'POST',
//       url: generic_ajax_object.ajax_url,
//       data: formData,
//       success: function(data) {
//         jQuery(document)
//           .ajaxStart(function () {
//             //ajax request went so show the loading image
//             // loadingWheel.show();
//           })
//           .ajaxStop(function () {
//             //got response so hide the loading image
//             //    loadingWheel.hide();
//           });
//       },
//       error: function(request, status, error) {
//         console.log(request);
//         console.log(error);
//         alert(status);
//       }
//     });

//   }).catch(function(error) {
//     console.log('Error fetching articles:', error);
//   });

// });