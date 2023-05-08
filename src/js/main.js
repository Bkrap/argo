
document.addEventListener('DOMContentLoaded', function() {
    console.log("js works");
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

