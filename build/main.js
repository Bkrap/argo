<<<<<<< HEAD
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
=======
(()=>{var e,t={2792:()=>{},4794:()=>{jQuery(".login-ajax-form").on("submit",(function(e){e.preventDefault();var t=jQuery("#easy-auth-email").val();console.log(t);var a={action:"checkUser",email:t,redirectLink:jQuery("#clickedUrl").val()};jQuery.ajax({type:"POST",url:generic_ajax_object.ajax_url,dataType:"html",data:a,success:function(e){return e=jQuery.trim(e),jQuery("#exampleModal").modal("hide"),console.log(e),"user-exists"==e?console.log("user exists"):console.log("user NOT exists"),e},error:function(e,t,a){console.log(t),alert(e.responseText),console.log(data)}})}))},3499:()=>{},5987:()=>{},2693:()=>{document.addEventListener("DOMContentLoaded",(function(){jQuery('img[src$=".svg"]').each((function(){var e=jQuery(this),t=e.attr("id"),a=e.attr("class"),o=e.attr("src"),r=e.attr("style");jQuery.get(o,(function(o){var n=jQuery(o).find("svg");void 0!==t&&(n=n.attr("id",t)),void 0!==a&&(n=n.attr("class",a+" replaced-svg")),void 0!==r&&(n=n.attr("style",r)),n=n.removeAttr("xmlns:a"),e.replaceWith(n);var i=n.parent();if(i.hasClass("btn-toShop")){var c=i.css("backgroundColor");n.find(".iconBG").attr("fill",c)}}))})),function(){const e=document.body.getAttribute("class");let t=document.querySelectorAll(".header-nav-links");const a=e.match(/page-id-(\d+)/);if(a){const e=a[1];t.forEach((t=>{t.getAttribute("data-page-id")==e?t.classList.add("active"):t.classList.remove("active")}))}else console.log("Page ID not found in body class.")}(),jQuery(".go-to-news-index").on("click",(function(e){e.preventDefault();let t=jQuery(this).attr("data-cat-id"),a=generic_ajax_object.news_index;jQuery.cookie("clickedTerm",t,{path:"/"}),window.location.href=a})),jQuery(window).on("load",(function(){jQuery.cookie("clickedTerm")&&(jQuery(".secondary-nav-category-term").each((function(e){jQuery.cookie("clickedTerm")==jQuery(this).attr("data-cat-id")&&jQuery(this).click()})),jQuery.removeCookie("clickedTerm",{path:"/"}))})),jQuery(".secondary-nav-category-term, #sort-posts").on("click change",(function(e){e.preventDefault();var t=jQuery(this);console.log("clicked!"),t.hasClass("secondary-nav-category-term")&&(jQuery(".secondary-nav-category-term").removeClass("active"),jQuery(this).addClass("active"));var a=jQuery(".secondary-nav-category-term.active").attr("data-cat-id"),o=jQuery("#sort-posts").val();console.log(o);var r={action:"filter_posts",page_id:generic_ajax_object.curr_post_id,category_id:a,order:o};jQuery.ajax({type:"POST",url:generic_ajax_object.ajax_url,dataType:"html",data:r,success:function(e){jQuery(".posts-ajax-cards-row").html(e);jQuery("#loading-wheel").hide();jQuery(document).ajaxStart((function(){})).ajaxStop((function(){}))},error:function(e,t,a){console.log(e),alert(e.responseText),console.log(a)}})}));var e=0,t=1;jQuery("#load-more, #sort-posts").on("click change",(function(a){a.preventDefault(),jQuery(this).hasClass("load-more-btn")&&(t++,e+=11),jQuery(".secondary-nav-category-term").on("click",(function(a){jQuery("#load-more").show(),e=0,t=1})),t==jQuery("#news-hub-wrap").attr("data-max-num-pages")&&jQuery("#load-more").hide();var o=jQuery("#sort-posts").val(),r=jQuery(".secondary-nav-category-term.active").attr("data-cat-id"),n={action:"load_more_posts",page_id:generic_ajax_object.curr_post_id,activeID:r,offset:e,order:o};jQuery.ajax({type:"POST",url:generic_ajax_object.ajax_url,dataType:"html",data:n,success:function(e){console.log(e),jQuery(e).appendTo(".posts-ajax-cards-row"),jQuery(document).ajaxStart((function(){})).ajaxStop((function(){}))},error:function(e,t,a){console.log(e),alert(e.responseText),console.log(a)}})}));e=0,t=1;jQuery(".load-more-videos").on("click",(function(a){a.preventDefault();var o=jQuery(this).attr("data-active-slug");t=parseInt(jQuery(this).attr("data-max-pages-counter")),e=parseInt(jQuery(this).attr("data-offset")),console.log(e),console.log(t),jQuery(this).hasClass("load-more-btn")&&(t++,e+=3),t==jQuery("#load-more-videos[data-active-slug="+o+"]").attr("data-max-num-pages")&&(console.log("sold!"),console.log(jQuery("#load-more-videos")),jQuery('#load-more-videos[data-active-slug="'+o+'"]').hide());var r={action:"load_more_videos",page_id:generic_ajax_object.curr_post_id,active_slug:o,offset:e};jQuery.ajax({type:"POST",url:generic_ajax_object.ajax_url,dataType:"html",data:r,success:function(a){jQuery(a).appendTo("#video-hub-section-append[data-slug="+o+"]"),jQuery(document).ajaxStart((function(){})).ajaxStop((function(){})),jQuery("#load-more-videos[data-active-slug="+o+"]").attr("data-max-pages-counter",t),jQuery("#load-more-videos[data-active-slug="+o+"]").attr("data-offset",e)},error:function(e,t,a){console.log(e),alert(e.responseText),console.log(a)}})})),jQuery("#shopPopup").length>0&&jQuery("#shopPopup").modal("show")})),window.addEventListener("scroll",(function(){})),window.addEventListener("resize",(function(){}));new Swiper(".cta-swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:5e3},loop:!0}),new Swiper(".hero-swiper",{navigation:{nextEl:".swiper-button-next-hero",prevEl:".swiper-button-prev-hero"},autoplay:{delay:6e3},loop:!0}),new Swiper(".cta-swiper-block",{autoplay:{delay:5e3},loop:!0}),new Swiper(".link-card-swiper",{slidesPerView:"auto",spaceBetween:32,navigation:{nextEl:".swiper-button-next-cards",prevEl:".swiper-button-prev-cards"}});const e=document.querySelectorAll(".countup");const t=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){e.target.parentElement.querySelectorAll(".countup").forEach((e=>{!function(e,t,a){const o=parseInt(a.innerText),r=t/(e/10);let n=o;console.log(e,t,a),function e(){n+=r,n>=t?a.innerText=t:(a.innerText=Math.round(n),setTimeout(e,10))}()}(2e3,parseInt(e.dataset.finalValue),e)}))}}))}),{threshold:.5});e.forEach((e=>{t.observe(e)}));var a=document.getElementsByClassName("parallax");new simpleParallax(a)},8480:()=>{jQuery("#membership-sign-up").on("click",(function(e){e.preventDefault();var t=jQuery("#membership-email").val();jQuery.cookie("membership-email",t,{path:"/"}),console.log(generic_ajax_object.membership_register),window.location.href=generic_ajax_object.membership_register})),jQuery(document).ready((function(){if(-1!=window.location.href.indexOf(generic_ajax_object.realPath+"/register")){var e=jQuery.cookie("membership-email");null!=e&&(jQuery('input[name="user_email"]').val(e),jQuery.removeCookie("membership-email",{path:"/"}))}}))},4423:(e,t,a)=>{const{Readability:o}=a(6107);document.addEventListener("DOMContentLoaded",(function(){if(generic_ajax_object.fetch_news){let e=[],t=generic_ajax_object.tags;console.log(t);let a="https://newsapi.org/v2/everything?q="+t+"&sortBy=publishedAt&pageSize="+generic_ajax_object.fetch_daily+"&apiKey="+generic_ajax_object.newsApiKey;jQuery.ajax({url:a,method:"GET"}).then((function(t){let a=t.articles.map((function(t){return jQuery.ajax({url:t.url,method:"GET"}).then((function(a){jQuery(a);const r=(new DOMParser).parseFromString(a,"text/html");let n=new o(r).parse().textContent;e.push({description:t.description,publishedAt:t.publishedAt,title:t.title,url:t.url,urlToImage:t.urlToImage,content:n.replace(/\n/g,"\n\n")})})).catch((function(e){return 403===e.status?console.log("Skipped article due to 403 error:",t.url):console.log("Error fetching article:",e),Promise.resolve()}))}));return Promise.all(a)})).then((function(){console.log(e);var t={action:"parse_external_news_api",finalResults:e};jQuery.ajax({type:"POST",url:generic_ajax_object.ajax_url,data:t,success:function(e){jQuery(document).ajaxStart((function(){})).ajaxStop((function(){}))},error:function(e,t,a){console.log(e),console.log(a),alert(t)}})})).catch((function(e){console.log("Error fetching articles:",e)}))}}))}},a={};function o(e){var r=a[e];if(void 0!==r)return r.exports;var n=a[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,a,r,n)=>{if(!a){var i=1/0;for(u=0;u<e.length;u++){for(var[a,r,n]=e[u],c=!0,s=0;s<a.length;s++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](a[s])))?a.splice(s--,1):(c=!1,n<i&&(i=n));if(c){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,r,n]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0,415:0,791:0,119:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[i,c,s]=a,l=0;if(i.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var u=s(o)}for(t&&t(a);l<i.length;l++)n=i[l],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},a=self.webpackChunkwebpack=self.webpackChunkwebpack||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),o.O(void 0,[107],(()=>o(2792))),o.O(void 0,[107],(()=>o(4794))),o.O(void 0,[107],(()=>o(3499))),o.O(void 0,[107],(()=>o(5987))),o.O(void 0,[107],(()=>o(2693))),o.O(void 0,[107],(()=>o(8480)));var r=o.O(void 0,[107],(()=>o(4423)));r=o.O(r)})();
>>>>>>> 259ba481587dbfb4f72acb5e6ab8410dab767953
