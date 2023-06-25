<?php get_header(); ?>
    <?php
    if( FlexibleContent('page_builder') ) {
    } else {
        the_content();
    }
    ?>
<?php get_footer(); ?>