<section class="post-hero">

<!-- ovdje je gumb za triggerat modal, maknut cemo ga sam kad mi javis kak ce se triggerat taj membership i to -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#closedContentModal">
  Launch demo modal
</button>


    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <a class="btn-arrow-link" href="">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_615_2378)">
                        <path d="M13.3332 7.33341H5.21984L8.9465 3.60675L7.99984 2.66675L2.6665 8.00008L7.99984 13.3334L8.93984 12.3934L5.21984 8.66675H13.3332V7.33341Z" fill="#2A807F"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_615_2378">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <span class="link-text">Go back</span>
                </a>
                <p class="small-text mt-4"><?php echo $params['category']; ?></p>
                <h1 class="title bold-text italic"><?php echo $params['title']; ?></h1>
                <div class="info mb-3 d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <span>Published</span>
                        <span class="date"><?php echo $params['date']; ?></span>
                        <span class="author">By <?php echo $params['author']; ?></span>
                    </div>
                    <div class="social-icons d-flex">
                        <a href="" class="social-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_355_899)">
                            <path d="M19.1663 10.0561C19.1663 4.96251 15.0623 0.833374 9.99967 0.833374C4.93706 0.833374 0.833008 4.96251 0.833008 10.0561C0.833008 14.6593 4.18511 18.4748 8.56738 19.1667V12.722H6.23991V10.0561H8.56738V8.02419C8.56738 5.71275 9.93594 4.43599 12.0298 4.43599C13.0324 4.43599 14.0817 4.61612 14.0817 4.61612V6.88576H12.9258C11.7872 6.88576 11.432 7.59674 11.432 8.32681V10.0561H13.9743L13.5679 12.722H11.432V19.1667C15.8142 18.4748 19.1663 14.6593 19.1663 10.0561Z" fill="#666666"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_355_899">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>
                        <a href="" class="social-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_355_899)">
                            <path d="M19.1663 10.0561C19.1663 4.96251 15.0623 0.833374 9.99967 0.833374C4.93706 0.833374 0.833008 4.96251 0.833008 10.0561C0.833008 14.6593 4.18511 18.4748 8.56738 19.1667V12.722H6.23991V10.0561H8.56738V8.02419C8.56738 5.71275 9.93594 4.43599 12.0298 4.43599C13.0324 4.43599 14.0817 4.61612 14.0817 4.61612V6.88576H12.9258C11.7872 6.88576 11.432 7.59674 11.432 8.32681V10.0561H13.9743L13.5679 12.722H11.432V19.1667C15.8142 18.4748 19.1663 14.6593 19.1663 10.0561Z" fill="#666666"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_355_899">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>
                        <a href="" class="social-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_355_899)">
                            <path d="M19.1663 10.0561C19.1663 4.96251 15.0623 0.833374 9.99967 0.833374C4.93706 0.833374 0.833008 4.96251 0.833008 10.0561C0.833008 14.6593 4.18511 18.4748 8.56738 19.1667V12.722H6.23991V10.0561H8.56738V8.02419C8.56738 5.71275 9.93594 4.43599 12.0298 4.43599C13.0324 4.43599 14.0817 4.61612 14.0817 4.61612V6.88576H12.9258C11.7872 6.88576 11.432 7.59674 11.432 8.32681V10.0561H13.9743L13.5679 12.722H11.432V19.1667C15.8142 18.4748 19.1663 14.6593 19.1663 10.0561Z" fill="#666666"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_355_899">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <?php echo wp_get_img_focus_element(
                    $params['img_id'],
                    0,
                    0,
                    "hero-img"
                ) ?>
            </div>
        </div>
    </div>
</section>