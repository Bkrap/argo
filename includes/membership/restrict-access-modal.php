<?php
function restrict_access_modal() {

    $fields = THEME_OPTIONS['globals']['membership']['modal'];
    $content = $fields['content'];
    // debug($fields);

    $html = '<div class="modal fade show" style="display: block;" id="closedContentModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="closedContentModalLabel" aria-hidden="false">
                <div class="modal-dialog container modal-content">
                    <div class="row align-items-center no-slider">
                        <div class="col-lg-7 text-wrapper">
                            <div class="d-flex align-items-center">
                                <div class="circle"></div>
                                <div class="discount-pill">'.$content['pill_text'].'</div>
                                <p class="mb-0 small-text italic">'.$content['top_label'].'</p>
                            </div>
                            <h2 class="title">'.wyswig_raw($content['title']).'</h2>
                            <p class="description">'.$content['description'].'.</p>
                            <form name="membership-sign-up" action="POST">
                                <input type="email" name="email" placeholder="youremail@email.com" required id="membership-email">
                                <button type="submit" id="membership-sign-up" class="btn btn-secondary" name="submit-join">Join Argo</button>
                            </form>
                        </div>
                        <div class="col-lg-5 images-wrapper d-none d-lg-block">
                            <img class="person" src="'.$fields['image']['url'].'" alt="image member">
                        </div>
                    </div>
                </div>
            </div>';
    return $html;

}
add_shortcode( 'restrict_access_argo', 'restrict_access_modal' );
?>