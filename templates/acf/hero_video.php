<?php //debug($params); ?>

<section class="hero-module video">
    <div class="hero hero-<?php echo $params['type']; ?>">

        <?php if( $params['type'] == 'file' ) { ?>
            <video width="320" height="240"autoplay loop muted playsinline>
                <source src="<?php echo $params['file']['url']; ?>" type="video/mp4">
            </video>
        <?php } else { ?>
            <iframe src="https://player.vimeo.com/video/838553917?h=7ed1270150&color=000507&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/838553917">Aim For Change</a> from <a href="https://vimeo.com/argopath">ARGO</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
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
    var autoplaySrc = videoSrc + '?autoplay=1&controls=0&mute=1';
    jQuery('iframe').attr('src', autoplaySrc);
    jQuery('iframe').attr('allow', 'autoplay');
    });
</script>
<?php } ?>

