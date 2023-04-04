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
        <header id="header" role="banner">
            <div class="container header-wrapper d-flex justify-content-between">
                <div class="logo">
                    <img class="logo-black" src="<?php echo get_template_directory_uri(); ?>\images\logo.svg" alt="">
                    <img class="logo-white" src="<?php echo get_template_directory_uri(); ?>\images\logo-white.svg" alt="">
                </div>
                <div class="navigation d-flex align-items-center">
                    <nav id="menu" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
                        <?php wp_nav_menu(array( 'theme_location' => 'main-menu', 'link_before' => '<span itemprop="name">', 'link_after' => '</span>' )); ?>
                        <span class="looper after" tabindex="0"></span>
                    </nav>
                    <div class="membership">
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
                        <a href="" class="btn btn-primary membership-btn">Membership</a>
                    </div>
                </div>
                
            </div>
        </header>
        <header id="header" class="white-header" role="banner">
            <div class="container header-wrapper d-flex justify-content-between">
                <div class="logo">
                    <img class="logo-black" src="<?php echo get_template_directory_uri(); ?>\images\logo.svg" alt="">
                    <img class="logo-white" src="<?php echo get_template_directory_uri(); ?>\images\logo-white.svg" alt="">
                </div>
                <div class="navigation d-flex align-items-center">
                    <nav id="menu" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
                        <?php wp_nav_menu(array( 'theme_location' => 'main-menu', 'link_before' => '<span itemprop="name">', 'link_after' => '</span>' )); ?>
                        <span class="looper after" tabindex="0"></span>
                    </nav>
                    <div class="membership">
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
                        <a href="" class="btn btn-primary membership-btn">Membership</a>
                    </div>
                </div>
                
            </div>
        </header>
        <div id="container">
        <main id="content" role="main">