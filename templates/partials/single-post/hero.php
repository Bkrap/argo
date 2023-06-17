<section class="post-hero">

    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <a class="btn-arrow-link" href="<?php echo THEME_OPTIONS['news']['globals']['news_index_page']; ?>">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="me-5px">
                        <g clip-path="url(#clip0_615_2378)">
                        <path d="M13.3332 7.33341H5.21984L8.9465 3.60675L7.99984 2.66675L2.6665 8.00008L7.99984 13.3334L8.93984 12.3934L5.21984 8.66675H13.3332V7.33341Z" fill="#2A807F"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_615_2378">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <span class="link-text">Go back</span>
                </a>
                <p class="small-text mt-4"><?php echo $params['category']; ?></p>
                <h1 class="title bold-text italic"><?php echo $params['title']; ?></h1>
                <div class="info mb-3 d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <span>Published</span>
                        <span class="date"><?php echo $params['date']; ?></span>
                        <span class="author">By <?php echo $params['author']; ?></span>
                    </div>
                    <div class="social-icons d-flex">
                        <?php foreach( THEME_OPTIONS['news']['social_media']['social_media_icons'] as $k => $v ) { ?>
                            <?php
                            if( $v['platform'] == 'instagram' ) {
                                continue;
                            } 
                            $share_url = str_replace( '[URL]' , get_permalink( $post->ID ), $v['share_url'] );
                                // debug($v); 
                            ?>
                        <a target="_blank" href="<?php echo $share_url; ?>" class="social-icon">
                            <?php echo $v['icon']; ?>
                        </a>
                        <?php } ?>
                    </div>
                </div>
                <?php echo wp_get_img_focus_element(
                    $params['img_id'],
                    0,
                    0,
                    "hero-img"
                ) ?>
            </div>
        </div>
    </div>
</section>