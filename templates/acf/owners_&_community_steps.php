<?php //debug($params); ?>
<section class="facts-and-cards">
    <img class="parallax" src="<?php echo wp_get_attachment_image_url( $params['background_image']['id'], 'full' ); ?>');" alt="">    
    <div class="container position-relative">
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
                        <?php echo wp_get_attachment_image( $v['user_avatar']['id'], 'thumbnail' ); ?>
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
                <h2 class="title mb-0"><?php echo wyswig_raw($params['title_community']); ?></h2>
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
                            <div class="circle-number">
                                <span class="number"><?php echo $k + 1; ?></span>
                            </div>
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