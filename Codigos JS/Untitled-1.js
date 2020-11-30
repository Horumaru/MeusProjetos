 /* - Dynamic Remarketing
    Pegar os parametros prodid, totalvalue e  pagetype Dinamicamente.
            PAGETYPES  -->> (home, searchresults, category, product, cart, purchase, other) 
    https://screenshot.googleplex.com/mFhSXknevJY.png

*/
<script type="text/javascript">
var dataLayer = window.dataLayer || [];
dataLayer.push({
    'google_tag_params': {
            'ecomm_prodid': '12345',
            'ecomm_pagetype': 'cart',
            'ecomm_totalvalue': 39.99
    }
});
</script>
/*
Config variable GTM 
    variable type           =   Data layer variable.
    datalayer Variable Name =   google_tag_params

Tag Configuration
    tag type      =   Google ads remarketing
    Conversion ID =   XXXXXX
    datalayer variable = {{ google_tag_params}}
*/



- - - Cross Domain
Fazer o filto para fnalizar o cross domain 
/* https://screenshot.googleplex.com/WCCyfBhj5QX.png */


<script>
document.addEventListener( 'wpcf7mailsent', function( event ) {
    gtag('event', 'formulario', {
    'event_category': 'enviado',
    });
}, false );
</script>


<script>
var button  = document.getElementById('call')
button.addEventListener('click', function(){
    gtag('event', 'click', {
    'event_category': 'whats',
    });
});
</script>

<script>
gtag('event', 'Click', {
    'event_category': 'Whats',
    });
</script>

<script>
gtag('event', 'enviado', {
    'event_category': 'Form',
    });
</script>



<script>
document.addEventListener( 'WhatsApp', function( event ) {
    gtag('event', 'clique', {
    'event_category': 'botao',
    });
}, false );
</script>

<script>
    gtag('event': 'Finalizada', {
        'event_category': 'Compra'
    });
</script>


var tels = document.querySelectorAll('a[href*=tel]');

for (var i = 0; i < tels.length; i++) {
var tel = tels[i];
tel.addEventListener("click", function(){
console.log("hola");
});
}
