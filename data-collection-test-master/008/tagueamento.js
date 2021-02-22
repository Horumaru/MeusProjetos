//Configura um intervalo de checagem atualizado a cada 1s
var interval = setInterval(()=>{
    textoBotão = document.getElementById('mensagem').innerText;
    
    //Verifica se o texto é diferente de ''; e para a checagem.
    if(textoBotão != ""){
        console.log(textoBotão)
        clearInterval(interval)
    }
},1000)