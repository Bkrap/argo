<?php debug($params) ?>

<nav class="secondary-nav">
    <div class="title-pill">
        <p>News Hub</p>
    </div>
    <ul class="secondary-nav-categories">
        <li class="active secondary-nav-category-term" data-cat-id="0">
            <a href="">All</a>
        </li>

        <?php foreach( get_categories() as $k => $v ) { ?>
            <li class="<?php echo isset( $params['class'] ) ? $params['class'] : 'secondary-nav-category-term'; ?>" data-cat-id="<?php echo $v->term_id; ?>">
                <a href=""><?php echo $v->name ?></a>
            </li>
        <?php } ?>

    </ul>
</nav>