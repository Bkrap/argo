<?php //debug($params); ?>
<section class="news-hub">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 text-wrapper">
                <p class="small-title"><?php echo $params['pre_title_label']; ?></p>
                <h2 class="title"><?php echo wyswig_raw( $params['title'] ); ?></h2>
                <?php
                /**
                 * init button
                 */
                $button = array( 
                    "button" => array(
                        "show_button"       => true,
                        "function"          => "internal",
                        "internal"          => "arhiva",
                        "label"             => $params['button']['label'],
                        "style"             => $params['button']['style']['color'],
                    )
                );
                ?>
                <?php echo get_btn( $button, true ); ?>
            </div>
        </div>
        <div class="row">
            <!-- Razlika između kartice pune širine i obične su klase col-lg-12 i full-width-card, i dolje ovaj div text-column d-flex flex-column -->
            <?php 
            $args = array(
                'post_type' => 'post',
                'posts_per_page' => 4,
                'orderby' => 'date',
                'order' => 'DESC',
            );
            $query = new WP_Query( $args );
            ?>
            <?php foreach( $query->posts as $k => $v ) { 
                $card_arr = array(
                    'title'                 => $v->post_title,
                    'text'                  => $v->post_excerpt,
                    'category_name'         => get_the_category( $v->ID )[0]->name,
                    'image'                 => get_the_post_thumbnail( $v->ID, "", array( "class" => "card-img-top" ) ),
                    'url'                   => get_permalink( $v->ID ),
                    'date'                  => get_the_date( 'd M Y', $v->ID ),
                );    
            ?>
                <?php if( $k == 0 ) {
                    get_partial( 'card-full', $card_arr );
                } else {
                    get_partial( 'card', $card_arr );
                } ?>
            <?php } ?>
        </div>
        <div class="button-wrapper d-flex justify-content-end">
            <?php
                /**
                 * init button
                 */
                $button = array( 
                    "button" => array(
                        "show_button"       => true,
                        "function"          => "internal",
                        "internal"          => "arhiva",
                        "label"             => $params['button']['label'],
                        "style"             => $params['button']['style']['color'],
                    )
                );
                ?>
                <?php echo get_btn( $button, true ); ?>
        </div>
    </div>
</section>