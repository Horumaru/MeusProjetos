
/*
<-- Pessoal, anteontem eu precisei fazer aquela típica conversão de clique no botão do whatsapp e telefone, mas via Analytics mesmo, aí eu fiz uma versão de terceiro mundo (gambiarra) daquele acionador de cliques em links do tag manager. Talvez seja útil pra outras calls 
   

O código mais explicadinho, caso precise alterar alguma coisa
https://screenshot.googleplex.com/HaOLdyy5ExP   
-->
*/

// click no whats, click no fone
<script>
window.addEventListener('DOMContentLoaded', function() {
   var links = document.getElementsByTagName("a");
   for (var i = 0; i < links.length; i++){ 
      links[i].addEventListener('click', function(e){   
         
         //ou if(e && this.href.includes ('whatsapp.com')){
         if(e && this.href.match('api.whatsapp.com/send')){
            //gtag('event', 'clique', {'event_category': 'whatsapp'});
            console.log('Click no whats');
         } 
         else if(e && this.href.match('tel:')) {
            //gtag('event', 'clique', {'event_category': 'telefone'});
            console.log('Click no no fone');
         }
      });
   };
});
</script>

// ----------------------- OU 
<script>
document.addEventListener('click', function(e){
   var searchWpp = e.path.filter(function(i){
      if(i.getAttribute && i.getAttribute('class') != null){
      return i.getAttribute('class').search('whatsapp') != -1;
      }
      else return false;
   });

   if(searchWpp.length > 0){
      console.log('achou');
      /*window.dataLayer = window.dataLayer || [];
      dataLayer.push({
      'event':'whatsapp'
      });*/
      
   }
});
</script>
/*
Para pegar partes do texto dentro da string podemos usao o includes. 
   if(e && this.href.includes ('whatsapp.com')){

Para pegar o valor exado podemos usar o match
   if(e && this.href.match('api.whatsapp.com/send')){

Podemos tamber usar regerx com /texto/
      if(e && this.href.match(/whatsapp.com/)){

*/




window.addEventListener('DOMContentLoaded', function() {

   if (document.URL = 'https://unimedcuritibapj.com.br/sucesso/', document.referrer = "https://unimedcuritibapj.com.br/")
   {
   <!-- Event snippet for Form conversion page -->
   gtag('event', 'conversion', {'send_to': 'AW-768691096/gREiCL6ak6EBEJiXxe4C'});
   }
});

// click no motão de email 
window.addEventListener('DOMContentLoaded', function() {
   var links = document.getElementsByTagName("a");
   for (var i = 0; i < links.length; i++){ 
      links[i].addEventListener('click', function(e){   
         if(e && this.href.match('mailto:contato@gestaopalas.com.br')){
            gtag('event', 'conversion', {'send_to': 'AW-667074769/wG6PCL-Ex8UBENGBi74C'});
         }
      });
   };
});


//click no botão wa.me
<script>
window.addEventListener('DOMContentLoaded', function() {
   var links = document.getElementsByTagName("a");
   for (var i = 0; i < links.length; i++){ 
      links[i].addEventListener('click', function(e){            
         if(e && this.href.match('wa.me')){
              console.log('Click no whats');
         } 
      });
   };
});
</script>

<!-- click no botão whatsapp OU wa.me -->
<script>
window.addEventListener('DOMContentLoaded', function() {
   var links = document.getElementsByTagName("a");
   for (var i = 0; i < links.length; i++){ 
      links[i].addEventListener('click', function(e){            
         if(e && this.href.match('whatsapp.com') ||e && this.href.match('wa.me')){
            console.log('Whats OU Wa.me')
         } 
      });
   };
});
</script>



document.addEventListener( "click", function(e) {
   console.log(e);
});


//click na classe whats
<script>
document.addEventListener('click', function(e){
   var searchWpp = e.path.filter(function(i){
      if(i.getAttribute && i.getAttribute('class') != null){
      return i.getAttribute('class').search('qlwapp-toggle') != -1;
      }
      else return false;
   });

   if(searchWpp.length > 0){
      console.log('Click class whatsapp')
   }
});
</script>


// WhatsAppME class
<script>
document.addEventListener('click', function(e){
   var searchWpp = e.path.filter(function(i){
      if(i.getAttribute && i.getAttribute('class') != null){
      return i.getAttribute('class').search('whatsappme__button') != -1;
      }
      else return false;
   });

   if(searchWpp.length > 0){
       console.log('click no whats')    
   }
});
</script>

<!-- join chat - datalayer events-->
<script>
var dataLEvent = "JoinChat"
document.addEventListener('click',function(){
    var last = dataLayer.length - 1
    if (dataLayer[last].event == dataLEvent){
        console.log('Acionou o evento ' + dataLEvent);
        window.dataLayer.push({
          'event' : 'next_event'
       });
    }
});
</script>


//RD Whats app Novo botão chatao
<script>
window.addEventListener('submit',function(){
    var selectorEmail = document.querySelector("#rd-email_field-G-rrH6pkvZYtsJn2btR0gQ"),
        selectorNome = document.querySelector("#rd-text_field-kewFdCnIlvzURISKRxFKBQ"),
        selectorTel = document.querySelector("#rd-phone_field-A9X9QU6if2kGCqLomBGLbQ"),

        validacaoNome = selectorNome.value.length > 0,
        validacaoEmail =selectorEmail.value.match(/^\w+\@\w+\.\w+$/),
        validacaoTel = selectorTel.value.length > 17;

        if(validacaoNome && validacaoEmail && validacaoTel){
            console.log('click no Whats')
        }
                                        
});
</script>


