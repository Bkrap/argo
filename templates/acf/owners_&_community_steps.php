<?php //debug($params); ?>
<section class="facts-and-cards"  style="background-image: url('<?php echo wp_get_attachment_image_url( $params['background_image']['id'], 'full' ); ?>'); background-position: <?php echo $v['background_image']['left'] . "% " . $v['image']['top'] . "%"; ?>">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h2 class="title"><?php echo wyswig_raw($params['title_owners']); ?></h2>
            </div>
        </div>
        <div class="row">
            <?php foreach( $params['cards_users'] as $k => $v ) { ?>
            <div class="col-lg-3 white-card-wrap">
                <div class="card white-card h-100">
                    <div class="card-body">
                        <h4><?php echo wyswig_raw($v['title']); ?></h4>
                        <p class="description"><?php echo $v['text']; ?></p>
                    </div>
                    <div class="card-footer d-flex align-items-center">
                        <img src="<?php echo get_template_directory_uri(); ?>\images\will.png" alt="">
                        <?php echo wp_get_attachment_image( $v['image']['id'], 'thumbnail' ); ?>
                        <div class="text">
                            <p><?php echo $v['name']; ?></p>
                            <p class="title"><?php echo $v['user_role']; ?></p>
                        </div>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <p class="small-title facts-small-title"><?php echo $params['pre_title_label']; ?></p>
                <h2 class="title"><?php echo wyswig_raw($params['title_community']); ?></h2>
            </div>
        </div>
    </div>
</section>
<section class="factss">
    <div class="container cards-container">
        <div class="row cards-row">
            <?php foreach( $params['cards_cta'] as $k => $v ) { ?>
                <div class="col-lg-4 big-card">
                    <div class="card h-100" style="background: linear-gradient(0deg, rgba(42, 128, 127, 0.8), rgba(42, 128, 127, 0.8)), url('http://localhost/argo/wp-content/themes/argo/images/hero.jpg');">
                        <div class="card-body d-flex justify-content-between">
                            <h3 class="card-title"><?php echo wyswig_raw($v['title']); ?></h3>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="white"/>
                                <path d="M19.54 33L19.914 30.668H23.412L24.974 20.878L22.158 22.418L21.278 20.262L26.316 17.49H28.318L26.228 30.668H29.506L29.132 33H19.54Z" fill="#208999"/>
                            </svg>
                        </div>
                        <div class="card-footer">
                            <p class="card-text italic"><?php echo $v['text']; ?></p>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</section>