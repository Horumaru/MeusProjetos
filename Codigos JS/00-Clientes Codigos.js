<script>
document.addEventListener('DOMContentLoaded', function (){
    var btns = document.querySelectorAll('#formeLids > button"');

    for (var i = 0; i < btns.length; i++) {
       btns[i].addEventListener('click', function(e){

        gtag('event', 'conversion', {'send_to': 'AW-759699421/WKhRCLb7raYBEN2voOoC'});
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




"Tag de Formulário Orçamento"
<!-- Event snippet for Formulário Orçamento conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-864834811/lNUcCLqw5a4BEPupsZwD'});
</script>

"Tag de Formulário Contato"
<!-- Event snippet for Formulário Contato conversion page -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-864834811/Zh0yCIfX5a4BEPupsZwD'});
</script>


<script>
window.dataLayer = window.dataLayer || []
dataLayer.push({
'event': 'ecommercePurchase',
   'transactionId': '1234',
   'transactionAffiliation': 'Acme Clothing',
   'transactionTotal': 38.26,
   'transactionTax': 1.29,
   'transactionShipping': 5,
   'transactionProducts': [{
       'sku': 'DD44',
       'name': 'T-Shirt',
       'category': 'Apparel',
       'price': 11.99,
       'quantity': 1
   },{
       'sku': 'AA1243544',
       'name': 'Socks',
       'category': 'Apparel',
       'price': 9.99,
       'quantity': 2
   }]
});
</script>

gtag('event', 'purchase', {
    "event_category": "any-name", //good practice
    "transaction_id": "24.031608523954162",
    "affiliation": "Google online store",
    "value": 23.07,
    "currency": "EUR",
    "tax": 1.24,
    "shipping": 0,
    "items": [
      {
        "id": "P12345",
        "name": "Android Warhol T-Shirt",
        "category": "Apparel/T-Shirts",
        "quantity": 2,
        "price": 2.0
      },
      {
        "id": "P67890",
        "name": "Flame challenge TShirt",
        "category": "Apparel/T-Shirts",
        "quantity": 1,
        "price": 3.0
      }
    ]
  });
  