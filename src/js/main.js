
document.addEventListener('DOMContentLoaded', function() {
    console.log("js works");

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

