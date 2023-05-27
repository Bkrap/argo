<?php
/**
 * Post WP Query
 */

 $args = array(
    'post_type'         => 'post',
    'posts_per_page'    => 11,
    'post_status'       => 'published',
 );
 $query = new WP_Query( $args );

?>
<?php get_partial('news_filter'); ?>

<section class="news-hub">
    <div class="container">
        <?php get_partial('news_sort'); ?>
        <div class="row">
            <?php 
            $counter = 0; 
            $iteration = 1;
            ?>
            <?php foreach( $query->posts as $k => $v ) {
                $c = $k + 1;
                // if( $iteration == 1 &&  ) {
                //     get_partial('card');
                //     $iteration = 2;
                // } elseif( $iteration ==f 2 ) {
                //     $iteration = 1;
                // } elseif( $k == 0 ) {
                //     get_partial('card-full');
                // }
                get_partial('card');
            } ?>
            <!-- Razlika između kartice pune širine i obične su klase col-lg-12 i full-width-card, i dolje ovaj div text-column d-flex flex-column -->

        </div>
        <div class="button-wrapper d-flex justify-content-end">
            <a id="load-more" class="arrow-link btn btn-link_primary" href="#">
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