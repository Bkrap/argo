
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

// let valueDisplays = document.querySelectorAll(".num");
// let interval = 400;
// valueDisplays.forEach((valueDisplay) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     valueDisplay.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
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

    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the observed element is intersecting with the viewport, start the count-up animation on all countup elements in the same container
                const container = entry.target.parentElement;
                const elementsToAnimate = container.querySelectorAll(".countup");
                elementsToAnimate.forEach(element => {
                    countUp(2000, parseInt(element.dataset.finalValue), element);
                    element.style.opacity = 1;
                });
            }
        });
    }, { threshold: 0.5 });

    // Observe all countup elements
    countupElements.forEach(element => {
        observer.observe(element);
    });