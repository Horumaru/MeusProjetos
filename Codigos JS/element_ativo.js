document.addEventListener('submit', function(){
	console.log('Form submit')
    function elementAtivo() {
    	var cont = 0
       	var interval = setInterval(() => { 
        	var element = document.getElementsByClassName('et-pb-contact-message')[0].innerText
            var texto = "Obrigado por entrar em contato conosco"
          	if (element== texto) {
            	console.log(element);
              	clearInterval(interval)
              	//window.location.reload();
          	}
         	else{
           		cont ++
           		console.log(cont)
			   if (cont > 10){
				 console.log('break')
				 clearInterval(interval)
			   }
         	}
		}, 1000);
    }
    elementAtivo()
});
