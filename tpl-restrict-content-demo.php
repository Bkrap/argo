<?php
get_header();
// Template Name: Restrict content demo
?>

<!-- ovdje je gumb za triggerat modal, maknut cemo ga sam kad mi javis kak ce se triggerat taj membership i to -->
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#closedContentModal">
  Launch demo modal
</button> -->

<div class="modal fade show" style="display: block;" id="closedContentModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="closedContentModalLabel" aria-hidden="false">
    <div class="modal-dialog container">
        <div class="row align-items-center no-slider">
            <div class="col-lg-7 text-wrapper">
                <div class="d-flex align-items-center">
                    <div class="circle"></div>
                    <div class="discount-pill">-100% OFF</div>
                    <p class="mb-0 small-text italic">Join the Movement</p>
                </div>
                <h2 class="title">Claim your <span class="bold-text">free membership</span></h2>
                <p class="description">This article is reserved only for Argo members. Claim your free membership lorem ispum dolor sit amet.</p>
                <form action="">
                    <input type="email" name="email" placeholder="youremail@email.com" required id="">
                    <button type="submit" class="btn btn-primary">Join Argo</button>
                </form>
            </div>
            <div class="col-lg-5 images-wrapper d-none d-lg-block">
                <img class="person" src="<?php echo get_template_directory_uri(); ?>\images\person.png" alt="">
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
