jQuery(".login-ajax-form").on("submit",(function(e){e.preventDefault();var a=jQuery("#easy-auth-email").val();console.log(a);var t={action:"checkUser",email:a,redirectLink:jQuery("#clickedUrl").val()};jQuery.ajax({type:"POST",url:generic_ajax_object.ajax_url,dataType:"html",data:t,success:function(e){return e=jQuery.trim(e),jQuery("#exampleModal").modal("hide"),console.log(e),"user-exists"==e?console.log("user exists"):console.log("user NOT exists"),e},error:function(e,a,t){console.log(a),alert(e.responseText),console.log(data)}})})),(()=>{document.addEventListener("DOMContentLoaded",(function(){jQuery('img[src$=".svg"]').each((function(){var e=jQuery(this),a=e.attr("id"),t=e.attr("class"),o=e.attr("src"),r=e.attr("style");jQuery.get(o,(function(o){var n=jQuery(o).find("svg");void 0!==a&&(n=n.attr("id",a)),void 0!==t&&(n=n.attr("class",t+" replaced-svg")),void 0!==r&&(n=n.attr("style",r)),n=n.removeAttr("xmlns:a"),e.replaceWith(n);var s=n.parent();if(s.hasClass("btn-toShop")){var c=s.css("backgroundColor");n.find(".iconBG").attr("fill",c)}}))})),function(){const e=document.body.getAttribute("class");let a=document.querySelectorAll(".header-nav-links");const t=e.match(/page-id-(\d+)/);if(t){const e=t[1];a.forEach((a=>{a.getAttribute("data-page-id")==e?a.classList.add("active"):a.classList.remove("active")}))}else console.log("Page ID not found in body class.")}(),jQuery(".go-to-news-index").on("click",(function(e){e.preventDefault();let a=jQuery(this).attr("data-cat-id"),t=generic_ajax_object.news_index;jQuery.cookie("clickedTerm",a,{path:"/"}),window.location.href=t})),jQuery(window).on("load",(function(){jQuery.cookie("clickedTerm")&&(jQuery(".secondary-nav-category-term").each((function(e){jQuery.cookie("clickedTerm")==jQuery(this).attr("data-cat-id")&&jQuery(this).click()})),jQuery.removeCookie("clickedTerm",{path:"/"}))})),jQuery(".secondary-nav-category-term, #sort-posts").on("click change",(function(e){e.preventDefault();var a=jQuery(this);console.log("clicked!"),a.hasClass("secondary-nav-category-term")&&(jQuery(".secondary-nav-category-term").removeClass("active"),jQuery(this).addClass("active"));var t=jQuery(".secondary-nav-category-term.active").attr("data-cat-id"),o=jQuery("#sort-posts").val();console.log(o);var r={action:"filter_posts",page_id:generic_ajax_object.curr_post_id,category_id:t,order:o};jQuery.ajax({type:"POST",url:generic_ajax_object.ajax_url,dataType:"html",data:r,success:function(e){jQuery(".posts-ajax-cards-row").html(e),jQuery("#loading-wheel").hide(),jQuery(document).ajaxStart((function(){})).ajaxStop((function(){}))},error:function(e,a,t){console.log(e),alert(e.responseText),console.log(t)}})}));var e=0,a=1;jQuery("#load-more, #sort-posts").on("click change",(function(t){t.preventDefault(),jQuery(this).hasClass("load-more-btn")&&(a++,e+=11),jQuery(".secondary-nav-category-term").on("click",(function(t){jQuery("#load-more").show(),e=0,a=1})),a==jQuery("#news-hub-wrap").attr("data-max-num-pages")&&jQuery("#load-more").hide();var o=jQuery("#sort-posts").val(),r=jQuery(".secondary-nav-category-term.active").attr("data-cat-id"),n={action:"load_more_posts",page_id:generic_ajax_object.curr_post_id,activeID:r,offset:e,order:o};jQuery.ajax({type:"POST",url:generic_ajax_object.ajax_url,dataType:"html",data:n,success:function(e){console.log(e),jQuery(e).appendTo(".posts-ajax-cards-row"),jQuery(document).ajaxStart((function(){})).ajaxStop((function(){}))},error:function(e,a,t){console.log(e),alert(e.responseText),console.log(t)}})})),e=0,a=1,jQuery(".load-more-videos").on("click",(function(t){t.preventDefault();var o=jQuery(this).attr("data-active-slug");a=parseInt(jQuery(this).attr("data-max-pages-counter")),e=parseInt(jQuery(this).attr("data-offset")),console.log(e),console.log(a),jQuery(this).hasClass("load-more-btn")&&(a++,e+=4),a==jQuery("#load-more-videos[data-active-slug="+o+"]").attr("data-max-num-pages")&&(console.log("sold!"),console.log(jQuery("#load-more-videos")),jQuery('#load-more-videos[data-active-slug="'+o+'"]').hide());var r={action:"load_more_videos",page_id:generic_ajax_object.curr_post_id,active_slug:o,offset:e};jQuery.ajax({type:"POST",url:generic_ajax_object.ajax_url,dataType:"html",data:r,success:function(t){jQuery(t).appendTo("#video-hub-section-append[data-slug="+o+"]"),jQuery(document).ajaxStart((function(){})).ajaxStop((function(){})),jQuery("#load-more-videos[data-active-slug="+o+"]").attr("data-max-pages-counter",a),jQuery("#load-more-videos[data-active-slug="+o+"]").attr("data-offset",e)},error:function(e,a,t){console.log(e),alert(e.responseText),console.log(t)}})}))})),window.addEventListener("scroll",(function(){})),window.addEventListener("resize",(function(){})),new Swiper(".cta-swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:3e3},loop:!0}),new Swiper(".hero-swiper",{navigation:{nextEl:".swiper-button-next-hero",prevEl:".swiper-button-prev-hero"},autoplay:{delay:4e3},loop:!0}),new Swiper(".link-card-swiper",{slidesPerView:"auto",spaceBetween:32,navigation:{nextEl:".swiper-button-next-cards",prevEl:".swiper-button-prev-cards"}});const e=document.querySelectorAll(".countup"),a=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.parentElement.querySelectorAll(".countup").forEach((e=>{!function(e,a,t){const o=parseInt(t.innerText),r=a/(e/10);let n=o;console.log(e,a,t),function e(){n+=r,n>=a?t.innerText=a:(t.innerText=Math.round(n),setTimeout(e,10))}()}(2e3,parseInt(e.dataset.finalValue),e)}))}))}),{threshold:.5});e.forEach((e=>{a.observe(e)}));var t=document.getElementsByClassName("parallax");new simpleParallax(t)})(),jQuery("#membership-sign-up").on("click",(function(e){e.preventDefault();var a=jQuery("#membership-email").val();jQuery.cookie("membership-email",a,{path:"/"}),console.log(generic_ajax_object.membership_register),window.location.href=generic_ajax_object.membership_register})),jQuery(document).ready((function(){if(-1!=window.location.href.indexOf(generic_ajax_object.realPath+"/register")){var e=jQuery.cookie("membership-email");null!=e&&(jQuery('input[name="user_email"]').val(e),jQuery.removeCookie("membership-email",{path:"/"}))}}));