<?php //debug($params); ?> 
<div class="offset-lg-2 col-lg-3 sidebar">
    <p class="related"><?php echo THEME_OPTIONS['news']['related_posts']['box_label']; ?></p>
    <?php
    $query = new WP_Query( $params['query_args'] );

    foreach( $query->posts as $k => $v ) {
        $v->primary_category = $params['categories'][0]->name;
        get_partial( 'small-card', (array)$v );
    }
    ?>

    <p class="related related-categories"><?php echo THEME_OPTIONS['news']['category_section']['category_listing_label']; ?></p>

    <div class="category-pills">
        <?php foreach( $params['categories'] as $k_cat => $v_cat ) { //debug($v_cat); ?>
            <a href="" class="category-pill"><?php echo $v_cat->name; ?></a>
        <?php } ?>
    </div>

    <p class="related related-social"><?php echo THEME_OPTIONS['news']['social_media']['title']; ?></p>
    <div class="social-icons">

        <?php foreach( THEME_OPTIONS['news']['social_media']['social_media_icons'] as $k => $v ) { ?>
            <?php
                // debug($v); 
            ?>
            <a target="_blank" href="<?php echo $v['profile_url']; ?>" class="social-icon">
                <?php echo $v['icon']; ?>
            </a>
        <?php } ?>

    </div>
</div>