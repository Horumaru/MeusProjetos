<script>
window.addEventListener('DOMContentLoaded', function() {
                document.querySelector("#contacts > div.section-lg > div > div > div > form").addEventListener('submit', function () {

                    var selectorEmail = document.querySelector("#contact-email"),
                        validacaoEmail = (function () {
                            if (selectorEmail.value.match(/^\w+\@\w+\.\w+$/)) {
                                return true
                            } else { return false }
                        })(),
                        selectorNome = document.querySelector("#contact-name"),
                        validacaoNome = selectorNome.value.length > 0,
                        selectorMensagem = document.querySelector("#contact-message"),
                        validacaoMensagem = selectorMensagem.value.length > 0;

                    if (validacaoEmail && validacaoNome && validacaoMensagem) {
                        gtag()
                    }

                });
});
</script>

window.addEventListener('click', function(){
if(selectorEmail.value.match(/^\w+\@\w+\.\w+$/)){
console.log(true);
} else {console.log(false)}
})

<script>
window.addEventListener('submit',function(){
    var selectorEmail = document.querySelector("#contact-email"),
        selectorNome = document.querySelector("#contact-name"),
        selectorMensagem = document.querySelector("#contact-message"),
        validacaoNome = selectorNome.value.length > 0,
        validacaoEmail =selectorEmail.value.match(/^\w+\@\w+\.\w+$/),
        validacaoMensagem = selectorMensagem.value.length > 0;

        if(validacaoNome && validacaoEmail && validacaoMensagem){
            gtag('event', 'envio-orcamento', {
            	'event_category': 'clique'
            });
        }
                                        
});
</script>

<script>
var radios = document.querySelectorAll('#form-interesse input[type="radio"]');

radiosArray = [];

for(var x = 0; x < radios.length; x++){	
	if(radios[x].checked === true){
		radiosArray.push(radios[x].value)
	}
}

return radiosArray.toString();

</script>


<script>
window.addEventListener('DOMContentLoaded', function(){
var wpcf7Elm = document.querySelector( '.wpcf7' );
wpcf7Elm.addEventListener( 'wpcf7submit', function( event ) {
  gtag('event', 'enviado', {
    'event_category': 'formulario'
});
}, false );})
</script>


<script>
window.addEventListener('DOMContentLoaded', function(){

    
})
</script>

// evento form7 via gtm - gtm4wp.contactForm7Submitted

<script>
document.addEventListener( 'gtm4wp.contactForm7Submitted', function( event ) {
    gtag('event', 'enviado', {
        'event_category': 'formulário'
    });
}, false );
</script>

<script>
onclick="gtag('event','clique',{'event_category': 'facebook'});"
onclick="gtag('event','clique',{'event_category': 'instagram'});"
onclick="gtag('event','clique',{'event_category': 'whatsapp'});"


</script>


// Validar click no botao
<script>
document.addEventListener('DOMContentLoaded', function (){
    var btns = document.querySelectorAll('[href="https://api.whatsapp.com/send?1=pt_BR&phone=5541991113131"]');

    for (var i = 0; i < btns.length; i++) {
       btns[i].addEventListener('click', function(e){
        gtag('event', 'conversion', {'send_to': 'AW-759699421/WKhRCLb7raYBEN2voOoC'});
       });
        
    }
});
</script>



gtag('config', 'UA-88768602-1' , { 'send_page_view': false});



gtag('event', 'page_view', {
    listing_id: 'NYBRKLN123A',
    listing_pagetype: 'offerdetail',
    listing_totalvalue: 1000000
  });
  


  gtag('event', 'compra', {
    'event_category': 'Finalizada'
  });


<script>
  document.addEventListener( 'wpcf7mailsent', function( event ) {
    gtag('event', 'conversion', {'send_to': 'AW-962301339/af4DCP-u1LABEJub7soD'});
  }, false );    
</script>




<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-148347588-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-148347588-1');
  gtag('config', 'AW-712959192');
</script>



<script>
gtag('event', 'Contato Enviado', {
    'event_category': 'Contato'
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



<script>
document.addEventListener('DOMContentLoaded', function (){
  var btns = document.querySelectorAll('[href="#LB-S9iz7UJ7Vext4fz5bCYrQR"]');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e){
          gtag('event', 'Enviado', {
          'event_category': 'Contato'
          });
    }); 
  }
});
</script>



<script>
document.addEventListener('DOMContentLoaded', function (){
  var texto = window.location.href;
  var RegExp = "https://escolaseac.com/finalizacao-compra/pedido-recebido/";

  if (texto.includes(RegExp)) {
    gtag('event', 'conversion', {
      'send_to': 'AW-711356029/RhqPCMzj5qoBEP3cmdMC',
      'transaction_id': ''
    });
  }
});
</script>


<script>
gtag('event', 'Realizada', {
  'event_category': 'Compra'
});
</script>


shopify
{% if first_time_accessed %}

{% endif %}