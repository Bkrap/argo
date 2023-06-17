<section class="info-cards-title">
    <div class="container cards-container">
        <div class="row">
            <div class="col-lg-6">
                <?php if( $params['pre_title_label'] ) { ?>
                    <p class="small-title bold-text">
                        <?php echo $params['pre_title_label']; ?>
                    </p>
                <?php } ?>
                <h2><?php echo wyswig_raw( $params['title'] ); ?></h2>
                <?php if( $params['subtitle'] ) { ?>
                    <p class="smaller-title bold-text"><?php echo wyswig_raw( $params['subtitle'] ); ?></p>
                <?php } ?>
                <?php if( $params['text'] ) { ?>
                    <p><?php echo wyswig_raw( $params['text'] ); ?></p>
                <?php } ?>

                <?php get_btn( $params['button_group'], false ); ?>
            </div>
        </div>
        <div class="row cards-row">
            <?php foreach( $params['cards'] as $k => $v ) { ?>
                <div class="col-lg-4 big-card">
                    <div class="card h-100" style="background: linear-gradient(0deg, rgba(42, 128, 127, 0.8), rgba(42, 128, 127, 0.8)), url('<?php echo wp_get_attachment_image_url( $v['background_image']['id'], 'full' ); ?>'); ; background-position: <?php echo $v['background_image']['left'] . "% " . $v['background_image']['top'] . "%"; ?>;">
                        <div class="card-body d-flex justify-content-between">
                            <h3 class="card-title"><?php echo wyswig_raw( $v['title'] ); ?></h3>
                            <?php if( $v['iterate_cards'] ) { ?>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="25" fill="white"/>
                                    <path d="M19.54 33L19.914 30.668H23.412L24.974 20.878L22.158 22.418L21.278 20.262L26.316 17.49H28.318L26.228 30.668H29.506L29.132 33H19.54Z" fill="#208999"/>
                                </svg>
                            <?php } ?>

                        </div>
                        <div class="card-footer">
                            <p class="card-text italic"><?php echo $v['text']; ?></p>
                        </div>
                        <!-- <a href="" class="stretched-link"></a> -->
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</section>
