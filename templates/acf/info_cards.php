<?php //debug($params); ?>
<section class="info-cards">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 text-wrapper">
                <p class="small-title bold-text">
                    <?php echo $params['pre_title_label']; ?>
                </p>
                <h2><?php echo wyswig_raw( $params['title'] ); ?></h2>
                <p class="big-description"><?php echo wyswig_raw( $params['text'] ); ?></p>
                <?php get_btn( $params['button_group'], true ); ?>
            </div>
            <div class="col-lg-8 d-flex align-items-center">
                <div class="row card-row">
                    <?php foreach( $params['cards'] as $k => $v ) { ?>
                        <div class="small-card">
                            <div class="background d-flex flex-column" style="background: linear-gradient(0deg, rgba(42, 128, 127, 0.8), rgba(42, 128, 127, 0.8)), url('<?php echo wp_get_attachment_image_url( $v['background_image']['id'], 'full' ); ?>'); ; background-position: <?php echo $v['background_image']['left'] . "% " . $v['background_image']['top'] . "%"; ?>">
                                
                            <?php if( $v['icon'] ) { ?>
                                <img src="<?php echo $v['icon']['url']; ?>" alt="icon" />
                            <?php } ?>
                                <!-- <p class="number">
                                    0<?php //echo $k; ?>
                                </p> -->
                                <div class="text d-flex flex-column justify-content-end">
                                    <h4 class="title"><?php echo $v['title']; ?></h4>
                                    <p class="description"><?php echo $v['text']; ?></p>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</section>