<section class="cta-slider">
    <div class="container">
        <div class="swiper cta-swiper-block">
            <div class="swiper-wrapper">
                <?php foreach( $params['slides'] as $k => $v ) { ?>
                    <div class="swiper-slide">
                        <p class="small-text"><?php echo $v['pretitle_label']; ?></p>
                        <h2 class="slide-title"><?php echo wyswig_raw( $v['title'] ); ?></h2>
                        <p class="slide-description"><?php echo $v['text']; ?></p>
                        <?php echo get_btn( $v['button_group'] ); ?>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</section>