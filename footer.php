            </main>
        </div>
        <?php
        $footer = THEME_OPTIONS['footer'];
        // debug($footer);
        ?>
        <footer id="footer" role="contentinfo">
            <div class="container">
                <div class="footer-header d-flex justify-content-between">
                    <img src="<?php echo $footer['logo']['desktop']['url']; ?>" alt="logo footer">
                    <div class="social-icons d-flex">
                        <?php foreach( $footer['social_icons'] as $k_soc => $v_soc ) { ?>
                            <a target="_blank" href="<?php echo $v_soc['url']; ?>" class="social-icon">
                                <img src="<?php echo $v_soc['icon']['url']; ?>" alt="logo social">
                            </a>
                        <?php } ?>
                    </div>
                </div>
                <div class="footer-body d-flex justify-content-between">
                    <div class="footer-form">
                        <form action="">
                            <input placeholder="Email" type="email" name="" id="">
                            <button class="btn btn-secondary" type="submit">Submit</button>
                        </form>
                    </div>
                    <div class="first-menu">
                        <ul>
                            <?php foreach( $footer['navigation']['navigation_items_secondary_left'] as $k_nav_left => $v_nav_left ) { ?>
                                <li>
                                    <a target="<?php echo $v_nav_left['page_link']['target']; ?>" href="<?php echo $v_nav_left['page_link']['url']; ?>"><?php echo $v_nav_left['page_link']['title']; ?></a>
                                </li>
                            <?php } ?>
                        </ul>
                    </div>
                    <div class="second-menu">
                        <ul>
                            <?php foreach( $footer['navigation']['navigation_items_primary_right'] as $k_nav_right => $v_nav_right ) { ?>
                                <?php if( !$v_nav_right['cta'] ) { ?>
                                    <li>
                                        <a target="<?php echo $v_nav_right['page_link']['target']; ?>" href="<?php echo $v_nav_right['page_link']['url']; ?>"><?php echo $v_nav_right['page_link']['title']; ?></a>
                                    </li>
                                <?php } ?>
                            <?php } ?>
                        </ul>

                        <?php foreach( $footer['navigation']['navigation_items_primary_right'] as $k_nav_right => $v_nav_right ) { ?>
                            <?php if( $v_nav_right['cta'] ) { ?>
                                <div class="other-items d-lg-block d-none">
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
                                    <a target="<?php echo $v_nav_right['page_link']['target']; ?>" href="<?php echo $v_nav_right['page_link']['url']; ?>" class="btn btn-secondary"><?php echo $v_nav_right['page_link']['title']; ?></a>
                                </div>
                            <?php } ?>
                        <?php } ?>


                    </div>
                </div>
                <div class="footer-footer d-flex justify-content-between align-items-center">
                    <div class="copyright">
                        <span>© <?php echo date("Y"); ?> ARGO</span>
                    </div>
                    <div class="gdpr">
                        <ul>
                            <?php foreach( $footer['navigation']['third_level_navigation'] as $k_nav_third => $v_nav_third ) { ?>
                                <li>
                                    <a href="<?php echo $v_nav_third['page_link']['url']; ?>"><?php echo $v_nav_third['page_link']['title']; ?></a>
                                </li>
                            <?php } ?>
                        </ul>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js"></script>

        </footer>
        <?php get_partial('login-modal'); ?>

        <?php wp_footer(); ?>
    </body>
</html>