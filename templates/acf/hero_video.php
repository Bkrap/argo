<?php //debug($params); ?>

<section class="hero-module video">
    <div class="hero hero-<?php echo $params['type']; ?>">

        <?php if( $params['type'] == 'file' ) { ?>
            <video width="320" height="240"autoplay loop muted playsinline>
                <source src="<?php echo $params['file']['url']; ?>" type="video/mp4">
            </video>
        <?php } else {
            echo $params['link'];
        } ?>

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

<div id='collection-component-1687283346522'></div>
<script type="text/javascript">
(function () {
var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
if (window.ShopifyBuy) {
if (window.ShopifyBuy.UI) {
ShopifyBuyInit();
} else {
loadScript();
}
} else {
loadScript();
}
function loadScript() {
var script = document.createElement('script');
script.async = true;
script.src = scriptURL;
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
script.onload = ShopifyBuyInit;
}
function ShopifyBuyInit() {
var client = ShopifyBuy.buildClient({
domain: 'ARGO Store ',
storefrontAccessToken: '5ee6b6ff275139a486574453d8ad1c0c',
});
ShopifyBuy.UI.onReady(client).then(function (ui) {
ui.createComponent('collection', {
id: '449165787421',
node: document.getElementById('collection-component-1687283346522'),
moneyFormat: '%24%7B%7Bamount%7D%7D',
options: {
"product": {
"styles": {
"product": {
"@media (min-width: 601px)": {
"max-width": "calc(33.33333% - 30px)",
"margin-left": "30px",
"margin-bottom": "50px",
"width": "calc(33.33333% - 30px)"
},
"img": {
"height": "calc(100% - 15px)",
"position": "absolute",
"left": "0",
"right": "0",
"top": "0"
},
"imgWrapper": {
"padding-top": "calc(75% + 15px)",
"position": "relative",
"height": "0"
}
},
"title": {
"font-family": "Gill Sans, sans-serif",
"font-weight": "normal"
},
"button": {
":hover": {
"background-color": "#0e7b71"
},
"background-color": "#0f897e",
":focus": {
"background-color": "#0e7b71"
}
},
"price": {
"font-family": "Gill Sans, sans-serif"
},
"compareAt": {
"font-family": "Gill Sans, sans-serif"
},
"unitPrice": {
"font-family": "Gill Sans, sans-serif"
}
},
"buttonDestination": "modal",
"contents": {
"options": false
},
"text": {
"button": "View product"
}
},
"productSet": {
"styles": {
"products": {
"@media (min-width: 601px)": {
"margin-left": "-30px"
}
}
}
},
"modalProduct": {
"contents": {
"img": false,
"imgWithCarousel": true
},
"styles": {
"product": {
"@media (min-width: 601px)": {
"max-width": "100%",
"margin-left": "0px",
"margin-bottom": "0px"
}
},
"button": {
":hover": {
"background-color": "#0e7b71"
},
"background-color": "#0f897e",
":focus": {
"background-color": "#0e7b71"
}
},
"title": {
"font-family": "Helvetica Neue, sans-serif",
"font-weight": "bold",
"font-size": "26px",
"color": "#000000"
},
"price": {
"font-family": "Helvetica Neue, sans-serif",
"font-weight": "normal",
"font-size": "18px",
"color": "#000000"
},
"compareAt": {
"font-family": "Helvetica Neue, sans-serif",
"font-weight": "normal",
"font-size": "15.299999999999999px",
"color": "#000000"
},
"unitPrice": {
"font-family": "Helvetica Neue, sans-serif",
"font-weight": "normal",
"font-size": "15.299999999999999px",
"color": "#000000"
},
"description": {
"color": "#000000"
}
},
"text": {
"button": "Add to cart"
}
},
"option": {
"styles": {
"label": {
"color": "#000000"
}
}
},
"cart": {
"styles": {
"button": {
":hover": {
"background-color": "#0e7b71"
},
"background-color": "#0f897e",
":focus": {
"background-color": "#0e7b71"
}
},
"title": {
"color": "#000000"
},
"header": {
"color": "#000000"
},
"lineItems": {
"color": "#000000"
},
"subtotalText": {
"color": "#000000"
},
"subtotal": {
"color": "#000000"
},
"notice": {
"color": "#000000"
},
"currency": {
"color": "#000000"
},
"close": {
"color": "#000000",
":hover": {
"color": "#000000"
}
},
"empty": {
"color": "#000000"
},
"noteDescription": {
"color": "#000000"
},
"discountText": {
"color": "#000000"
},
"discountIcon": {
"fill": "#000000"
},
"discountAmount": {
"color": "#000000"
}
},
"text": {
"total": "Subtotal",
"notice": "Shipping and taxes are added at checkout.",
"button": "Checkout"
},
"popup": false
},
"toggle": {
"styles": {
"toggle": {
"background-color": "#0f897e",
":hover": {
"background-color": "#0e7b71"
},
":focus": {
"background-color": "#0e7b71"
}
}
}
},
"lineItem": {
"styles": {
"variantTitle": {
"color": "#000000"
},
"title": {
"color": "#000000"
},
"price": {
"color": "#000000"
},
"fullPrice": {
"color": "#000000"
},
"discount": {
"color": "#000000"
},
"discountIcon": {
"fill": "#000000"
},
"quantity": {
"color": "#000000"
},
"quantityIncrement": {
"color": "#000000",
"border-color": "#000000"
},
"quantityDecrement": {
"color": "#000000",
"border-color": "#000000"
},
"quantityInput": {
"color": "#000000",
"border-color": "#000000"
}
}
}
},
});
});
}
})();
</script>