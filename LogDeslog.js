/*
Reconhecer o botão
Loguin ID  > IN_BTN$0
Deslog ID  > OUT_BTN$0


Adicionar cronometro /  reconhecer relógio
Clicar no botão
*/

/*
reconhecer o botão

// Ve se Bloco do save carregou e adiciona o botão do auto save lá.
var interval = setInterval(()=>{
    headerzin = document.querySelector('.UXzdrb');
    if(headerzin){
        console.log(headerzin)
        clearInterval(interval)
        var button = document.createElement('button')
        button.innerHTML = "Auto Save"
        button.classList.add('SalvaAiButton')
        headerzin.appendChild(button)
        button.addEventListener('click', ()=> {
            nomesClick();
            console.log('Eu estou vivo!');
        })
    }
},1000)
*/
// Ve se o pronometro está no tempo desejado
var interval = setInterval(()=>{
	var hh = document.getElementById('Hours').innerText;
	var mm = document.getElementById('Minutes').innerText;
	var ss = document.getElementById('Seconds').innerText;
	console.log(hh+' : '+ mm +' : '+ ss);
    if(mm == '59' && ss == '00'){
                console.log('Agora foi -> '+hh+' : '+ mm +' : '+ ss);
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
