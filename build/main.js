(()=>{document.addEventListener("DOMContentLoaded",(function(){console.log("js works")})),window.addEventListener("scroll",(function(){})),window.addEventListener("resize",(function(){}));const e=document.querySelectorAll(".countup"),n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.parentElement.querySelectorAll(".countup").forEach((e=>{!function(e,n,t){const o=parseInt(t.innerText),r=n/(e/10);let c=o;console.log(e,n,t),function e(){c+=r,c>=n?t.innerText=n:(t.innerText=Math.round(c),setTimeout(e,10))}()}(2e3,parseInt(e.dataset.finalValue),e),e.style.opacity=1}))}))}),{threshold:.5});e.forEach((e=>{n.observe(e)}))})();