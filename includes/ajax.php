<?php
defined( 'ABSPATH' ) || exit;

add_action('wp_ajax_filter_posts', 'filter_posts');
add_action('wp_ajax_nopriv_filter_posts', 'filter_posts');

function filter_posts() {

    debug($_POST['category_id']);

    /**
     * Post WP Query
     */

    $args = array(
        'post_type'         => 'post',
        'posts_per_page'    => get_option('posts_per_page'),
        'category__in'      => $_POST['category_id'],
        'post_status'       => 'publish',
    );
    $query = new WP_Query( $args );

    $counter = 0; 
    $iteration = 1;
    foreach( $query->posts as $k => $v ) {
        $c = $k + 1;
        // if( $iteration == 1 &&  ) {
        //     get_partial('card');
        //     $iteration = 2;
        // } elseif( $iteration == 2 ) {
        //     $iteration = 1;
        // } elseif( $k == 0 ) {
        //     get_partial('card-full');
        // }
        $v->primary_category = get_the_category( $v->ID )[0]->name;
        $v->category_id      = get_the_category( $v->ID )[0]->term_id;

        return get_partial('card', (array)$v);
    }

    die;

}

/**************************************************************************************************/