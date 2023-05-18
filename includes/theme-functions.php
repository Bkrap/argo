<?php

/********************************************************************************* */
function debug( $s ) {
	echo "<pre>";
		print_r($s);
	echo "</pre>";
}

// Removes from admin menu
add_action( 'admin_menu', 'my_remove_admin_menus' );
function my_remove_admin_menus() {
    remove_menu_page( 'edit-comments.php' );
}


/**
 * Returns a string with all HTML tags stripped except <strong>.
 *
 * @param mixed $param The input string or array of strings to be stripped.
 * @return string The stripped string.
 */
function wyswig_raw( $param ) {
	return strip_tags( $param, "<strong>" );
}

/********************************************************************************** */ 


/**
 * Generates an inline CSS style string for an image with the specified ID and focus position.
 *
 * @param int $img_id The ID of the image.
 * @param int $left The horizontal percentage of the focus position.
 * @param int $top The vertical percentage of the focus position.
 * @return string The inline CSS style string
 * */
function wp_get_img_focus_inline_style( $img_id = 0, $left = 0, $top = 0 ) {
    return "background-image: url(". wp_get_attachment_image_src( $img_id, 'full' ) ."); background-position: {$left}% {$top}%;";
}

/********************************************************************************** */ 

/**
 * Returns an HTML img element with a specific position and class to focus on a certain area.
 *
 * @param int $img_id The ID of the image attachment.
 * @param int $left The position of the image on the x-axis.
 * @param int $top The position of the image on the y-axis.
 * @param string $class The CSS class to apply to the element.
 * @return string The HTML img element with the specified position and class.
 */
function wp_get_img_focus_element( $img_id = 0, $left = 0, $top = 0, $class = "" ) {
    return wp_get_attachment_image( $img_id, 'full', false, array(
        "class" => $class,
        "style" => "{$left}% {$top}%"
    ));
}

/********************************************************************************** */ 

/**
 * Returns a button with optional icon if the button should be shown.
 *
 * @param array $button_group An associative array containing a 'show_button' key
 *                            and a 'button' key. The 'show_button' key should be
 *                            a boolean indicating whether the button should be shown.
 *                            The 'button' key should be an array containing the button
 *                            attributes.
 * @param bool $icon Optional. Whether to include an icon with the button. Defaults to false.
 */
function get_btn( $button_group, $icon = false ) {

	if( $button_group['show_button'] ) {

		$button = $button_group['button'];
		include THEME_DIR . '/templates/partials/button.php'; 
		if( $icon ) { ?>
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
		<?php } 
		
	}

}

/********************************************************************************* */

/**
 * Retrieves a post object by the post title and post type.
 *
 * @param string $page_title The title of the post to retrieve.
 * @param string $post_type The type of post to retrieve. Default is 'post'.
 * @param string $output The output type. Accepts OBJECT, ARRAY_A, ARRAY_N. Default is OBJECT.
 * @throws None
 * @return WP_Post|null WP_Post on success or null on failure.
 */

function get_post_by_title($page_title, $post_type ='post' , $output = OBJECT) {
    global $wpdb;
        $post = $wpdb->get_var( $wpdb->prepare( "SELECT ID FROM $wpdb->posts WHERE post_title = %s AND post_type= %s", $page_title, $post_type));
        if ( $post )
            return get_post($post, $output);

    return null;
}
/********************************************************************************* */

/**
 * TAKE EACH FEATURED IMAGE AND INSERT IT INTO FIELD -> POST_FEATURED_IMAGE | Uncomment setFeaturedImage(), run it only once
 */

function setFeaturedImage() {
	$q = new WP_Query([
		'post_type' => array('post', 'page', 'quiz-statements'),
		'posts_per_pagessssss' => -1,
	]);

	if ($q->found_posts > 0) {
		foreach ($q->posts as $k => $v) {
			$attachment_id = get_post_thumbnail_id( $v->ID );
			if ($attachment_id > 0) {
				update_field('post_featured_image', array('id'=>$attachment_id, 'left'=>50, 'top'=>50), $v);
			}
		}
	}

// myErr($q->posts[0], true);
}
// setFeaturedImage();

/********************************************************************************* */

/**
 * SAVE ACF FIELD TO FEATURED IMAGE
 */

function my_acf_after_save_post( $post_id ) {
	$cpt = get_post_type($post_id);

	if( $cpt == 'post' ) {

		$values = get_fields( $post_id );
	
		if( isset( $values['post_featured_image']['id'] ) ) {
    		set_post_thumbnail($post_id, $values['post_featured_image']['id']);
		} else {
            delete_post_thumbnail($post_id);
		}	
	}
}
if( function_exists( get_fields() ) ) {
    // add_action('acf/save_post', 'my_acf_after_save_post');
}


/********************************************************************************* */
