
/*
<-- Pessoal, anteontem eu precisei fazer aquela típica conversão de clique no botão do whatsapp e telefone, mas via Analytics mesmo, aí eu fiz uma versão de terceiro mundo (gambiarra) daquele acionador de cliques em links do tag manager. Talvez seja útil pra outras calls 
   

O código mais explicadinho, caso precise alterar alguma coisa
https://screenshot.googleplex.com/HaOLdyy5ExP   
-->
*/

<script>
window.addEventListener('DOMContentLoaded', function() {
   var links = document.getElementsByTagName("a");
   for (var i = 0; i < links.length; i++){
links[i].addEventListener('click', function(e){
   if(e && this.href.match('api.whatsapp.com/send')){
gtag('event', 'clique', {'event_category': 'whatsapp'});
   } else if(e && this.href.match('tel:')) {
gtag('event', 'clique', {'event_category': 'telefone'});
   }
});
   };
});
</script>