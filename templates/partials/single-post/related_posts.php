<?php //debug($params); ?> 
<div class="offset-lg-2 col-lg-3 sidebar">
    <p class="related">Related Articles</p>
    <?php
    $query = new WP_Query( $params['query_args'] );

    foreach( $query->posts as $k => $v ) {
        get_partial( 'card', (array)$v );
    }
    ?>

    <p class="related related-categories">More on this</p>

    <div class="category-pills">
        <?php foreach( $params['categories'] as $k_cat => $v_cat ) { //debug($v_cat); ?>
            <a href="" class="category-pill"><?php echo $v_cat->name; ?></a>
        <?php } ?>
    </div>

    <p class="related related-social">More on this</p>
    <div class="social-icons">

        <a href="" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_355_899)">
            <path d="M19.1663 10.0561C19.1663 4.96251 15.0623 0.833374 9.99967 0.833374C4.93706 0.833374 0.833008 4.96251 0.833008 10.0561C0.833008 14.6593 4.18511 18.4748 8.56738 19.1667V12.722H6.23991V10.0561H8.56738V8.02419C8.56738 5.71275 9.93594 4.43599 12.0298 4.43599C13.0324 4.43599 14.0817 4.61612 14.0817 4.61612V6.88576H12.9258C11.7872 6.88576 11.432 7.59674 11.432 8.32681V10.0561H13.9743L13.5679 12.722H11.432V19.1667C15.8142 18.4748 19.1663 14.6593 19.1663 10.0561Z" fill="#666666"/>
            </g>
            <defs>
            <clipPath id="clip0_355_899">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </a>

        <a href="" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_355_899)">
            <path d="M19.1663 10.0561C19.1663 4.96251 15.0623 0.833374 9.99967 0.833374C4.93706 0.833374 0.833008 4.96251 0.833008 10.0561C0.833008 14.6593 4.18511 18.4748 8.56738 19.1667V12.722H6.23991V10.0561H8.56738V8.02419C8.56738 5.71275 9.93594 4.43599 12.0298 4.43599C13.0324 4.43599 14.0817 4.61612 14.0817 4.61612V6.88576H12.9258C11.7872 6.88576 11.432 7.59674 11.432 8.32681V10.0561H13.9743L13.5679 12.722H11.432V19.1667C15.8142 18.4748 19.1663 14.6593 19.1663 10.0561Z" fill="#666666"/>
            </g>
            <defs>
            <clipPath id="clip0_355_899">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </a>

        <a href="" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_355_899)">
            <path d="M19.1663 10.0561C19.1663 4.96251 15.0623 0.833374 9.99967 0.833374C4.93706 0.833374 0.833008 4.96251 0.833008 10.0561C0.833008 14.6593 4.18511 18.4748 8.56738 19.1667V12.722H6.23991V10.0561H8.56738V8.02419C8.56738 5.71275 9.93594 4.43599 12.0298 4.43599C13.0324 4.43599 14.0817 4.61612 14.0817 4.61612V6.88576H12.9258C11.7872 6.88576 11.432 7.59674 11.432 8.32681V10.0561H13.9743L13.5679 12.722H11.432V19.1667C15.8142 18.4748 19.1663 14.6593 19.1663 10.0561Z" fill="#666666"/>
            </g>
            <defs>
            <clipPath id="clip0_355_899">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </a> 

        <a href="" class="social-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_355_899)">
            <path d="M19.1663 10.0561C19.1663 4.96251 15.0623 0.833374 9.99967 0.833374C4.93706 0.833374 0.833008 4.96251 0.833008 10.0561C0.833008 14.6593 4.18511 18.4748 8.56738 19.1667V12.722H6.23991V10.0561H8.56738V8.02419C8.56738 5.71275 9.93594 4.43599 12.0298 4.43599C13.0324 4.43599 14.0817 4.61612 14.0817 4.61612V6.88576H12.9258C11.7872 6.88576 11.432 7.59674 11.432 8.32681V10.0561H13.9743L13.5679 12.722H11.432V19.1667C15.8142 18.4748 19.1663 14.6593 19.1663 10.0561Z" fill="#666666"/>
            </g>
            <defs>
            <clipPath id="clip0_355_899">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </a>
    </div>
</div>