<?php
function parseExternalNews() {
	
	// $api_key = THEME_OPTIONS['news']['news_api']['api_key'];
	// $url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' . $api_key;
	
	// $ch = curl_init($url);
	// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    //     'User-Agent: Your-Application-Name/1.0',  // Replace with your application name and version
    // ));

	// $response = curl_exec($ch);
	// curl_close($ch);
	// debug($url);
	
    // debug($response);

	// $articles = json_decode($response, true)['articles'];
	// debug($articles);

	// if ( ! empty( $articles ) ) {
    //     foreach ( $articles as $article ) {
    //         // debug($article, true);
    //         $title = $article['title'];
    //         $content = $article['content'];
	// 		$excerpt = $article['description'];
    //         $date = date( 'Y-m-d H:i:s', strtotime( $article['publishedAt'] ) );
    //         $post = array(
    //             'post_title'        => $title,
    //             'post_content'      => $content,
    //             'post_status'       => 'publish',
    //             'post_date'         => $date,
    //             // 'post_type'      => 'post',
	// 			'post_excerpt'      => $excerpt,
    //             'post_author'       => 1,
    //         );
    //         $post_id = wp_insert_post( $post );
    //         if ( is_wp_error( $post_id ) ) {
    //             // An error occurred while creating the post, handle the error here
    //             echo "error while importing posts - ERROR: 420";
    //         } else {
    //             // Post was created successfully, do something here
    //         }
    //     }
    // }
	
}

// parseExternalNews();
