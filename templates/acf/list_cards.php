<?php //debug($params); ?>
<section class="link-cards">
    <div class="container">
        <div class="row">
            <?php foreach( $params['cards'] as $k => $v ) { ?>
            <div class="col-lg-4 big-card">
                <div class="card h-100" style="background: linear-gradient(0deg, rgba(42, 128, 127, 0.8), rgba(42, 128, 127, 0.8)), url('<?php echo wp_get_attachment_image_url( $v['background_image']['id'], 'full' ); ?>'); ; background-position: <?php echo $v['background_image']['left'] . "% " . $v['background_image']['top'] . "%"; ?>">
                    <div class="card-body d-flex justify-content-between">
                        <h3 class="card-title"><?php echo wyswig_raw( $v['title'] ); ?></h3>
                        <img src="<?php echo $v['icon']['url']; ?>" alt="icon" />
                    </div>
                    <div class="card-footer">
                        <p class="card-text italic mb-0"><?php echo $v['text']; ?></p>
                        <span class="read-more">Read more</span>
                    </div>
                    <a <?php echo $v['link_type'] == 'external' ? 'target="_blank"' : ''; ?> href="<?php echo $v[$v['link_type']]; ?>" class="stretched-link"></a>
                    <div class="overlay"></div>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>
</section>