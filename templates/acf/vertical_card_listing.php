<?php //debug($params); ?>

<section class="list" style="background-image: url('<?php echo $params['background_image']['url']; ?>')">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5">
        	    <h2 class="main-title"><?php echo wyswig_raw( $params['intro_content']['title'] ); ?></h2>
                <p class="main-description"><?php echo wyswig_raw( $params['intro_content']['text'] ); ?></p>
                <div class="btn-wrapper">
                    <?php echo get_btn( $params['intro_content']['button_group'] ); ?>
                </div>
            </div>
            <div class="offset-lg-1 col-lg-5">
            <?php foreach( $params['cards'] as $k => $v ) { ?>
                <div class="list-item <?php echo $v['color_card']; ?>">
                    <img src="<?php echo $v['icon']['url']; ?>" alt="icon">
                    <h4 class="title"><?php echo $v['title']; ?></h4>
                    <p class="description"><?php echo $v['text']; ?></p>
                </div>
            <?php } ?>
            </div>
        </div>
    </div>
</section>