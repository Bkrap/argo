<?php //debug($params); ?>

<section class="facts-two-columns">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 main-column">
                <p class="small-title"><?php echo $params['intro_content']['pre_title_label']; ?></p>
                <h2><?php echo wyswig_raw( $params['intro_content']['title'] ); ?></h2>
                <p><?php echo wyswig_raw( $params['intro_content']['text'] ); ?></p>
                <?php echo get_btn( $params['intro_content']['button_group'] ); ?>
            </div>

            <div class="col-lg-2 offset-lg-2">
                <div class="counters d-flex flex-wrap justify-content-between">
                <?php foreach( $params['statistics'] as $k => $v ) { ?>
                    <?php if( $k == 2 ) { break; } ?>
                        <div class="single">
                            <div>
                                <span class="countup"><?php echo $v['statistic']; ?></span> 
                            </div>
                            <span class="text"><?php echo $v['label']; ?></span>
                        </div>
                    <?php } ?>
                </div>
            </div>

            <div class="col-lg-2">
                <?php foreach( $params['statistics'] as $k => $v ) { ?>
                    <div class="counters d-flex flex-wrap justify-content-between">
                    <?php if( $k == 2 || $k == 1 ) { continue; } ?>
                        <div class="single">
                            <div>
                                <span class="countup"><?php echo $v['statistic']; ?></span> 
                            </div>
                            <span class="text"><?php echo $v['label']; ?></span>
                        </div>
                    <?php } ?>
                </div>
            </div>

        </div>
    </div>
</section>
