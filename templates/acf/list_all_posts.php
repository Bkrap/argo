<?php
/**
 * Post WP Query
 */

global $wpdb;

$query = "
    SELECT *
    FROM {$wpdb->prefix}posts
    WHERE post_type = 'post'
    AND post_status = 'publish'
    ORDER BY post_date DESC
    LIMIT " . get_option('posts_per_page') . " OFFSET 0
";

$results = $wpdb->get_results($query);

// Query to count the total number of posts
$count_query = "
    SELECT COUNT(*)
    FROM {$wpdb->prefix}posts
    WHERE post_type = 'post'
    AND post_status = 'publish'
";

$total_posts = $wpdb->get_var($count_query);
$max_num_pages = ceil($total_posts / get_option('posts_per_page'));

//  debug($query);
?>
<?php get_partial('news_filter'); ?>

<section class="news-hub" id="news-hub-wrap" data-max-num-pages="<?php echo $max_num_pages; ?>" data-posts-per-page="<?php echo get_option('posts_per_page'); ?>">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h2 class="title"><?php echo wyswig_raw( $params['title'] ); ?></h2>
                <p class="description"><?php echo $params['text']; ?></p>
            </div>
        </div>
        <?php get_partial('news_sort'); ?>
        <div class="row posts-ajax-cards-row">
            <?php 
            $counter = 0; 
            $iteration = 1;
            ?>
            <?php foreach( $results as $k => $v ) {
                $v->primary_category = get_the_category( $v->ID )[0]->name;
                $v->category_id      = get_the_category( $v->ID )[0]->term_id;
                
                $c = $k + 1;
                if( $counter == 13 ) {
                    $counter = 0;
                }
                $counter++;


                if( $counter == 1 || $counter == 5 || $counter == 12 ) {
                    get_partial('card-full', (array)$v);
                } else {
                    get_partial('card', (array)$v);
                }

            } ?>
            <!-- Razlika između kartice pune širine i obične su klase col-lg-12 i full-width-card, i dolje ovaj div text-column d-flex flex-column -->

        </div>
        <div class="button-wrapper d-flex justify-content-end">
            <a id="load-more" class="arrow-link btn btn-link_primary load-more-btn" href="#">
                <span class="link-text">Load More</span>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_204_1799)">
                    <path d="M7.99984 3.16669L7.05984 4.10669L10.7798 7.83335H2.6665V9.16669H10.7798L7.05984 12.8934L7.99984 13.8334L13.3332 8.50002L7.99984 3.16669Z" fill="#2A807F"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_204_1799">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                    </defs>
                </svg>
            </a>
        </div>
    </div>
</section>