
<?php
global $wp;
$current_url = home_url(add_query_arg(array(), $wp->request));
?>
<!-- Modal -->
<form name="login-ajax-form" class="login-ajax-form" id="login-ajax-form" method="POST">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Login / Register</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
            <div class="mb-3">
                <label for="easy-auth-email " class="form-label">Email address</label>
                <input type="email" class="form-control" id="easy-auth-email" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text"><p class="mb-0">We'll never share your email with anyone else.</p></div>
                <div id="emailHelp" class="form-text"><p>Please check your email once it is sent.</p></div>
                <input type="hidden" name="clickedUrl" id="clickedUrl" value="<?php echo $current_url; ?>">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    </div>
    </div>
</form>