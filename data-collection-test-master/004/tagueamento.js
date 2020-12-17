//Igual o 1?

//Selecionei todos os botçoes e criei um array vazio
var botoes = document.querySelectorAll('#botoes button')
var botoesArray = new Array();

for (var i = 0; i < botoes.length;i++){
    //adiciona os textos dos botões no array
    botoesArray.push(botoes[i].innerText);

    //imprime o Innertext do botão clicado
    botoes[i].addEventListener('click',function(e){
        console.log(this.innerText)
    })
}
console.log(botoesArray);