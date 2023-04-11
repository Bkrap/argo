<?php 
// debug($params); 
$button = $params['button_group']['button'];
?>

<section class="cta cta-yt">
    <div class="container">
        <div class="row align-items-end">
            <div class="col-lg-5 text-wrapper">
                <div class="d-flex">
                    <div class="circle"></div>
                    <p class="mb-0 small-text italic"><?php echo $params['top_label']; ?></p>
                </div>
                <h2 class="title">Watch  <span class="bold-text">now!</span></h2>
                <p class="description italic"><?php echo $params['text']; ?></p>
                <?php include THEME_DIR . '/templates/partials/button.php'; ?>
            </div>
            <div class="col-lg-7 images-wrapper">
                <!-- <img class="logo" src="<?php // echo get_template_directory_uri(); ?>\images\R.svg" alt=""> -->
                <?php echo $params['video']; ?>          
            </div>
        </div>
    </div>
</section>