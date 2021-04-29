//Selecionei todos os botões
var botoes = document.querySelectorAll('#botoes button')
for (var i = 0; i < botoes.length;i++){
    //Cria um array vazio e adiciona os textos dos botões no array
    var botoesArray = new Array();
    botoesArray.push(botoes[i].innerText);

    //imprime o Innertext do botão clicado
    botoes[i].addEventListener('click',function(e){
        console.log(this.innerText )        
    })
}
console.log(botoesArray);