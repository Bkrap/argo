<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php generic_schema_type(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>" />
<meta name="viewport" content="width=device-width" />
<meta name="description" content="<?php if (is_single()) {
    echo esc_html(wp_strip_all_tags(get_the_excerpt(), true));
} else {
    bloginfo('description');
} ?>" />
<meta name="keywords" content="<?php echo esc_html(implode(', ', wp_get_post_tags(get_the_ID(), array( 'fields' => 'names' )))); ?>" />
<link rel="canonical" href="<?php echo esc_url('https://' . $_SERVER["HTTP_HOST"] . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)); ?>" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="application/ld+json">
{
"@context": "https://www.schema.org/",
"@type": "WebSite",
"name": "<?php bloginfo('name'); ?>",
"url": "<?php echo esc_url(home_url()); ?>/"
}
</script>
<script type="application/ld+json">
{
"@context": "https://www.schema.org/",
"@type": "Organization",
"name": "<?php bloginfo('name'); ?>",
"url": "<?php echo esc_url(home_url()); ?>/",
"logo": "<?php if (has_custom_logo()) {
    $custom_logo_id = get_theme_mod('custom_logo');
    $logo = wp_get_attachment_image_src($custom_logo_id, 'full');
    echo esc_url($logo[0]);
} ?>",
"image": "<?php if (has_site_icon()) {
    echo esc_url(get_site_icon_url());
} ?>",
"description": "<?php bloginfo('description'); ?>"
}
</script>
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php //wp_body_open(); ?>
    <div id="wrapper" class="hfeed">

        <?php //debug(THEME_OPTIONS['header']); ?>
        <header id="header" role="banner">
            <div class="container-fluid header-wrapper d-flex justify-content-between">
                <a href="<?php echo get_home_url(); ?>" class="logo d-flex align-items-center">
                    <img class="logo-black" src="<?php echo THEME_OPTIONS['header']['logo']['desktop']['url']; ?>" alt="logo">
                    <!-- <img class="logo-black d-md-none" src="<?php echo THEME_OPTIONS['header']['logo']['mobile']['url']; ?>" alt="logo"> -->
                </a>
                <div class="navigation d-flex align-items-center">
                    <div class="d-xl-flex d-none align-items-center">
                        <nav id="menu" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
                            <div class="menu">
                                <ul>
                                    <?php foreach( THEME_OPTIONS['header']['navigation_items'] as $k_nav => $v_nav ) : ?>
                                        <?php if( $v_nav['cta'] ) { continue; } //debug($v_nav) ?>
                                        <li class="header-nav-links" data-page-id="<?php echo url_to_postid($v_nav['page_link']['url']); ?>" class="page_item page_item_<?php echo $k_nav; ?>">
                                            <a target="<?php echo $v_nav['page_link']['target']; ?>" href="<?php echo $v_nav['page_link']['url']; ?>">
                                                <span itemprop="name">
                                                    <?php echo $v_nav['page_link']['title']; ?>
                                                </span>
                                            </a>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                            <span class="looper after" tabindex="0"></span>
                        </nav>
                        <div class="membership">
                            <div id="membership-login">
                                <button class="search">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_590_1941)">
                                        <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_590_1941">
                                                <rect width="24" height="24" fill="black"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <!-- Button trigger modal -->
                                <button type="button" class="login-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_139_1427)">
                                        <path d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V17C20 14.34 14.67 13 12 13Z" fill="#263546"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_139_1427">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                            <?php foreach( THEME_OPTIONS['header']['navigation_items'] as $k_nav => $v_nav ) : ?>
                                <?php if( $v_nav['cta'] ) { ?>
                                    <a target="<?php echo $v_nav['page_link']['target']; ?>" href="<?php echo $v_nav['page_link']['url']; ?>" class="btn btn-secondary membership-btn"><?php echo $v_nav['page_link']['title']; ?></a>
                                <?php } ?>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <button id="hamburger" class="d-xl-none d-flex" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <span></span>
                            <span></span>
                            <span></span>
                    </button>
                </div>
                <div class="offcanvas offcanvas-start d-xl-none d-flex" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <a href="<?php echo get_home_url(); ?>" class="logo d-flex align-items-center">
                            <img class="logo-black d-md-none" src="<?php echo THEME_OPTIONS['header']['logo']['mobile']['url']; ?>" alt="logo">
                        </a>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div class="offcanvas-body  d-flex flex-column align-items-center justify-content-center">
                        <div class="mobile-navigation">
                            <nav id="menu" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
                                <div class="menu">
                                    <ul>
                                        <?php foreach( THEME_OPTIONS['header']['navigation_items'] as $k_nav => $v_nav ) : ?>
                                            <?php if( $v_nav['cta'] ) { break; } ?>
                                            <li class="header-nav-links" data-page-id="<?php echo url_to_postid($v_nav['page_link']['url']); ?>" class="page_item page_item_<?php echo $k_nav; ?>">
                                                <a target="<?php echo $v_nav['page_link']['target']; ?>" href="<?php echo $v_nav['page_link']['url']; ?>">
                                                    <span itemprop="name">
                                                        <?php echo $v_nav['page_link']['title']; ?>
                                                    </span>
                                                </a>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>
                                <span class="looper after" tabindex="0"></span>
                            </nav>
                        </div>
                    </div>
                    <div class="offcanvas-footer d-flex justify-content-center">
                        <div class="membership flex-column">
                            <div class="d-flex justify-content-evenly align-items-center mb-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_139_1427)">
                                    <path d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V17C20 14.34 14.67 13 12 13Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_139_1427">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <button class="search">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_590_1941)">
                                        <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_590_1941">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                            <?php foreach( THEME_OPTIONS['header']['navigation_items'] as $k_nav => $v_nav ) : ?>
                                <?php if( $v_nav['cta'] ) { ?>
                                    <a target="<?php echo $v_nav['page_link']['target']; ?>" href="<?php echo $v_nav['page_link']['url']; ?>" class="btn btn-secondary membership-btn"><?php echo $v_nav['page_link']['title']; ?></a>
                                <?php } ?>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div id="container">
        <main id="content" role="main">