<section class="shop-module" style="background-image: url('<?php echo wp_get_attachment_image_src( $params['image']['id'], 'full' )[0]; ?>'); background-position: <?php echo $params['image']['top']; ?>%, <?php echo $params['image']['left']; ?>%;">
  <div class="container">
    <div class="big-wrapper">
      <div class="small-wrapper">
        <div class="pill">
          <span><b><?php echo $params['pill_label']; ?></b></span>
        </div>
        <p class="short-description"><?php echo $params['top_label']; ?></p>
      </div>
      <h2 class="modal-title"><?php echo wyswig_raw( $params['title'] ); ?></h2>
      <p><?php echo $params['description']; ?></p>
      <a href="<?php echo $params['link']['url']; ?>" target="" class="btn btn-link_primary">
        <span><?php echo $params['link']['title']; ?></span>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_204_1799)">
          <path d="M7.99984 3.16669L7.05984 4.10669L10.7798 7.83335H2.6665V9.16669H10.7798L7.05984 12.8934L7.99984 13.8334L13.3332 8.50002L7.99984 3.16669Z" fill="#2A807F"></path>
          </g>
          <defs>
          <clipPath id="clip0_204_1799">
          <rect width="16" height="16" fill="white" transform="translate(0 0.5)"></rect>
          </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  </div>
</section>
