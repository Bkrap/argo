
document.addEventListener('DOMContentLoaded', function() {
    console.log("js 12");
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


jQuery('.secondary-nav-category-term').on("click", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button

    e.preventDefault();
    var navCatID = jQuery(this).attr("data-cat-id");

    // Cookies.set('userToken', userTokenVar, { expires: 1 }); // docs: https://github.com/js-cookie/js-cookie

    var formData = {
      action: 'filter_posts',
      page_id: generic_ajax_object.curr_post_id,
      category_id: navCatID,
    };

    jQuery.ajax({
      type: 'POST',
      url:  generic_ajax_object.ajax_url,
      dataType: 'html',
      data: formData,
      success: function(data) {
        console.log(data);

          var loadingWheel = jQuery('#loading-wheel').hide();
          //Attach the event handler to any element
          jQuery(document)
            .ajaxStart(function () {
               //ajax request went so show the loading image
                loadingWheel.show();
            })
          .ajaxStop(function () {
              //got response so hide the loading image
               loadingWheel.hide();
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


    const parallaxBg = document.querySelector(".parallax-bg");

