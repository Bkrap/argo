<nav class="secondary-nav">
    <div class="title-pill">
        <p>Video Hub Hub</p>
    </div>
    <ul>
        <li class="active">
            <a href="">All</a>
        </li>
        <li>
            <a href="">Topic 1</a>
        </li>
        <li>
            <a href="">Topic 1</a>
        </li>
        <li>
            <a href="">Topic 1</a>
        </li>
        <li>
            <a href="">Topic 1</a>
        </li>
        <li>
            <a href="">Topic 1</a>
        </li>
    </ul>
</nav>

<section class="news-hub video-hub">
    <div class="container">
        <div class="filter-sort d-flex justify-content-end">
            <select name="cars" id="cars">
                <option class="d-none" disabled selected value="date">Sort by</option>
                <option value="date">date</option>
                <option value="date">date</option>
                <option value="date">date</option>
            </select>
        </div>
        <div class="row">
            <!-- Razlika između kartice pune širine i obične su klase col-lg-12 i full-width-card, i dolje ovaj div text-column d-flex flex-column -->
            <div class="col-lg-12 full-width-card card-column d-none d-lg-block">
                <div class="card h-100">
                    <div class="image-wrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/t68Y9Z91reM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="text-column d-flex flex-column">
                        <div class="card-body">
                            <p class="date mb-0">5 March 2023</p>
                            <h5 class="card-title bold-text">'Our heart is broken,' Nashville mayor says as city comes together to grieve 6 killed in school shooting</h5>
                            <p class="card-text mb-0">Lorem ipsum dolor sit amet consectetur. Sed sapien vulputate id neque urna ut. Ut quis volutpat eget quis id et mollis tristique sapien.</p>
                        </div>
                        <div class="card-footer d-flex align-items-center">
                            <span>Read more</span>
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
                        </div>
                    </div>
                </div>
            </div>
           <?php include 'card_yt.php'; ?>
           <?php include 'card_yt.php'; ?>
           <?php include 'card_yt.php'; ?>
           <div class="col-lg-12 full-width-card card-column d-none d-lg-block">
                <div class="card h-100">
                    <div class="image-wrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/t68Y9Z91reM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="text-column d-flex flex-column">
                        <div class="card-body">
                            <p class="date mb-0">5 March 2023</p>
                            <h5 class="card-title bold-text">'Our heart is broken,' Nashville mayor says as city comes together to grieve 6 killed in school shooting</h5>
                            <p class="card-text mb-0">Lorem ipsum dolor sit amet consectetur. Sed sapien vulputate id neque urna ut. Ut quis volutpat eget quis id et mollis tristique sapien.</p>
                        </div>
                        <div class="card-footer d-flex align-items-center">
                            <span>Read more</span>
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
                        </div>
                    </div>
                    <a href="" class="stretched-link"></a>
                </div>
            </div>
           <?php include 'card_yt.php'; ?>
           <?php include 'card_yt.php'; ?>
           <?php include 'card_yt.php'; ?>
           <?php include 'card_yt.php'; ?>
           <?php include 'card_yt.php'; ?>
           <?php include 'card_yt.php'; ?>
        </div>
        <div class="button-wrapper d-flex justify-content-end">
            <a id="load-more" class="arrow-link btn btn-arrow-link" href="">
                <span class="link-text">Load More</span>
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
            </a>
        </div>
    </div>
</section>

<?php include 'link_cards.php'; ?>