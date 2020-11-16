//Calendar
//Delay de 2 Seg para a página carregar.
var delay= 500;
setTimeout(function(){
    console.log('Ola mundo!');
    nomesClick();
},delay);

function nomesClick(){
    var listaDeNomes = document.getElementsByClassName('MocG8c LMgvRb KKjvXb')
    for(i=0; i< listaDeNomes.length ; i++){
        if(listaDeNomes[i].innerText == "Renan Ribeiro"){
            console.log('Cliquei no nome')
            listaDeNomes[i].click()
        }
    }
    console.log('Click feio')
    setTimeout(clickFeio, delay)
}
function clickFeio(){
    document.getElementsByClassName('Z7IIl jT5e9')[3].click();
    setTimeout(mudaCor, delay)  
}
/*
function webaoClick(){
    var WebaoName = document.getElementsByClassName('Z7IIl jT5e9')
    for(i=0; i< WebaoName.length ; i++){
        if(WebaoName[i].innerText == "Website Optimization Support"){
            console.log('Cliquei no webão')
            WebaoName[i].click()
        }
    }
    setTimeout(mudaCor, delay)
}
*/

//Muda a cor evento e da um delayzinho pra carregar as outras coisas
function mudaCor(){
    document.getElementsByClassName('U26fgb c7fp5b FS4hgd FpmPAb')[0].click()
    setTimeout(grafite, delay)
    function grafite(){
        var listaDeCores = document.getElementsByClassName('WdtDhe')
        for(i=0; i< listaDeCores.length ; i++){
            if(listaDeCores[i].dataset.text == "Graphite"){
                listaDeCores[i].click()
            }
        }
    setTimeout(salvar, delay)
    }
}

//clica no salvar e da um delayzinho
function salvar(){
    var salvar = document.getElementsByClassName('l4V7wb Fxmcue')
    for (i=0; i < salvar.length ; i++){
        if (salvar[i].innerText == "Save"){
            salvar[i].click()
        }
    }
    setTimeout(enviar, delay)
}

//clica no enviar e da um delayzinho
function enviar(){
    var botao = document.getElementsByClassName('NPEfkd RveJvd snByac')
    for(i=0; i< botao.length ; i++){
        if(botao[i].innerText == "Send"){
            botao[i].click()
        }
    }
    setTimeout(invite, delay)
}

//Invite external Guests
function invite(){
    var invites = document.getElementsByClassName('NPEfkd RveJvd snByac')
    for(i=0; i< invites.length ; i++){
        if(invites[i].innerText == 'Invite external guests'){
            console.log('invites click')
            invites[i].click()
        }
    }
}

//Delay => setTimeout('função', 1000)
//O arqueivo JS que faz a parada rolar.
/*
podemos pegar o click diretamente pelo selector ou ID do botão.
Exemplo: 
    document.querySelectorAll("botao").addEventListener('click',function(){

    })
*/
var nomeDaCorEscolhida = 'Grafite';

console.log('a extenção está funcionando')
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

function nomesClick(){
    //document.getElementsByClassName('e2CuFe eU809d')[3].click();
    //console.log('Cliquei no seu nome');
    setTimeout(clickFeio, 1000)
}
function clickFeio(){
    //document.getElementsByClassName('Z7IIl jT5e9')[3].click();
    //console.log('Cliquei no webão');
    setTimeout(mudaCor, 1000)  
}
//Muda a cor evento e da um delayzinho pra carregar as outras coisas
function mudaCor(){
    document.getElementsByClassName('U26fgb c7fp5b FS4hgd FpmPAb')[0].click();
    console.log('Cliquei nas cores');
    setTimeout(grafite, 1000)
    function grafite(){
        var listaDeCores = document.getElementsByClassName('WdtDhe')
        for(i=0; i< listaDeCores.length ; i++){
            if(listaDeCores[i].dataset.text == nomeDaCorEscolhida){
                listaDeCores[i].click()
            }
        }
    console.log('Selecionei a cor ' + nomeDaCorEscolhida)
    setTimeout(salvar, 1000)
    }
}
//clica no salvar e da um delayzinho
function salvar(){
    var salvar = document.getElementsByClassName('l4V7wb Fxmcue')
    for (i=0; i < salvar.length ; i++){
    if (salvar[i].innerText == "Salvar" || salvar[i].innerText == "Save"){
        salvar[i].click()
    }
}
    console.log('Salvei')
    setTimeout(enviar, 1000)
}
function enviar(){
   // document.getElementsByClassName('NPEfkd RveJvd snByac')[14].click();
    console.log('Enviei')
    setTimeout(invite, 1000)
}
function invite(){
    //document.getElementsByClassName('NPEfkd RveJvd snByac')[13].click();
    console.log('Confirmei convite para emails externos')
    console.log('fim do programa')
}
