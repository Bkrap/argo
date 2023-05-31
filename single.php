<?php get_header(); ?>

<?php 
$cat_arr = array();
foreach( get_the_category() as $k => $v ) {
    $cat_arr[] = $v->term_id;
}

$rel_args_arr = array(
    'query_args' => array(
        'post_type'         => 'post',
        'post_status'       => 'publish',
        'posts_per_page'    => 3,
        'category__in'      => $cat_arr,
        'orderby'           => 'date',
        'order'             => 'DESC',
    ),
    'categories' => get_the_category(),
);

// debug(get_the_category());

$args_arr = array(
    'img_id'        => get_post_thumbnail_id(),
    'category'      => get_the_category()[0]->name,
    'date'          => get_the_date( 'F j, Y', get_the_ID() ),
    'title'         => get_the_title(),
    'author'        => get_the_author(),
);

get_partial( 'single-post/hero', $args_arr );
?>

<section class="post-content">
    <div class="container">
        <div class="row">
            <div class="offset-lg-1 col-lg-6 content">
                <?php echo wpautop( get_the_content() ); ?>
            </div>
            <?php get_partial( 'single-post/related_posts', $rel_args_arr ); ?>
        </div>
    </div>
</section>

<?php 
$video_block = get_field( 'post_info', get_the_ID() )['video_block'];

$top_label      = get_the_terms( $video_block['video_hub'][0]->ID, "video-category" )[0]->name;
$text           = $video_block['video_hub'][0]->post_title; 

$button         = THEME_OPTIONS['news']['video_block']['button_group']['button'];

$image          = wp_get_img_focus_element( get_post_thumbnail_id( $video_block['video_hub'][0]->ID ), 0, 0, 'logo' );
$video          = "";

$video_args = array(
    "top_label"     => $top_label,
    "text"          => $text,
    "button_group"  => array( 'button' => $button ),
    "image"         => $image,
);
$video_args['button_group']['button']['function'] = 'url';

/**
 * NASTAVIT:
 * youtube ako je video hub mora voditi na video hub index page i playati video direkt na stranici toj
 * nastavi postavljati btn za video hub
 */
// debug( $video_block );
// debug( $video_args );

get_component_template( 'argo_on_youtube', (array)$video_args );
?>
	
<?php get_footer(); ?>