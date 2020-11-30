<!--validador de form meu--> 
<script>
  document.addEventListener('submit', function(){
    var nome = document.getElementsByClassName('form-control')[0].value
    var mail = document.getElementsByClassName('form-control')[1].value
    var fone = document.getElementsByClassName('form-control')[2].value
    var mesg = document.getElementsByClassName('form-control')[3].value

    validnome = nome.length > 1
    validmail = (function(){
        if (mail.match(/^\w+\@\w+\.\w+$/)){
            return true;
        } else {return false}
    })()
    validfone  = fone.length > 7
    validmesg = mesg.length > 0
    if (validnome && validmail && validfone && validmesg){
        console.log('tudo pronto')
    } else {console.log('falta algo')}
  });
</script>



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
onclick="gtag('event','botao',{'event_category': 'click', 'event_label' : 'whatsapp'});"



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




<script>
gtag('event', 'Contato Enviado', {
    'event_category': 'Contato'
});
</script>


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


//Busca correspondencia Regex na URL
<script>
document.addEventListener('DOMContentLoaded', function (){
  var texto = window.location.href;
  var RegExp = "https://escolaseac.com/finalizacao-compra/pedido-recebido/";

  if (texto.includes(RegExp)) {
    console.log('isso é que é bonito!');
  }
});
</script>




shopify
{% if first_time_accessed %}

{% endif %}