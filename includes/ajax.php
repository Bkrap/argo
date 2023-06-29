<?php
defined( 'ABSPATH' ) || exit;

/**
 * Filter posts 
 */

add_action('wp_ajax_filter_posts', 'filter_posts');
add_action('wp_ajax_nopriv_filter_posts', 'filter_posts');

function filter_posts() {

    /**
     * Post WP Query
     */

    $args = array(
        'post_type'         => 'post',
        'posts_per_page'    => get_option('posts_per_page'),
        'category__in'      => $_POST['category_id'],
        'post_status'       => 'publish',
        'orderby'           => 'date',
        'order'             => $_POST['order'],
    );
    $query = new WP_Query( $args );

    $counter = 0; 
    $iteration = 1;
    foreach( $query->posts as $k => $v ) {
        $c = $k + 1;
        if( $counter == 13 ) {
            $counter = 0;
        }
        $counter++;

        $v->primary_category = get_the_category( $v->ID )[0]->name;
        $v->category_id      = get_the_category( $v->ID )[0]->term_id;

        if( $counter == 1 || $counter == 5 || $counter == 12 ) {
            get_partial('card-full', (array)$v);
        } else {
            get_partial('card', (array)$v);
        }

    }

    die;


}

/**************************************************************************************************/

/**
 * Load more
 */

add_action('wp_ajax_load_more_posts', 'load_more_posts');
add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts');

function load_more_posts() {

    /**
     * Post WP Query
     */

    $args = array(
        'post_type'         => 'post',
        'posts_per_page'    => get_option('posts_per_page'),
        'category__in'      => $_POST['activeID'],
        'post_status'       => 'publish',
        'offset'            => $_POST['offset'],
    );

    // debug($args);
    
    $query = new WP_Query( $args );

    $counter = 0; 
    $iteration = 1;
    foreach( $query->posts as $k => $v ) {
        $c = $k + 1;
        if( $counter == 13 ) {
            $counter = 0;
        }
        $counter++;

        $v->primary_category = get_the_category( $v->ID )[0]->name;
        $v->category_id      = get_the_category( $v->ID )[0]->term_id;

        if( $counter == 1 || $counter == 5 || $counter == 12 ) {
            get_partial('card-full', (array)$v);
        } else {
            get_partial('card', (array)$v);
        }

    }

    die;


}

/**************************************************************************************************/

/**************************************************************************************************/

/**
 * Load more
 */

add_action('wp_ajax_load_more_videos', 'load_more_videos');
add_action('wp_ajax_nopriv_load_more_videos', 'load_more_videos');

function load_more_videos() {

    /**
     * Video hub WP Query
     */

    $args = array(
        'post_type'           => 'video-hub',
        'posts_per_page'      => 3,
        'tax_query' => array(
              array(
                  'taxonomy'              => 'video-category',
                  'terms'                 => $_POST['active_slug'],
                  'field'                 => 'slug',
                  'include_children'      => true,
                  'operator'              => 'IN'
              )
          ),
        'offset'            => $_POST['offset'],
      );

    // debug($args);
    
    $query = new WP_Query( $args );

    ?>
    <?php
     foreach( $query->posts as $k_video => $v_video ) { 

        $v_video->video_info = get_field('video_hub_info', $v_video->ID);
        get_partial('video-hub/card', (array)$v_video);
         
    }
    ?>
    <?php
    die;


}

/**************************************************************************************************/

/**
 * Parse external News
 */

add_action('wp_ajax_parse_external_news_api', 'parse_external_news_api');
add_action('wp_ajax_nopriv_parse_external_news_api', 'parse_external_news_api');

function parse_external_news_api() {

    // debug( $_POST['finalResults'] );
    $articles = $_POST['finalResults'];

    if ( ! empty( $articles ) ) {
        foreach ( $articles as $article ) {
            // debug($article, true);
            if( $article['title'] ) {
                $title      = $article['title'];
                $content    = $article['content'];
                $excerpt    = $article['description'];
                $date       = date( 'Y-m-d H:i:s', strtotime( $article['publishedAt'] ) );
    
                // Check if post with the same title already exists
                $existing_post = get_page_by_title( $title, OBJECT, 'post' );
    
                if ( $existing_post ) {
                    echo "Post with the title '{$title}' already exists. Skipping import.";
                    continue;
                }
    
                $post       = array(
                    'post_title'        => $title,
                    'post_content'      => $content,
                    'post_status'       => 'publish',
                    'post_date'         => $date,
                    'post_excerpt'      => $excerpt,
                    'post_author'       => 1,
                );
                $post_id = wp_insert_post( $post );
    
                if ( is_wp_error( $post_id ) ) {
                    // An error occurred while creating the post, handle the error here
                    echo "Error while importing posts - ERROR: 420";
                } else {
                    // Post was created successfully, do something here
    
                    // Add featured image
                    if ( $article['featured_image'] ) {
                        $image_url = $article['featured_image'];
    
                        // Check if the image exists
                        $image_data = file_get_contents( $image_url );
                        $filename = basename( $image_url );
                        $upload_dir = wp_upload_dir();
                        $upload_path = $upload_dir['path'] . '/' . $filename;
    
                        if ( wp_mkdir_p( $upload_dir['path'] ) ) {
                            file_put_contents( $upload_path, $image_data );
    
                            $wp_filetype = wp_check_filetype( $filename, null );
                            $attachment = array(
                                'post_mime_type' => $wp_filetype['type'],
                                'post_title' => sanitize_file_name( $filename ),
                                'post_content' => '',
                                'post_status' => 'inherit'
                            );
    
                            $attachment_id = wp_insert_attachment( $attachment, $upload_path, $post_id );
    
                            if ( ! is_wp_error( $attachment_id ) ) {
                                require_once( ABSPATH . 'wp-admin/includes/image.php' );
                                $attachment_data = wp_generate_attachment_metadata( $attachment_id, $upload_path );
                                wp_update_attachment_metadata( $attachment_id, $attachment_data );
    
                                set_post_thumbnail( $post_id, $attachment_id );
                            }
                        }
                    }
    
                    // Assign category
                    $category = get_category_by_slug( 'news' );
                    $category_id = $category->term_id;
                    wp_set_post_categories( $post_id, array( $category_id ) );
    
                    echo "Success";
                }
            }
        }
    }

    die;


}
