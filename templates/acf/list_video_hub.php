<?php
// debug($params);
?>
<section class="news-hub video-hub">
    <div class="container">

        <?php foreach( $params['video_hub_categories'] as $k_cat => $v_cat ) { 
            $args = array(
              'post_type'           => 'video-hub',
              'posts_per_page'      => 4,
              'tax_query' => array(
                    array(
                        'taxonomy'              => 'video-category',
                        'terms'                 => $v_cat->slug,
                        'field'                 => 'slug',
                        'include_children'      => true,
                        'operator'              => 'IN'
                    )
                ),
            );

            $videos = new WP_Query( $args );
            // debug($videos);
            ?>

            <div class="hub-section" id="video-hub-section" data-max-num-pages="<?php echo $videos->max_num_pages; ?>">

                <div class="row">
                    <div class="col-lg-6">
                        <h2 class="title"><?php echo $v_cat->name; ?></h2>
                        <p class="description"><?php echo $v_cat->description; ?></p>
                    </div>
                </div>

                <div class="row">
                    <!-- Razlika između kartice pune širine i obične su klase col-lg-12 i full-width-card, i dolje ovaj div text-column d-flex flex-column -->
                    <?php foreach( $videos->posts as $k_video => $v_video ) { 
                        $v_video->video_info = get_field('video_hub_info', $v_video->ID);
                        ?>
                        <?php if( $k_video == 0 ) { 
                            get_partial('video-hub/card-full', (array)$v_video);
                        } else {
                            get_partial('video-hub/card', (array)$v_video);
                         } 
                    } ?>
                </div>
                <div class="button-wrapper d-flex">
                    <a id="load-more-videos" class="arrow-link btn btn-arrow-link load-more-btn" href="">
                        <span class="link-text">Load More</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1149_576)">
                            <path d="M13.3332 7.99984L12.3932 7.05984L8.6665 10.7798V2.6665H7.33317V10.7798L3.61317 7.05317L2.6665 7.99984L7.99984 13.3332L13.3332 7.99984Z" fill="#2A807F"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1149_576">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>

        <?php } ?>
        
    </div>
</section>

<?php include 'link_cards.php'; ?>