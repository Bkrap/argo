(()=>{var __webpack_modules__={"./src/js/membership/membership.js":
/*!*****************************************!*\
  !*** ./src/js/membership/membership.js ***!
  \*****************************************/()=>{eval('// console.log("membership inited");\r\n\r\njQuery("#membership-sign-up").on("click", function(e){\r\n \r\n    e.preventDefault();\r\n\r\n    var term = jQuery("#membership-email").val();\r\n\r\n    jQuery.cookie(\'membership-email\', term, { path: \'/\' });\r\n\r\n    // Redirect to the desired page\r\n    console.log(generic_ajax_object.membership_register);\r\n    window.location.href = generic_ajax_object.membership_register;\r\n\r\n\r\n});\r\n\r\njQuery(document).ready(function() {\r\n    // console.log(generic_ajax_object.realPath+"/register")\r\n    if (window.location.href.indexOf(generic_ajax_object.realPath+"/register") != -1) {\r\n        var email = jQuery.cookie(\'membership-email\');\r\n        if (email != null) {\r\n            jQuery(\'input[name="user_email"]\').val(email);\r\n            jQuery.removeCookie(\'membership-email\', { path: \'/\' });\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://webpack/./src/js/membership/membership.js?')}},__webpack_exports__={};__webpack_modules__["./src/js/membership/membership.js"]()})();