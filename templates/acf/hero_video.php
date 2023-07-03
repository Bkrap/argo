<?php //debug($params); ?>

<section class="hero-module video">
    <div class="hero hero-<?php echo $params['type']; ?>">

        <?php if( $params['type'] == 'file' ) { ?>
            <video width="320" height="240"autoplay loop playsinline controls>
                <source src="<?php echo $params['file']['url']; ?>" type="video/mp4">
            </video>
        <?php } else { ?>
            <?php echo $params['link']; ?>
        <?php } ?>

        <div class="content-wrapper">
            <h1 class="video-title"><?php echo $params['content_box']['title']; ?></h1>
            <div class="buttons">
                <?php echo get_btn( $params['content_box']['button_group'] ); ?>
            </div>
        </div>

    </div>
</section>

<?php
if( $params['type'] == 'external' ) { ?>
<script>
    jQuery(document).ready(function() {
    var videoSrc = jQuery('iframe').attr('src');
    var autoplaySrc = videoSrc + '?autoplay=1';
    jQuery('iframe').attr('src', autoplaySrc);
    jQuery('iframe').attr('allow', 'autoplay');
    });
</script>

<script src="https://player.vimeo.com/api/player.js">
    var options = {
      id: '838553917',
      autoplay: true
    };

    var player = new Vimeo.Player('player', options);
  </script>

<?php } ?>

