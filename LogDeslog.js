/*
Reconhecer o botão
Loguin ID  > IN_BTN$0
Deslog ID  > OUT_BTN$0


Adicionar cronometro /  reconhecer relógio
Clicar no botão
*/

/*
reconhecer o botão
*/

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
