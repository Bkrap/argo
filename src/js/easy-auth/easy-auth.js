jQuery('.login-ajax-form').on("submit", function(e){ // class of root/inc/magic_login/components/modal/first-step.php button

    e.preventDefault();
    var userEmailVar = jQuery("#easy-auth-email").val();
    console.log(userEmailVar);

    // Cookies.set('userToken', userTokenVar, { expires: 1 }); // docs: https://github.com/js-cookie/js-cookie

    var formData = {
      action: 'checkUser',
    //   page_id: curr_post_id,
      email: userEmailVar,
      redirectLink: jQuery("#clickedUrl").val(),
    };

    jQuery.ajax({
      type: 'POST',
      url:  generic_ajax_object.ajax_url,
      dataType: 'html',
      data: formData,
      success: function(data) {
        data = jQuery.trim(data);
        jQuery('#exampleModal').modal('hide');
        console.log(data);
        if( data == 'user-exists' ) {
        //   jQuery('#exampleModal3').modal('toggle');
        console.log("user exists");
        } else {
            console.log("user NOT exists");
        //   jQuery('#exampleModal2').modal('toggle');

        //   var loadingWheel = jQuery('#loading-second-step').hide();
          //Attach the event handler to any element
          // jQuery(document)
          //   .ajaxStart(function () {
          //      //ajax request went so show the loading image
          //       // loadingWheel.show();
          //   })
          // .ajaxStop(function () {
          //     //got response so hide the loading image
          //   //    loadingWheel.hide();
          //  });
           
        }
        
        return data;
      },
      error: function(request, status, error){
        console.log(status);
        alert(request.responseText);
        console.log(data);

  
      }
    });

});