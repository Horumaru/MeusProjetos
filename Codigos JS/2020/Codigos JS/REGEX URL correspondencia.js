<!-- Busca correspondencia Regex na URL -->
<script>
  document.addEventListener('DOMContentLoaded', function (){
    var texto = window.location.href;
    var RegExp = "https://escolaseac.com/finalizacao-compra/pedido-recebido/";
    //para pegar inicio, "meio(.*)" e fim podemos usar a opção abaixo
    //var RegExp = "\/checkout" && "#finalizacao";


    if (texto.includes(RegExp)) {
      console.log('isso é que é bonito!');
    }
});
</script>

<script>
  document.addEventListener('DOMContentLoaded', function(){
      var contatos = ["/contactos/", "/loja-lisboa/", "/loja-carcavelos/"]
      var pathhName = document.location.pathname
      if(contatos.includes(pathhName)){
          console.log('achou o ' + pathhName)
      }
  });
</script>