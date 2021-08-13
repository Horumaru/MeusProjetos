document.addEventListener('submit', function(){
    console.log('Form submit')
    function elementAtivo() {
       var interval = setInterval(() => {
         var cont = 0
          var element = document.getElementsByClassName('et-pb-contact-message')[0].innerText == "Obrigado por entrar em contato conosco"
          if (element) {
              console.log(element);
              clearInterval(interval)
              //window.location.reload();
          }
         else{
            cont += 1
           console.log(cont)
           if (cont > 10){
             console.log('break')
             break();
           }
         }
        }, 1000);
    }
});
