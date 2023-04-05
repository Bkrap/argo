<?php
/* 
    Template Name: Frontend Template 
*/

get_header(); // Load the header

include 'frontend/hero.php'; // Load the hero module
include 'frontend/color_cards.php';
include 'frontend/cta_background.php';
include 'frontend/news_hub.php';
include 'frontend/cta.php';
include 'frontend/single_post.php';

get_footer(); // Load the footer