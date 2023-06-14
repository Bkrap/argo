<?php
defined( 'ABSPATH' ) || exit;

// Make sure to assign Page Attributes->Template->Logout to the created page (logout)
 /*
    Template Name: Logout
 */

if( is_user_logged_in() ) {
    wp_logout();
    wp_safe_redirect( home_url() );
    unset($_COOKIE['userToken']);
    setcookie('userToken', null, -1, '/'); 
    $token = 1;
}
?>