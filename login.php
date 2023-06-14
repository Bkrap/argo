<?php get_header(); 
// defined( 'ABSPATH' ) || exit;

 /*
    Template Name: Login
 */

// wp_logout(); // forece logout
// wp_destroy_current_session();
$token = $_GET['token'];
$redirect_link = ( empty($_GET['redirectLink']) ? home_url('/') : $_GET['redirectLink']  );

global $wpdb;
$queried_table = "{$wpdb->prefix}users";
$query = $wpdb->get_results( "SELECT * FROM $queried_table WHERE user_token='$token'" ); // select user with token from GET parameter (email message)

// print_r($token);
// print_r($query);

$user = $query[0];
// myErr("SELECT * FROM $queried_table WHERE user_token='$token'");
// myErr($query);
// myErr($user);
// myErr($token);
$wpdb->query( "UPDATE $queried_table SET user_token='' WHERE user_token='$token'" ); // destroy token
// print_r($user);
auto_login_new_user( $user, $redirect_link );

get_footer(); ?>

