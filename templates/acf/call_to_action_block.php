<?php // debug($params); ?>
<section class="cta">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 text-wrapper">
                <div class="d-flex align-items-center">
                    <div class="circle"></div>
                    <p class="mb-0 small-text italic"><?php echo $params['action_box']['pre_title_label']; ?></p>
                </div>
                <h2 class="title"><?php echo wyswig_raw( $params['action_box']['title'] ); ?></h2>
                <p class="description italic"><?php echo $params['action_box']['text']; ?></p>
                <?php echo get_btn( $params['action_box']['button_group'] ); ?>
                <?php if( count( $params['image_slides'] ) > 1 ) { ?>
                    <div class="swiper-nav d-none d-lg-flex">
                        <div class="swiper-button-prev">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_546_3418)">
                            <path d="M9.70021 18.3C10.0902 17.91 10.0902 17.28 9.70021 16.89L5.83021 13H21.0002C21.5502 13 22.0002 12.55 22.0002 12C22.0002 11.45 21.5502 11 21.0002 11H5.83021L9.71021 7.11998C10.1002 6.72998 10.1002 6.09998 9.71021 5.70998C9.32021 5.31998 8.69021 5.31998 8.30021 5.70998L2.70021 11.3C2.31021 11.69 2.31021 12.32 2.70021 12.71L8.29021 18.3C8.68021 18.68 9.32021 18.68 9.70021 18.3Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_546_3418">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        <div class="swiper-button-next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_546_3419)">
                                <path d="M14.29 5.70998C13.9 6.09998 13.9 6.72998 14.29 7.11998L18.17 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H18.18L14.3 16.88C13.91 17.27 13.91 17.9 14.3 18.29C14.69 18.68 15.32 18.68 15.71 18.29L21.3 12.7C21.69 12.31 21.69 11.68 21.3 11.29L15.7 5.70998C15.32 5.31998 14.68 5.31998 14.29 5.70998Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_546_3419">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                <?php } ?>
            </div>
            <div class="col-lg-6 images-wrapper d-none d-lg-block">
                <div class="swiper cta-swiper">
                    <div class="swiper-wrapper">
                        <?php foreach( $params['image_slides'] as $k => $v ) { ?>
                            <div class="swiper-slide">
                                <?php echo wp_get_attachment_image( $v['image']['ID'], 'full' ); ?>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>