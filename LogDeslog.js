/*
Reconhecer o botão
Loguin ID  > IN_BTN$0
Deslog ID  > OUT_BTN$0


Adicionar cronometro /  reconhecer relógio
Clicar no botão
*/
//gera um segundo aleatório
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
var aSeg = parseInt(getRandomArbitrary(00,59));
console.log(aSeg)

//checa se é o segundo coreto
var interval = setInterval(()=>{
        var dateT = new Date();
        var mm = dateT.getMinutes();
        var ss = dateT.getSeconds();
        
	console.log(mm + ' : '+ss)
        if (mm == '00' && ss == aSeg){
                console.log('Deu');
                clearInterval(interval)
	}
},1000)

//LoguIn
function (loguin){
   var logss = document.getElementsByClassName('PSPUSHBUTTON')
   for (var i=0; i < logss.length; i++){
      console.log(i);
      if(logss[i].id == 'IN_BTN$0'){
         console.log (logss[i].id + '  - cliquei nesse')
         document.getElementsByClassName('PSPUSHBUTTON')[i].click();
      }
   }
}loguin()

//LogOut
function (logout){
   var logss = document.getElementsByClassName('PSPUSHBUTTON')
   for (var i=0; i < logss.length; i++){
      console.log(i);
      if(logss[i].id == 'OUT_BTN$0'){
         console.log (logss[i].id + 'cliquei nesse')
         //document.getElementsByClassName('PSPUSHBUTTON')[i].click();
      }
   }
}logout()


/*
Adicionar cronometro /  reconhecer relógio
*/

/*
clicar no botão
*/
document.getElementsByClassName('PSPUSHBUTTON')[5].click();
