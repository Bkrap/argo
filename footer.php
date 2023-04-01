            </main>
        </div>
        <footer id="footer" role="contentinfo">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div id="copyright">
                            &copy; <?php echo esc_html( date_i18n( __( 'Y', 'generic' ) ) ); ?> <?php echo esc_html( get_bloginfo( 'name' ) ); ?>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <?php wp_footer(); ?>
    </body>
</html>