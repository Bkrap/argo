jQuery("#membership-sign-up").on("click",(function(e){e.preventDefault();var i=jQuery("#membership-email").val();jQuery.cookie("membership-email",i,{path:"/"}),console.log(generic_ajax_object.membership_register),window.location.href=generic_ajax_object.membership_register})),jQuery(document).ready((function(){if(-1!=window.location.href.indexOf(generic_ajax_object.realPath+"/register")){var e=jQuery.cookie("membership-email");null!=e&&(jQuery('input[name="user_email"]').val(e),jQuery.removeCookie("membership-email",{path:"/"}))}}));