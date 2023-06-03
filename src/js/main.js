
document.addEventListener('DOMContentLoaded', function() {
    console.log("js 1ewfedd2");
    /**************************************************************************************************/

function img2svg(obj) {
    //  Replace all SVG images with inline SVG 
    jQuery(obj).each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        var imgStyle = $img.attr('style');
        jQuery.get(imgURL, function(data) {
    //          Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
    //         Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
    //         Add replaced image\'s classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }       
    //         Add style image\'s to the new SVG
    if (typeof imgStyle !== 'undefined') {
        $svg = $svg.attr('style', imgStyle);
    }
    //         Remove any invalid XML tags as per http:validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
    //         Replace image with new SVG
            $img.replaceWith($svg);
            var $btn = $svg.parent();
            if ($btn.hasClass('btn-toShop')) {
                var iconBG = $btn.css('backgroundColor');
                $svg.find('.iconBG').attr("fill", iconBG);
            }
        });
    });
}

/****************************************************************************** */

img2svg('img[src$=".svg"]');

/****************************************************************************** */

/**
 * Filter posts from single post (go to news index page and trigger click for filter)
 */
 jQuery('.go-to-news-index').on("click", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button

    e.preventDefault();
    
    let term = jQuery(this).attr("data-cat-id");
    let newsIndexPage = generic_ajax_object.news_index;
    
    jQuery.cookie('clickedTerm', term, { path: '/' });

    // Redirect to the desired page
    window.location.href = newsIndexPage;


 });

 // Wait for the page to load and trigger the click event
jQuery(window).on('load', function() {
    if (!!jQuery.cookie('clickedTerm')) {
        // have cookie
        jQuery(".secondary-nav-category-term").each(function(btn) {
            if (jQuery.cookie('clickedTerm') == jQuery(this).attr("data-cat-id")) {
                jQuery(this).click();
            }
        })
        jQuery.removeCookie('clickedTerm', { path: '/' });
       }
});

/****************************************************************************** */

/**
 * Filter posts
 * Action is hooking on filter and sorting posts
 */

jQuery('.secondary-nav-category-term, #sort-posts').on("click change", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button

    e.preventDefault();
    var clickedElem = jQuery(this);
    console.log("clicked!")
    /**
     * Check if clicked element is a filter, in that case toggle active class
     */
    if( clickedElem.hasClass("secondary-nav-category-term") ) {
        jQuery(".secondary-nav-category-term").removeClass("active");
    
        jQuery(this).addClass("active");
    }

    var navCatID = jQuery(".secondary-nav-category-term.active").attr("data-cat-id");

    var postOrder = jQuery('#sort-posts').val();
    console.log(postOrder);

    // Cookies.set('userToken', userTokenVar, { expires: 1 }); // docs: https://github.com/js-cookie/js-cookie

    var formData = {
      action        : 'filter_posts',
      page_id       : generic_ajax_object.curr_post_id,
      category_id   : navCatID,
      order         : postOrder,
    };

    jQuery.ajax({
      type      : 'POST',
      url       :  generic_ajax_object.ajax_url,
      dataType  : 'html',
      data      : formData,
      success: function(data) {

        jQuery('.posts-ajax-cards-row').html(data);

          var loadingWheel = jQuery('#loading-wheel').hide();
          //Attach the event handler to any element
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

        // return data;
        error: function(request, status, error) {
          console.log(request);
          alert(request.responseText);
          console.log(error);
        }

      });
});

/****************************************************************** */

/**
 * Load more
 * Action is hooking on filter and sorting posts
 */
var offset = 0;
var maxNumPagesCounter = 1;
 jQuery('#load-more, #sort-posts').on("click change", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button

    e.preventDefault();

    if( jQuery(this).hasClass("load-more-btn") ) {
        maxNumPagesCounter++;
        offset += 11;
    }

    /**
     * Clicking on filter item again requires offset, maxNumPagesCounter to be reseted and load more button to be shown again.
     */
    jQuery('.secondary-nav-category-term').on("click", function(e) {
        jQuery("#load-more").show();
        offset = 0;
        maxNumPagesCounter = 1;
    });

    /**
     * Hide load more button if all posts are loaded
     */
    if( maxNumPagesCounter == jQuery("#news-hub-wrap").attr("data-max-num-pages") ) {
        jQuery("#load-more").hide();
    }

    var postOrder = jQuery('#sort-posts').val();

    /**
     * Load more posts but only within filter scope
     */
    var activeID = jQuery(".secondary-nav-category-term.active").attr("data-cat-id");

    var formData = {
      action    : 'load_more_posts',
      page_id   : generic_ajax_object.curr_post_id,
      activeID  : activeID,
      offset    : offset,
      order     : postOrder,
    };

    jQuery.ajax({
      type: 'POST',
      url:  generic_ajax_object.ajax_url,
      dataType: 'html',
      data: formData,
      success: function(data) {
        console.log(data);

        jQuery(data).appendTo('.posts-ajax-cards-row');

        //   var loadingWheel = jQuery('#loading-wheel').hide();
          //Attach the event handler to any element
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

        // return data;
        error: function(request, status, error) {
          console.log(request);
          alert(request.responseText);
          console.log(error);
        }

      });
});

/****************************************************************** */


});

window.addEventListener('scroll', function() {
    // Your code here

});

window.addEventListener('resize', function() {
    // Your code here
    
});

// document.getElementById('hamburger').addEventListener("click", function(){
//     this.classList.toggle('active');
// });

var swiper = new Swiper(".cta-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});

var swiper = new Swiper(".hero-swiper", {
    navigation: {
      nextEl: ".swiper-button-next-hero",
      prevEl: ".swiper-button-prev-hero",
    },
    autoplay: {
        delay: 4000,
    },
    loop: true,
});

var swiper = new Swiper(".link-card-swiper", {
    slidesPerView: "auto",
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-button-next-cards",
      prevEl: ".swiper-button-prev-cards",
    },

});



const countupElements = document.querySelectorAll(".countup");

    function countUp(duration, finalValue, element) {
        const startingValue = parseInt(element.innerText);
        const increment = finalValue / (duration / 10);
        let currentValue = startingValue;
        console.log(duration, finalValue, element);
        function updateCountUp() {
            currentValue += increment;
            if (currentValue >= finalValue) {
                element.innerText = finalValue;
            } else {
                element.innerText = Math.round(currentValue);
                setTimeout(updateCountUp, 10);
            }
        }

        updateCountUp();
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target.parentElement;
                const elementsToAnimate = container.querySelectorAll(".countup");
                elementsToAnimate.forEach(element => {
                    countUp(2000, parseInt(element.dataset.finalValue), element);
                });
            }
        });
    }, { threshold: 0.5 });

    countupElements.forEach(element => {
        observer.observe(element);
    });



    var image = document.getElementsByClassName('parallax');
    new simpleParallax(image);
