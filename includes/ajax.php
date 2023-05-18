<?php
defined( 'ABSPATH' ) || exit;

add_action('wp_ajax_filter_posts', 'filter_posts');
add_action('wp_ajax_nopriv_filter_posts', 'filter_posts');

function filter_posts() {

    debug($_POST['category_id']);

}

/**************************************************************************************************/