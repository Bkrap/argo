// console.log("hiii");
// jQuery('.secondary-nav-category-term').on("click", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button

//     e.preventDefault();
//     var navCatID = jQuery(this).attr("data-cat-id");

//     // Cookies.set('userToken', userTokenVar, { expires: 1 }); // docs: https://github.com/js-cookie/js-cookie

//     var formData = {
//       action: 'filter_posts',
//       page_id: curr_post_id,
//       category_id: navCatID,
//     };

//     jQuery.ajax({
//       type: 'POST',
//       url:  ajax_url,
//       dataType: 'html',
//       data: formData,
//       success: function(data) {
//         console.log(data);

//           var loadingWheel = jQuery('#loading-wheel').hide();
//           //Attach the event handler to any element
//           jQuery(document)
//             .ajaxStart(function () {
//                //ajax request went so show the loading image
//                 loadingWheel.show();
//             })
//           .ajaxStop(function () {
//               //got response so hide the loading image
//                loadingWheel.hide();
//            });

//         },

//         // return data;
//         error: function(request, status, error){
//           console.log(res);
//           alert(request.responseText);
//           console.log(data);
//         }

//       });
// });
