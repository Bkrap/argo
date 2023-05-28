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
                <?php the_content(); ?>
            </div>
            <?php get_partial( 'single-post/related_posts', $rel_args_arr ); ?>
        </div>
    </div>
</section>
	
<?php get_footer(); ?>