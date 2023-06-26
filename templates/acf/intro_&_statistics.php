<?php debug($params); ?>
<section class="counter">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 offset-lg-1">
                <p class="small-title mb-4"><?php echo $params['pre_title_label']; ?></p>
                <h2><?php echo wyswig_raw( $params['title'] ); ?></h2>
            </div>
            <div class="col-lg-5">
                <div class="justify-content-end d-flex img-wrap">
                    <?php echo wp_get_attachment_image( $params['intro_card']['logo']['ID'] ); ?>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="offset-lg-1 col-lg-10">
                <div class="counters d-flex justify-content-between align-items-center">
                <?php foreach( $params['statistics'] as $k => $v ) { ?>
                    <div class="single">
                        <div>
                            <span><?php echo $v['countup_text']['prenumber']; ?></span><span data-final-value="<?php echo $v['countup_text']['number']; ?>" class="countup">0</span><span><?php echo $v['countup_text']['post-number']; ?></span> 
                        </div>
                        <span class="text"><?php echo $v['label']; ?></span>
                    </div>
                <?php } ?>
                </div>
            </div>

        </div>
    </div>
</section>