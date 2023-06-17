<section class="facts-and-cards no-bg">
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
    </div>
</section>