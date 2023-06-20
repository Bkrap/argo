<?php
function parseExternalNews() {
	
	$api_key = THEME_OPTIONS['news']['news_api']['api_key'];
	$url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' . $api_key;
	
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	curl_close($ch);
	debug($url);
	
	$articles = json_decode($response, true)['articles'];
	debug($articles);
	
}

// parseExternalNews();
