<?php //debug($params); ?>
<div class="card" data-cat-id="<?php echo $params['category_id']; ?>">
    <?php echo wp_get_img_focus_element( get_post_thumbnail_id( $params['ID'] ), 0, 0, 'card-img-top', 'thumbnail' ); ?>
    <div class="category-pill">
        <p class="mb-0 bold-text"><?php echo $params['primary_category']; ?></p>
    </div>
    <div class="card-body">
        <p class="date"><?php echo get_the_date( "j F Y", $params['ID'] ); ?></p>
        <h5 class="card-title bold-text"><?php echo  $params['post_title']; ?></h5>
    </div>
    <div class="card-footer d-flex align-items-center">
        <p class="link-text mb-0">Read more</p>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_204_1799)">
            <path d="M7.99984 3.16669L7.05984 4.10669L10.7798 7.83335H2.6665V9.16669H10.7798L7.05984 12.8934L7.99984 13.8334L13.3332 8.50002L7.99984 3.16669Z" fill="#2A807F"/>
            </g>
            <defs>
            <clipPath id="clip0_204_1799">
            <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
        </svg>
    </div>
    <a href="<?php echo get_permalink($params['ID']); ?>" class="stretched-link"></a>
</div>