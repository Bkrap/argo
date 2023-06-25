// console.log("membership inited");

jQuery("#membership-sign-up").on("click", function(e){
 
    e.preventDefault();

    var term = jQuery("#membership-email").val();

    jQuery.cookie('membership-email', term, { path: '/' });

    // Redirect to the desired page
    console.log(generic_ajax_object.membership_register);
    window.location.href = generic_ajax_object.membership_register;


});

jQuery(document).ready(function() {
    // console.log(generic_ajax_object.realPath+"/register")
    if (window.location.href.indexOf(generic_ajax_object.realPath+"/register") != -1) {
        var email = jQuery.cookie('membership-email');
        if (email != null) {
            jQuery('input[name="user_email"]').val(email);
            jQuery.removeCookie('membership-email', { path: '/' });
        }
    }
});
