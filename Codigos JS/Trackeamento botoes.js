window.addEventListener("click", function(e) {
    var botaotexto = e.srcElement.innerText;
        if(botaotexto == "Add to basket") {
            gtag('event', 'click', {
            'event_category': "Adicionar_ao_carrinho",
            'event_label': 'Add_to_Basket',
     
            });
        }else if (botaotexto == "Place order") {
            gtag('event', 'click', {
            'event_category': "Finalizando_Compra",
            'event_label': 'Place_Order',
        })};
        
});



<script>

document.addEventListener('DOMContentLoaded', function () {
var value = Number(document.querySelector('#post-6 > div > div > div > ul > li.woocommerce-order-overview__total.total > strong > span').innerText.replace('€', "").replace(",", ""))
var checkout = window.location.pathname.split("/")
var orderID = window.location.href.split("/")[7];
for (var i = 0; i < checkout.length; i++) {
if (checkout[i] == "order-received") {
gtag('event', 'order-received1', {
'event_category': 'adicionar',
'event_label': orderID,
'value': value
});
}
}
})
</script>


karina Code
<script>
document.addEventListener("DOMContentLoaded", function (){
var botaoenviar = getElementsByClassName('btn btn-outline-success');
if(botaoenviar){
botaoenviar.addEventListener("click", function(){
gtag('event', "clique", {
'event_category' : "formulario"
});
})
}
})
</script>



<!-- Global site tag (gtag.js) - Google Ads: 879356013 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-879356013"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-879356013');
</script>

<!-- Event snippet for Clik no WhatsApp conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-879356013/c_0iCKLruaYBEO3Qp6MD',
      'event_callback': callback
  });
  return false;
}
</script>


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_MEASUREMENT_ID');
</script>

