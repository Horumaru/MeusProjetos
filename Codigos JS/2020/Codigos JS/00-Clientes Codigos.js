<script>
document.addEventListener('DOMContentLoaded', function (){
    var btns = document.querySelectorAll('#formeLids > button"');

    for (var i = 0; i < btns.length; i++) {
       btns[i].addEventListener('click', function(e){
        console.log('foi');
        //gtag('event', 'conversion', {'send_to': 'AW-759699421/WKhRCLb7raYBEN2voOoC'});
       });
        
    }
});
</script>




//clinica clinicadeesteticaemcuritiba
<script>
document.addEventListener('DOMContentLoaded', function (){

var btns = document.getElementById('rd-button-jsc2f952');

for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', function(e){
    gtag('event', 'btn_whats', {
      'event_category': 'clique'
  });
   console.log('foi');
   });
    
}
});
</script>

<script type="text/javascript">
var dataLayer = window.dataLayer || [];
dataLayer.push({
	'ecomm_prodid':'12345',
	'ecomm_pagetype' : 'cart',
	'ecomm_totalvalue' : 39.99
});
</script>



<script>
function trackGAPurchase() {
    // get data from storage
var sessionCartData = localStorage.getItem("cartData");
var cartData = JSON.parse(sessionCartData);
//get each items
var items = [];
jQuery.each(cartData.items, function (key, item) {
    items.push({
        id: item.variant_id,
        name: item.title,
        quantity : item.quantity,
        price: makeValue(item.price),
    });
});

// track event
gtag('event', 'purchase', {
    "transaction_id": document.querySelector(".successOrderId").textContent.trim(),
    "affiliation": "Shopify Store",
    "value": makeValue(cartData.total_price),
    "currency": "BRL",
    "items": items
});
}
</script>



Inserir na thankyou page
<!-- Event snippet for Compra Realizada conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-700869885/4YSyCIPytrEBEP3Zmc4C',
      'transaction_id': ''
  });
</script>

<script>
gtag('event', 'Realizada', {
  'event_category': 'Compra'
});
</script>



<script>

document.addEventListener('DOMContentLoaded', function (){

  var btns = document.querySelectorAll('body > div:nth-child(5) > div > div > div.whatsappme__button');

  for (var i = 0; i < btns.length; i++) {

    btns[i].addEventListener('click', function(e){

          gtag('event', 'participar', {

          'event_category': 'clique'

          });

    });  

  }

});

</script>

<!-- Snippet de evento para conversao Envio de Contato -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-701320149/zpewCPjNqbYBENWXtc4C'});
</script>

<!-- Snippet de evento para conversao Envie-nos uma mensagem
Em sua pagina html, adicione esse snippet e chame a gtag_report_conversion quando alguem clicar no botao escolhido. -->
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-701320149/AxPCCLrgtLYBENWXtc4C',
      'event_callback': callback
  });
  return false;
}
</script>


<script>
   função readCookie (nome) {
   var n = nome + "=";
   var cookie = document.cookie.split (';');
   for (var i = 0; i <comprimento do cookie; i ++) {
       var c = cookie [i];
       while (c.charAt (0) == '') {c = c.substring (1, c.length);}
       if (c.indexOf (n) == 0) {retorna c.substring (n.length, c.length);}
   }
   return null;
   }

   window.onload = function () {
       document.getElementById ('gclid_field'). value =
   readCookie ('gclid');
   }
   </script>


<script>
var prodid = document.querySelectorAll('#product-11079 > div.summary.entry-summary > div.product_meta > span.wpm_gtin_code_wrapper > span')[0].innerText
var totalvalue = Number(document.querySelectorAll('#product-11079 > div.summary.entry-summary > p')[0].lastElementChild.innerText.replace('R$','').replace(',','.'))

  var dataLayer = window.dataLayer || [];
  dataLayer.push({
  'event': 'RPH.DynamicRemarketing',
    'google_tag_params':{
      'ecomm_prodid': prodid,
      'ecomm_pagetype' : 'cart_test',
      'ecomm_totalvalue' : totalvalue
    }
  });


</script>


<!-- Event snippet for Formulário de Aquisição conversion page -->
<script>
  document.addEventListener('submit', function(){
    gtag('event', 'ENVIOFORMULARIO', {
      'event_category': 'FALECON'
    });
  });
</script>


<!-- Global site tag (gtag.js) - Google Ads: 721463905 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-721463905"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-721463905');
</script>

<script>
document.addEventListener('submit', function(){
    //Event snippet for Enviar formulário de lead conversion page
    gtag('event', 'conversion', {'send_to': 'AW-721463905/lSIwCJ7-rOgBEOHUgtgC'});
});
</script>

<!-- falta criar a conversão do whatsapp -->
<script>
window.addEventListener('DOMContentLoaded', function() {
   var links = document.getElementsByTagName("a");
   for (var i = 0; i < links.length; i++){ 
      links[i].addEventListener('click', function(e){
         if(e && this.href.match('whatsapp.com')){
              //Event snippet for Contato via WhatsApp conversion page
              gtag('event', 'conversion', {'send_to': 'AW-721463905/lF5rCNrp2uoBEOHUgtgC'});
         } 
      });
   };
});
</script>

<a target="_blank" href="https://api.whatsapp.com/send?phone=%2B5521992121195" id="whatsapp-button" style="position: fixed; bottom: 20px; width: 57px; z-index: 999; left: 26px;"><img style="width:100%;" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0VERURFRDsiIGQ9Ik0wLDUxMmwzNS4zMS0xMjhDMTIuMzU5LDM0NC4yNzYsMCwzMDAuMTM4LDAsMjU0LjIzNEMwLDExNC43NTksMTE0Ljc1OSwwLDI1NS4xMTcsMCAgUzUxMiwxMTQuNzU5LDUxMiwyNTQuMjM0UzM5NS40NzYsNTEyLDI1NS4xMTcsNTEyYy00NC4xMzgsMC04Ni41MS0xNC4xMjQtMTI0LjQ2OS0zNS4zMUwwLDUxMnoiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzU1Q0Q2QzsiIGQ9Ik0xMzcuNzEsNDMwLjc4Nmw3Ljk0NSw0LjQxNGMzMi42NjIsMjAuMzAzLDcwLjYyMSwzMi42NjIsMTEwLjM0NSwzMi42NjIgIGMxMTUuNjQxLDAsMjExLjg2Mi05Ni4yMjEsMjExLjg2Mi0yMTMuNjI4UzM3MS42NDEsNDQuMTM4LDI1NS4xMTcsNDQuMTM4UzQ0LjEzOCwxMzcuNzEsNDQuMTM4LDI1NC4yMzQgIGMwLDQwLjYwNywxMS40NzYsODAuMzMxLDMyLjY2MiwxMTMuODc2bDUuMjk3LDcuOTQ1bC0yMC4zMDMsNzQuMTUyTDEzNy43MSw0MzAuNzg2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkVGRUZFOyIgZD0iTTE4Ny4xNDUsMTM1Ljk0NWwtMTYuNzcyLTAuODgzYy01LjI5NywwLTEwLjU5MywxLjc2Ni0xNC4xMjQsNS4yOTcgIGMtNy45NDUsNy4wNjItMjEuMTg2LDIwLjMwMy0yNC43MTcsMzcuOTU5Yy02LjE3OSwyNi40ODMsMy41MzEsNTguMjYyLDI2LjQ4Myw5MC4wNDFzNjcuMDksODIuOTc5LDE0NC43NzIsMTA1LjA0OCAgYzI0LjcxNyw3LjA2Miw0NC4xMzgsMi42NDgsNjAuMDI4LTcuMDYyYzEyLjM1OS03Ljk0NSwyMC4zMDMtMjAuMzAzLDIyLjk1Mi0zMy41NDVsMi42NDgtMTIuMzU5ICBjMC44ODMtMy41MzEtMC44ODMtNy45NDUtNC40MTQtOS43MWwtNTUuNjE0LTI1LjZjLTMuNTMxLTEuNzY2LTcuOTQ1LTAuODgzLTEwLjU5MywyLjY0OGwtMjIuMDY5LDI4LjI0OCAgYy0xLjc2NiwxLjc2Ni00LjQxNCwyLjY0OC03LjA2MiwxLjc2NmMtMTUuMDA3LTUuMjk3LTY1LjMyNC0yNi40ODMtOTIuNjktNzkuNDQ4Yy0wLjg4My0yLjY0OC0wLjg4My01LjI5NywwLjg4My03LjA2MiAgbDIxLjE4Ni0yMy44MzRjMS43NjYtMi42NDgsMi42NDgtNi4xNzksMS43NjYtOC44MjhsLTI1LjYtNTcuMzc5QzE5My4zMjQsMTM4LjU5MywxOTAuNjc2LDEzNS45NDUsMTg3LjE0NSwxMzUuOTQ1Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="></a>