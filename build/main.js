/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/filter-posts.js":
/*!********************************!*\
  !*** ./src/js/filter-posts.js ***!
  \********************************/
/***/ (() => {

eval("// console.log(\"hiii\");\r\n// jQuery('.secondary-nav-category-term').on(\"click\", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button\r\n\r\n//     e.preventDefault();\r\n//     var navCatID = jQuery(this).attr(\"data-cat-id\");\r\n\r\n//     // Cookies.set('userToken', userTokenVar, { expires: 1 }); // docs: https://github.com/js-cookie/js-cookie\r\n\r\n//     var formData = {\r\n//       action: 'filter_posts',\r\n//       page_id: curr_post_id,\r\n//       category_id: navCatID,\r\n//     };\r\n\r\n//     jQuery.ajax({\r\n//       type: 'POST',\r\n//       url:  ajax_url,\r\n//       dataType: 'html',\r\n//       data: formData,\r\n//       success: function(data) {\r\n//         console.log(data);\r\n\r\n//           var loadingWheel = jQuery('#loading-wheel').hide();\r\n//           //Attach the event handler to any element\r\n//           jQuery(document)\r\n//             .ajaxStart(function () {\r\n//                //ajax request went so show the loading image\r\n//                 loadingWheel.show();\r\n//             })\r\n//           .ajaxStop(function () {\r\n//               //got response so hide the loading image\r\n//                loadingWheel.hide();\r\n//            });\r\n\r\n//         },\r\n\r\n//         // return data;\r\n//         error: function(request, status, error){\r\n//           console.log(res);\r\n//           alert(request.responseText);\r\n//           console.log(data);\r\n//         }\r\n\r\n//       });\r\n// });\r\n\n\n//# sourceURL=webpack://webpack/./src/js/filter-posts.js?");

/***/ }),

/***/ "./src/js/install-theme.js":
/*!*********************************!*\
  !*** ./src/js/install-theme.js ***!
  \*********************************/
/***/ (() => {

eval("/**\r\n * This is for the future to make this theme dynamic as it comes with naming on npm install theme!\r\n * @category - Under construction\r\n */\r\n\r\n// import inquirer from 'inquirer';\r\n// import StringReplaceWebpackPlugin from 'string-replace-webpack-plugin';\r\n\r\n\r\n// inquirer\r\n//   .prompt([\r\n//     {\r\n//       type: 'input',\r\n//       name: 'BK_STARTER_THEME_PATH',\r\n//       message: 'Enter the value to replace BK_STARTER_THEME_PATH:'\r\n//     }\r\n//   ])\r\n//   .then(answers => {\r\n//     const webpackConfig = {\r\n//       // ...\r\n//       plugins: [\r\n//         new StringReplaceWebpackPlugin({\r\n//           search: 'BK_STARTER_THEME_PATH',\r\n//           replace: answers.BK_STARTER_THEME_PATH\r\n//         })\r\n//       ]\r\n//     };\r\n\r\n//     // Run Webpack with the updated configuration\r\n//     // ...\r\n//   });\n\n//# sourceURL=webpack://webpack/./src/js/install-theme.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    console.log(\"js 12\");\r\n    /**************************************************************************************************/\r\n\r\nfunction img2svg(obj) {\r\n    //  Replace all SVG images with inline SVG \r\n    jQuery(obj).each(function() {\r\n        var $img = jQuery(this);\r\n        var imgID = $img.attr('id');\r\n        var imgClass = $img.attr('class');\r\n        var imgURL = $img.attr('src');\r\n        var imgStyle = $img.attr('style');\r\n        jQuery.get(imgURL, function(data) {\r\n    //          Get the SVG tag, ignore the rest\r\n            var $svg = jQuery(data).find('svg');\r\n    //         Add replaced image's ID to the new SVG\r\n            if (typeof imgID !== 'undefined') {\r\n                $svg = $svg.attr('id', imgID);\r\n            }\r\n    //         Add replaced image\\'s classes to the new SVG\r\n            if (typeof imgClass !== 'undefined') {\r\n                $svg = $svg.attr('class', imgClass + ' replaced-svg');\r\n            }       \r\n    //         Add style image\\'s to the new SVG\r\n    if (typeof imgStyle !== 'undefined') {\r\n        $svg = $svg.attr('style', imgStyle);\r\n    }\r\n    //         Remove any invalid XML tags as per http:validator.w3.org\r\n            $svg = $svg.removeAttr('xmlns:a');\r\n    //         Replace image with new SVG\r\n            $img.replaceWith($svg);\r\n            var $btn = $svg.parent();\r\n            if ($btn.hasClass('btn-toShop')) {\r\n                var iconBG = $btn.css('backgroundColor');\r\n                $svg.find('.iconBG').attr(\"fill\", iconBG);\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n/****************************************************************************** */\r\n\r\nimg2svg('img[src$=\".svg\"]');\r\n\r\n\r\njQuery('.secondary-nav-category-term').on(\"click\", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button\r\n\r\n    e.preventDefault();\r\n    var navCatID = jQuery(this).attr(\"data-cat-id\");\r\n\r\n    // Cookies.set('userToken', userTokenVar, { expires: 1 }); // docs: https://github.com/js-cookie/js-cookie\r\n\r\n    var formData = {\r\n      action: 'filter_posts',\r\n      page_id: generic_ajax_object.curr_post_id,\r\n      category_id: navCatID,\r\n    };\r\n\r\n    jQuery.ajax({\r\n      type: 'POST',\r\n      url:  generic_ajax_object.ajax_url,\r\n      dataType: 'html',\r\n      data: formData,\r\n      success: function(data) {\r\n        console.log(data);\r\n\r\n          var loadingWheel = jQuery('#loading-wheel').hide();\r\n          //Attach the event handler to any element\r\n          jQuery(document)\r\n            .ajaxStart(function () {\r\n               //ajax request went so show the loading image\r\n                loadingWheel.show();\r\n            })\r\n          .ajaxStop(function () {\r\n              //got response so hide the loading image\r\n               loadingWheel.hide();\r\n           });\r\n\r\n        },\r\n\r\n        // return data;\r\n        error: function(request, status, error) {\r\n          console.log(request);\r\n          alert(request.responseText);\r\n          console.log(error);\r\n        }\r\n\r\n      });\r\n});\r\n\r\n\r\n});\r\n\r\nwindow.addEventListener('scroll', function() {\r\n    // Your code here\r\n\r\n});\r\n\r\nwindow.addEventListener('resize', function() {\r\n    // Your code here\r\n    \r\n});\r\n\r\n// document.getElementById('hamburger').addEventListener(\"click\", function(){\r\n//     this.classList.toggle('active');\r\n// });\r\n\r\nvar swiper = new Swiper(\".cta-swiper\", {\r\n    navigation: {\r\n      nextEl: \".swiper-button-next\",\r\n      prevEl: \".swiper-button-prev\",\r\n    },\r\n    autoplay: {\r\n        delay: 3000,\r\n    },\r\n    loop: true,\r\n});\r\n\r\nvar swiper = new Swiper(\".hero-swiper\", {\r\n    navigation: {\r\n      nextEl: \".swiper-button-next-hero\",\r\n      prevEl: \".swiper-button-prev-hero\",\r\n    },\r\n    autoplay: {\r\n        delay: 4000,\r\n    },\r\n    loop: true,\r\n});\r\n\r\n\r\nconst countupElements = document.querySelectorAll(\".countup\");\r\n\r\n    function countUp(duration, finalValue, element) {\r\n        const startingValue = parseInt(element.innerText);\r\n        const increment = finalValue / (duration / 10);\r\n        let currentValue = startingValue;\r\n        console.log(duration, finalValue, element);\r\n        function updateCountUp() {\r\n            currentValue += increment;\r\n            if (currentValue >= finalValue) {\r\n                element.innerText = finalValue;\r\n            } else {\r\n                element.innerText = Math.round(currentValue);\r\n                setTimeout(updateCountUp, 10);\r\n            }\r\n        }\r\n\r\n        updateCountUp();\r\n    }\r\n\r\n    const observer = new IntersectionObserver(entries => {\r\n        entries.forEach(entry => {\r\n            if (entry.isIntersecting) {\r\n                const container = entry.target.parentElement;\r\n                const elementsToAnimate = container.querySelectorAll(\".countup\");\r\n                elementsToAnimate.forEach(element => {\r\n                    countUp(2000, parseInt(element.dataset.finalValue), element);\r\n                });\r\n            }\r\n        });\r\n    }, { threshold: 0.5 });\r\n\r\n    countupElements.forEach(element => {\r\n        observer.observe(element);\r\n    });\r\n\r\n\r\n    const parallaxBg = document.querySelector(\".parallax-bg\");\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/filter-posts.js"]();
/******/ 	__webpack_modules__["./src/js/install-theme.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;