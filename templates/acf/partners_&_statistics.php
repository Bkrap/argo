<?php // debug($params); ?>
<section class="counter">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 offset-lg-1">
                <p class="small-title mb-4"><?php echo $params['pre_title_label']; ?></p>
                <h2><?php echo wyswig_raw( $params['title'] ); ?></h2>
            </div>
            <div class="col-lg-5">
                <div class="quote d-flex">
                    <svg width="46" height="37" viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 37V24.6213C0 19.9963 0.82388 15.7341 2.47164 11.8346C4.1194 7.93505 6.91144 3.9902 10.8478 0L17.9881 5.57721C15.6995 7.84437 13.9602 9.9755 12.7701 11.9706C11.5801 13.9657 10.802 16.0061 10.4358 18.0919H19.2239V37H0ZM26.7761 37V24.6213C26.7761 19.9963 27.6 15.7341 29.2478 11.8346C30.8955 7.93505 33.6876 3.9902 37.6239 0L44.7642 5.57721C42.4756 7.84437 40.7363 9.9755 39.5463 11.9706C38.3562 13.9657 37.5781 16.0061 37.2119 18.0919H46V37H26.7761Z" fill="#26554A"/>
                    </svg>
                    <div>
                        <p><?php echo get_field( 'partners', $params['partner_card']['partner']->ID )['quote']; ?></p>
                        <?php echo get_the_post_thumbnail( $params['partner_card']['partner']->ID, 'full' ); ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="offset-lg-1 col-lg-10">
                <div class="counters d-flex justify-content-between align-items-center">
                <?php foreach( $params['statistics'] as $k => $v ) { ?>
                    <div class="single">
                        <div>
                            <span data-final-value="<?php echo $v['statistic']; ?>" class="countup"><?php echo $v['statistic']; ?></span>
                        </div>
                        <span class="text"><?php echo $v['label']; ?></span>
                    </div>
                <?php } ?>
                </div>
            </div>

        </div>
    </div>
</section>