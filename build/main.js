(()=>{var __webpack_modules__={"./src/js/create-payment-intent.js":
/*!*****************************************!*\
  !*** ./src/js/create-payment-intent.js ***!
  \*****************************************/()=>{eval("\n\n//# sourceURL=webpack://webpack/./src/js/create-payment-intent.js?")},"./src/js/easy-auth/easy-auth.js":
/*!***************************************!*\
  !*** ./src/js/easy-auth/easy-auth.js ***!
  \***************************************/()=>{eval("jQuery('.login-ajax-form').on(\"submit\", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button\r\n\r\n    e.preventDefault();\r\n    var userEmailVar = jQuery(\"#easy-auth-email\").val();\r\n    console.log(userEmailVar);\r\n\r\n    // Cookies.set('userToken', userTokenVar, { expires: 1 }); // docs: https://github.com/js-cookie/js-cookie\r\n\r\n    var formData = {\r\n      action: 'checkUser',\r\n    //   page_id: curr_post_id,\r\n      email: userEmailVar,\r\n      redirectLink: jQuery(\"#clickedUrl\").val(),\r\n    };\r\n\r\n    jQuery.ajax({\r\n      type: 'POST',\r\n      url:  generic_ajax_object.ajax_url,\r\n      dataType: 'html',\r\n      data: formData,\r\n      success: function(data) {\r\n        data = jQuery.trim(data);\r\n        jQuery('#exampleModal').modal('hide');\r\n        console.log(data);\r\n        if( data == 'user-exists' ) {\r\n        //   jQuery('#exampleModal3').modal('toggle');\r\n        console.log(\"user exists\");\r\n        } else {\r\n            console.log(\"user NOT exists\");\r\n        //   jQuery('#exampleModal2').modal('toggle');\r\n\r\n        //   var loadingWheel = jQuery('#loading-second-step').hide();\r\n          //Attach the event handler to any element\r\n          // jQuery(document)\r\n          //   .ajaxStart(function () {\r\n          //      //ajax request went so show the loading image\r\n          //       // loadingWheel.show();\r\n          //   })\r\n          // .ajaxStop(function () {\r\n          //     //got response so hide the loading image\r\n          //   //    loadingWheel.hide();\r\n          //  });\r\n           \r\n        }\r\n        \r\n        return data;\r\n      },\r\n      error: function(request, status, error){\r\n        console.log(status);\r\n        alert(request.responseText);\r\n        console.log(data);\r\n\r\n  \r\n      }\r\n    });\r\n\r\n});\n\n//# sourceURL=webpack://webpack/./src/js/easy-auth/easy-auth.js?")},"./src/js/filter-posts.js":
/*!********************************!*\
  !*** ./src/js/filter-posts.js ***!
  \********************************/()=>{eval("// console.log(\"hiii\");\r\n// jQuery('.secondary-nav-category-term').on(\"click\", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button\r\n\r\n//     e.preventDefault();\r\n//     var navCatID = jQuery(this).attr(\"data-cat-id\");\r\n\r\n//     // Cookies.set('userToken', userTokenVar, { expires: 1 }); // docs: https://github.com/js-cookie/js-cookie\r\n\r\n//     var formData = {\r\n//       action: 'filter_posts',\r\n//       page_id: curr_post_id,\r\n//       category_id: navCatID,\r\n//     };\r\n\r\n//     jQuery.ajax({\r\n//       type: 'POST',\r\n//       url:  ajax_url,\r\n//       dataType: 'html',\r\n//       data: formData,\r\n//       success: function(data) {\r\n//         console.log(data);\r\n\r\n//           var loadingWheel = jQuery('#loading-wheel').hide();\r\n//           //Attach the event handler to any element\r\n//           jQuery(document)\r\n//             .ajaxStart(function () {\r\n//                //ajax request went so show the loading image\r\n//                 loadingWheel.show();\r\n//             })\r\n//           .ajaxStop(function () {\r\n//               //got response so hide the loading image\r\n//                loadingWheel.hide();\r\n//            });\r\n\r\n//         },\r\n\r\n//         // return data;\r\n//         error: function(request, status, error){\r\n//           console.log(res);\r\n//           alert(request.responseText);\r\n//           console.log(data);\r\n//         }\r\n\r\n//       });\r\n// });\r\n\n\n//# sourceURL=webpack://webpack/./src/js/filter-posts.js?")},"./src/js/install-theme.js":
/*!*********************************!*\
  !*** ./src/js/install-theme.js ***!
  \*********************************/()=>{eval("/**\n * This is for the future to make this theme dynamic as it comes with naming on npm install theme!\n * @category - Under construction\n */\n\n// import inquirer from 'inquirer';\n// import StringReplaceWebpackPlugin from 'string-replace-webpack-plugin';\n\n\n// inquirer\n//   .prompt([\n//     {\n//       type: 'input',\n//       name: 'BK_STARTER_THEME_PATH',\n//       message: 'Enter the value to replace BK_STARTER_THEME_PATH:'\n//     }\n//   ])\n//   .then(answers => {\n//     const webpackConfig = {\n//       // ...\n//       plugins: [\n//         new StringReplaceWebpackPlugin({\n//           search: 'BK_STARTER_THEME_PATH',\n//           replace: answers.BK_STARTER_THEME_PATH\n//         })\n//       ]\n//     };\n\n//     // Run Webpack with the updated configuration\n//     // ...\n//   });\n\n//# sourceURL=webpack://webpack/./src/js/install-theme.js?")},"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/()=>{eval('\r\ndocument.addEventListener(\'DOMContentLoaded\', function() {\r\n    /**************************************************************************************************/\r\n\r\nfunction img2svg(obj) {\r\n    //  Replace all SVG images with inline SVG \r\n    jQuery(obj).each(function() {\r\n        var $img = jQuery(this);\r\n        var imgID = $img.attr(\'id\');\r\n        var imgClass = $img.attr(\'class\');\r\n        var imgURL = $img.attr(\'src\');\r\n        var imgStyle = $img.attr(\'style\');\r\n        jQuery.get(imgURL, function(data) {\r\n    //          Get the SVG tag, ignore the rest\r\n            var $svg = jQuery(data).find(\'svg\');\r\n    //         Add replaced image\'s ID to the new SVG\r\n            if (typeof imgID !== \'undefined\') {\r\n                $svg = $svg.attr(\'id\', imgID);\r\n            }\r\n    //         Add replaced image\\\'s classes to the new SVG\r\n            if (typeof imgClass !== \'undefined\') {\r\n                $svg = $svg.attr(\'class\', imgClass + \' replaced-svg\');\r\n            }       \r\n    //         Add style image\\\'s to the new SVG\r\n    if (typeof imgStyle !== \'undefined\') {\r\n        $svg = $svg.attr(\'style\', imgStyle);\r\n    }\r\n    //         Remove any invalid XML tags as per http:validator.w3.org\r\n            $svg = $svg.removeAttr(\'xmlns:a\');\r\n    //         Replace image with new SVG\r\n            $img.replaceWith($svg);\r\n            var $btn = $svg.parent();\r\n            if ($btn.hasClass(\'btn-toShop\')) {\r\n                var iconBG = $btn.css(\'backgroundColor\');\r\n                $svg.find(\'.iconBG\').attr("fill", iconBG);\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n/****************************************************************************** */\r\n\r\nimg2svg(\'img[src$=".svg"]\');\r\n\r\n/****************************************************************************** */\r\n\r\nfunction assignActiveHeaderNav() {\r\n  // assign \'active\' class on current nav item\r\n  const bodyClass = document.body.getAttribute("class");\r\n  let headerNavLink = document.querySelectorAll(".header-nav-links");\r\n  // Use regular expression to search for "page-id-{N}" pattern\r\n  const match = bodyClass.match(/page-id-(\\d+)/);\r\n\r\n  if (match) {\r\n      // Extract the page ID from the match object\r\n      const pageId = match[1];\r\n      // console.log("Page ID:", pageId);\r\n      headerNavLink.forEach((link) => {\r\n          // console.log(link.getAttribute("data-page-id"));\r\n          if( link.getAttribute("data-page-id") == pageId ) {\r\n              link.classList.add("active"); \r\n          } else {\r\n              link.classList.remove("active");\r\n          }\r\n      });\r\n  } else {\r\n      console.log("Page ID not found in body class.");\r\n  }\r\n}\r\n\r\nassignActiveHeaderNav();\r\n\r\n\r\n/**\r\n * Filter posts from single post (go to news index page and trigger click for filter)\r\n */\r\n jQuery(\'.go-to-news-index\').on("click", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button\r\n\r\n    e.preventDefault();\r\n    \r\n    let term = jQuery(this).attr("data-cat-id");\r\n    let newsIndexPage = generic_ajax_object.news_index;\r\n    \r\n    jQuery.cookie(\'clickedTerm\', term, { path: \'/\' });\r\n\r\n    // Redirect to the desired page\r\n    window.location.href = newsIndexPage;\r\n\r\n\r\n });\r\n\r\n // Wait for the page to load and trigger the click event\r\njQuery(window).on(\'load\', function() {\r\n    if (!!jQuery.cookie(\'clickedTerm\')) {\r\n        // have cookie\r\n        jQuery(".secondary-nav-category-term").each(function(btn) {\r\n            if (jQuery.cookie(\'clickedTerm\') == jQuery(this).attr("data-cat-id")) {\r\n                jQuery(this).click();\r\n            }\r\n        })\r\n        jQuery.removeCookie(\'clickedTerm\', { path: \'/\' });\r\n       }\r\n});\r\n\r\n/****************************************************************************** */\r\n\r\n/**\r\n * Filter posts\r\n * Action is hooking on filter and sorting posts\r\n */\r\n\r\njQuery(\'.secondary-nav-category-term, #sort-posts\').on("click change", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button\r\n\r\n    e.preventDefault();\r\n    var clickedElem = jQuery(this);\r\n    console.log("clicked!")\r\n    /**\r\n     * Check if clicked element is a filter, in that case toggle active class\r\n     */\r\n    if( clickedElem.hasClass("secondary-nav-category-term") ) {\r\n        jQuery(".secondary-nav-category-term").removeClass("active");\r\n    \r\n        jQuery(this).addClass("active");\r\n    }\r\n\r\n    var navCatID = jQuery(".secondary-nav-category-term.active").attr("data-cat-id");\r\n\r\n    var postOrder = jQuery(\'#sort-posts\').val();\r\n    console.log(postOrder);\r\n\r\n    // Cookies.set(\'userToken\', userTokenVar, { expires: 1 }); // docs: https://github.com/js-cookie/js-cookie\r\n\r\n    var formData = {\r\n      action        : \'filter_posts\',\r\n      page_id       : generic_ajax_object.curr_post_id,\r\n      category_id   : navCatID,\r\n      order         : postOrder,\r\n    };\r\n\r\n    \r\n\r\n    jQuery.ajax({\r\n      type      : \'POST\',\r\n      url       :  generic_ajax_object.ajax_url,\r\n      dataType  : \'html\',\r\n      data      : formData,\r\n      success: function(data) {\r\n\r\n        jQuery(\'.posts-ajax-cards-row\').html(data);\r\n\r\n          var loadingWheel = jQuery(\'#loading-wheel\').hide();\r\n          //Attach the event handler to any element\r\n          jQuery(document)\r\n            .ajaxStart(function () {\r\n               //ajax request went so show the loading image\r\n                // loadingWheel.show();\r\n            })\r\n          .ajaxStop(function () {\r\n              //got response so hide the loading image\r\n            //    loadingWheel.hide();\r\n           });\r\n\r\n        },\r\n\r\n        // return data;\r\n        error: function(request, status, error) {\r\n          console.log(request);\r\n          alert(request.responseText);\r\n          console.log(error);\r\n        }\r\n\r\n      });\r\n});\r\n\r\n/****************************************************************** */\r\n\r\n/**\r\n * Load more\r\n * Action is hooking on filter and sorting posts\r\n */\r\nvar offset = 0;\r\nvar maxNumPagesCounter = 1;\r\n jQuery(\'#load-more, #sort-posts\').on("click change", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button\r\n\r\n    e.preventDefault();\r\n\r\n    if( jQuery(this).hasClass("load-more-btn") ) {\r\n        maxNumPagesCounter++;\r\n        offset += 11;\r\n    }\r\n\r\n    /**\r\n     * Clicking on filter item again requires offset, maxNumPagesCounter to be reseted and load more button to be shown again.\r\n     */\r\n    jQuery(\'.secondary-nav-category-term\').on("click", function(e) {\r\n        jQuery("#load-more").show();\r\n        offset = 0;\r\n        maxNumPagesCounter = 1;\r\n    });\r\n\r\n    /**\r\n     * Hide load more button if all posts are loaded\r\n     */\r\n    if( maxNumPagesCounter == jQuery("#news-hub-wrap").attr("data-max-num-pages") ) {\r\n        jQuery("#load-more").hide();\r\n    }\r\n\r\n    var postOrder = jQuery(\'#sort-posts\').val();\r\n\r\n    /**\r\n     * Load more posts but only within filter scope\r\n     */\r\n    var activeID = jQuery(".secondary-nav-category-term.active").attr("data-cat-id");\r\n\r\n    var formData = {\r\n      action    : \'load_more_posts\',\r\n      page_id   : generic_ajax_object.curr_post_id,\r\n      activeID  : activeID,\r\n      offset    : offset,\r\n      order     : postOrder,\r\n    };\r\n\r\n    jQuery.ajax({\r\n      type: \'POST\',\r\n      url:  generic_ajax_object.ajax_url,\r\n      dataType: \'html\',\r\n      data: formData,\r\n      success: function(data) {\r\n        console.log(data);\r\n\r\n        jQuery(data).appendTo(\'.posts-ajax-cards-row\');\r\n\r\n        //   var loadingWheel = jQuery(\'#loading-wheel\').hide();\r\n          //Attach the event handler to any element\r\n          jQuery(document)\r\n            .ajaxStart(function () {\r\n               //ajax request went so show the loading image\r\n                // loadingWheel.show();\r\n            })\r\n          .ajaxStop(function () {\r\n              //got response so hide the loading image\r\n            //    loadingWheel.hide();\r\n           });\r\n\r\n        },\r\n\r\n        // return data;\r\n        error: function(request, status, error) {\r\n          console.log(request);\r\n          alert(request.responseText);\r\n          console.log(error);\r\n        }\r\n\r\n      });\r\n});\r\n\r\n/****************************************************************** */\r\n\r\n/**\r\n * Load more\r\n * Action is hooking on filter and sorting posts\r\n */\r\n var offset = 0;\r\n var maxNumPagesCounter = 1;\r\n  jQuery(\'.load-more-videos\').on("click", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button\r\n \r\n     e.preventDefault();\r\n     var active_slug          = jQuery(this).attr("data-active-slug");\r\n     maxNumPagesCounter       = parseInt( jQuery(this).attr("data-max-pages-counter") );\r\n     offset                   = parseInt( jQuery(this).attr("data-offset") );\r\n\r\n     console.log(offset);\r\n     console.log(maxNumPagesCounter);\r\n\r\n \r\n     if( jQuery(this).hasClass("load-more-btn") ) {\r\n         maxNumPagesCounter++;\r\n         offset += 3;\r\n     }\r\n\r\n \r\n     /**\r\n      * Hide load more button if all posts are loaded\r\n      */\r\n     if( maxNumPagesCounter == jQuery("#load-more-videos[data-active-slug="+active_slug+"]").attr("data-max-num-pages") ) {\r\n        console.log("sold!");\r\n        console.log(jQuery(\'#load-more-videos\'));\r\n        jQuery(\'#load-more-videos[data-active-slug="\' + active_slug + \'"]\').hide();\r\n     }\r\n\r\n \r\n     /**\r\n      * Load more posts but only within filter scope\r\n      */\r\n    //  var activeID = jQuery(".secondary-nav-category-term.active").attr("data-cat-id");\r\n \r\n     var formData = {\r\n       action       : \'load_more_videos\',\r\n       page_id      : generic_ajax_object.curr_post_id,\r\n       active_slug  : active_slug,\r\n       offset       : offset,\r\n     };\r\n \r\n     jQuery.ajax({\r\n       type: \'POST\',\r\n       url:  generic_ajax_object.ajax_url,\r\n       dataType: \'html\',\r\n       data: formData,\r\n       success: function(data) {\r\n        //  console.log(data);\r\n \r\n         jQuery(data).appendTo(\'#video-hub-section-append[data-slug=\'+active_slug+\']\');\r\n \r\n         //   var loadingWheel = jQuery(\'#loading-wheel\').hide();\r\n           //Attach the event handler to any element\r\n           jQuery(document)\r\n             .ajaxStart(function () {\r\n                //ajax request went so show the loading image\r\n                 // loadingWheel.show();\r\n             })\r\n           .ajaxStop(function () {\r\n               //got response so hide the loading image\r\n             //    loadingWheel.hide();\r\n            });\r\n            \r\n            jQuery("#load-more-videos[data-active-slug="+active_slug+"]").attr("data-max-pages-counter", maxNumPagesCounter );\r\n            jQuery("#load-more-videos[data-active-slug="+active_slug+"]").attr("data-offset", offset);\r\n         },\r\n \r\n         // return data;\r\n         error: function(request, status, error) {\r\n           console.log(request);\r\n           alert(request.responseText);\r\n           console.log(error);\r\n         }\r\n \r\n       });\r\n\r\n\r\n       /*********************************************************** */\r\n\r\n       /**\r\n        * Easy auth\r\n        */\r\n\r\n\r\n       /******************************************************* */\r\n\r\n });\r\n \r\n/****************************************************************** */\r\n\r\nif( jQuery(\'#shopPopup\').length > 0 ){\r\n  jQuery(\'#shopPopup\').modal(\'show\');\r\n}\r\n\r\n});\r\n\r\nwindow.addEventListener(\'scroll\', function() {\r\n    // Your code here\r\n\r\n});\r\n\r\nwindow.addEventListener(\'resize\', function() {\r\n    // Your code here\r\n    \r\n});\r\n\r\n// document.getElementById(\'hamburger\').addEventListener("click", function(){\r\n//     this.classList.toggle(\'active\');\r\n// });\r\n\r\nvar swiper = new Swiper(".cta-swiper", {\r\n    navigation: {\r\n      nextEl: ".swiper-button-next",\r\n      prevEl: ".swiper-button-prev",\r\n    },\r\n    autoplay: {\r\n        delay: 5000,\r\n    },\r\n    loop: true,\r\n});\r\n\r\nvar swiper = new Swiper(".hero-swiper", {\r\n    navigation: {\r\n      nextEl: ".swiper-button-next-hero",\r\n      prevEl: ".swiper-button-prev-hero",\r\n    },\r\n    autoplay: {\r\n        delay: 6000,\r\n    },\r\n    loop: true,\r\n});\r\n\r\nvar swiper = new Swiper(".cta-swiper-block", {\r\n  autoplay: {\r\n      delay: 5000,\r\n  },\r\n  loop: true,\r\n});\r\n\r\nvar swiper = new Swiper(".link-card-swiper", {\r\n    slidesPerView: "auto",\r\n    spaceBetween: 32,\r\n    navigation: {\r\n      nextEl: ".swiper-button-next-cards",\r\n      prevEl: ".swiper-button-prev-cards",\r\n    },\r\n\r\n});\r\n\r\n\r\n\r\nconst countupElements = document.querySelectorAll(".countup");\r\n\r\n    function countUp(duration, finalValue, element) {\r\n        const startingValue = parseInt(element.innerText);\r\n        const increment = finalValue / (duration / 10);\r\n        let currentValue = startingValue;\r\n        console.log(duration, finalValue, element);\r\n        function updateCountUp() {\r\n            currentValue += increment;\r\n            if (currentValue >= finalValue) {\r\n                element.innerText = finalValue;\r\n            } else {\r\n                element.innerText = Math.round(currentValue);\r\n                setTimeout(updateCountUp, 10);\r\n            }\r\n        }\r\n\r\n        updateCountUp();\r\n    }\r\n\r\n    const observer = new IntersectionObserver(entries => {\r\n        entries.forEach(entry => {\r\n            if (entry.isIntersecting) {\r\n                const container = entry.target.parentElement;\r\n                const elementsToAnimate = container.querySelectorAll(".countup");\r\n                elementsToAnimate.forEach(element => {\r\n                    countUp(2000, parseInt(element.dataset.finalValue), element);\r\n                });\r\n            }\r\n        });\r\n    }, { threshold: 0.5 });\r\n\r\n    countupElements.forEach(element => {\r\n        observer.observe(element);\r\n    });\r\n\r\n\r\n\r\n    var image = document.getElementsByClassName(\'parallax\');\r\n    new simpleParallax(image);\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/js/main.js?')},"./src/js/membership/membership.js":
/*!*****************************************!*\
  !*** ./src/js/membership/membership.js ***!
  \*****************************************/()=>{eval('// console.log("membership inited");\r\n\r\njQuery("#membership-sign-up").on("click", function(e){\r\n \r\n    e.preventDefault();\r\n\r\n    var term = jQuery("#membership-email").val();\r\n\r\n    jQuery.cookie(\'membership-email\', term, { path: \'/\' });\r\n\r\n    // Redirect to the desired page\r\n    console.log(generic_ajax_object.membership_register);\r\n    window.location.href = generic_ajax_object.membership_register;\r\n\r\n\r\n});\r\n\r\njQuery(document).ready(function() {\r\n    // console.log(generic_ajax_object.realPath+"/register")\r\n    if (window.location.href.indexOf(generic_ajax_object.realPath+"/register") != -1) {\r\n        var email = jQuery.cookie(\'membership-email\');\r\n        if (email != null) {\r\n            jQuery(\'input[name="user_email"]\').val(email);\r\n            jQuery.removeCookie(\'membership-email\', { path: \'/\' });\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://webpack/./src/js/membership/membership.js?')},"./src/js/parseExternalNews/parseExternalNews.js":
/*!*******************************************************!*\
  !*** ./src/js/parseExternalNews/parseExternalNews.js ***!
  \*******************************************************/(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval("const { Readability } = __webpack_require__(/*! @mozilla/readability */ \"./node_modules/@mozilla/readability/index.js\");\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n\r\n  if( generic_ajax_object.fetch_news ) {\r\n\r\n    let finalResults = []\r\n    let category = generic_ajax_object.tags;\r\n    console.log(category);\r\n\r\n    // Build the URL we are going to request. This will get articles related to Apple and sort them newest first\r\n    let url = 'https://newsapi.org/v2/everything?' +\r\n        'q=' + category + '&' +\r\n        'sortBy=publishedAt&' +\r\n        'pageSize='+ generic_ajax_object.fetch_daily +'&' +\r\n        'apiKey=' + generic_ajax_object.newsApiKey;\r\n\r\n    // Make the request with jQuery's ajax() function\r\n    jQuery.ajax({\r\n        url: url,\r\n        method: \"GET\",\r\n    }).then(function(r1) {\r\n        let results = r1.articles;\r\n\r\n        // Create an array of AJAX promises for individual article requests\r\n        let promises = results.map(function(result) {\r\n        return jQuery.ajax({\r\n            url: result.url,\r\n            method: \"GET\"\r\n        }).then(function(r2) {\r\n            // We now have the article HTML, create a jQuery object from it\r\n            let $article = jQuery(r2);\r\n\r\n            // Create a DOM document from the HTML string\r\n            const domParser = new DOMParser();\r\n            const doc = domParser.parseFromString(r2, 'text/html');\r\n\r\n            // Use jQuery to locate the article content\r\n            let articleContent = new Readability(doc).parse();\r\n            let articleContentRaw = articleContent.textContent;\r\n\r\n            finalResults.push({\r\n                description     : result.description,\r\n                publishedAt     : result.publishedAt,\r\n                title           : result.title,\r\n                url             : result.url,\r\n                urlToImage      : result.urlToImage,\r\n                content         : articleContentRaw.replace(/\\n/g, '\\n\\n'),\r\n            });\r\n\r\n        }).catch(function(error) {\r\n            if (error.status === 403) {\r\n            console.log('Skipped article due to 403 error:', result.url);\r\n            } else {\r\n            console.log('Error fetching article:', error);\r\n            }\r\n            // Return a resolved promise to skip the error and continue with the next article\r\n            return Promise.resolve();\r\n        });\r\n        });\r\n\r\n        // Wait for all promises to resolve\r\n        return Promise.all(promises);\r\n\r\n    }).then(function() {\r\n        console.log(finalResults);\r\n\r\n        var formData = {\r\n        action: 'parse_external_news_api',\r\n        finalResults: finalResults,\r\n        };\r\n\r\n        // Push that bitch to ajax PHP\r\n        jQuery.ajax({\r\n        type: 'POST',\r\n        url: generic_ajax_object.ajax_url,\r\n        data: formData,\r\n        success: function(data) {\r\n            jQuery(document)\r\n            .ajaxStart(function () {\r\n                //ajax request went so show the loading image\r\n                // loadingWheel.show();\r\n            })\r\n            .ajaxStop(function () {\r\n                //got response so hide the loading image\r\n                //    loadingWheel.hide();\r\n            });\r\n        },\r\n        error: function(request, status, error) {\r\n            console.log(request);\r\n            console.log(error);\r\n            alert(status);\r\n        }\r\n        });\r\n\r\n    }).catch(function(error) {\r\n        console.log('Error fetching articles:', error);\r\n    });\r\n\r\n  }\r\n\r\n});\n\n//# sourceURL=webpack://webpack/./src/js/parseExternalNews/parseExternalNews.js?")}},__webpack_module_cache__={},deferred;function __webpack_require__(r){var e=__webpack_module_cache__[r];if(void 0!==e)return e.exports;var n=__webpack_module_cache__[r]={exports:{}};return __webpack_modules__[r](n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(r,e,n,t)=>{if(!e){var a=1/0;for(l=0;l<deferred.length;l++){for(var[e,n,t]=deferred[l],o=!0,s=0;s<e.length;s++)(!1&t||a>=t)&&Object.keys(__webpack_require__.O).every((r=>__webpack_require__.O[r](e[s])))?e.splice(s--,1):(o=!1,t<a&&(a=t));if(o){deferred.splice(l--,1);var i=n();void 0!==i&&(r=i)}}return r}t=t||0;for(var l=deferred.length;l>0&&deferred[l-1][2]>t;l--)deferred[l]=deferred[l-1];deferred[l]=[e,n,t]},__webpack_require__.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{var r={main:0};__webpack_require__.O.j=e=>0===r[e];var e=(e,n)=>{var t,a,[o,s,i]=n,l=0;if(o.some((e=>0!==r[e]))){for(t in s)__webpack_require__.o(s,t)&&(__webpack_require__.m[t]=s[t]);if(i)var c=i(__webpack_require__)}for(e&&e(n);l<o.length;l++)a=o[l],__webpack_require__.o(r,a)&&r[a]&&r[a][0](),r[a]=0;return __webpack_require__.O(c)},n=self.webpackChunkwebpack=self.webpackChunkwebpack||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),__webpack_require__.O(void 0,["vendors-node_modules_mozilla_readability_index_js"],(()=>__webpack_require__("./src/js/create-payment-intent.js"))),__webpack_require__.O(void 0,["vendors-node_modules_mozilla_readability_index_js"],(()=>__webpack_require__("./src/js/easy-auth/easy-auth.js"))),__webpack_require__.O(void 0,["vendors-node_modules_mozilla_readability_index_js"],(()=>__webpack_require__("./src/js/filter-posts.js"))),__webpack_require__.O(void 0,["vendors-node_modules_mozilla_readability_index_js"],(()=>__webpack_require__("./src/js/install-theme.js"))),__webpack_require__.O(void 0,["vendors-node_modules_mozilla_readability_index_js"],(()=>__webpack_require__("./src/js/main.js"))),__webpack_require__.O(void 0,["vendors-node_modules_mozilla_readability_index_js"],(()=>__webpack_require__("./src/js/membership/membership.js")));var __webpack_exports__=__webpack_require__.O(void 0,["vendors-node_modules_mozilla_readability_index_js"],(()=>__webpack_require__("./src/js/parseExternalNews/parseExternalNews.js")));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();