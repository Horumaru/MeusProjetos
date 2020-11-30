Copie a tag abaixo e cole-a entre as tags <head> </head> em todas as páginasdo seu site


<!-- Global site tag (gtag.js) - Google Ads: 878372728 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-878372728"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-878372728');
</script>

<!-- Botão whats RD pelo front end-->
<script>
window.addEventListener('submit',function(){
    var selectorEmail = document.querySelector("#rd-email_field-PbLxFCEt8Dq-0UYPg8TQxA"),
        selectorNome = document.querySelector("#rd-text_field-z3WFC_kCyoDMfljp7CbzXw"),
        selectorTel = document.querySelector("#rd-phone_field-6pfm-Ca3n4RosWKM1aJgpw"),

        validacaoNome = selectorNome.value.length > 0,
        validacaoEmail =selectorEmail.value.match(/^\w+\@\w+\.\w+$/),
        validacaoTel = selectorTel.value.length > 17;

        if(validacaoNome && validacaoEmail && validacaoTel){
            gtag('event', 'conversion', {'send_to': 'AW-878372728/fMKlCKje9eQBEPjO66ID'});
        }
});
</script>