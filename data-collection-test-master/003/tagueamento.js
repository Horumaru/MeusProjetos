//criei um array vazio para popular com o valor dos botões
var array = new Array();
var botoes = document.querySelectorAll('#botoes > button')
for (var i = 0; i < botoes.length; i++){
    botoes[i].addEventListener('click', function(e){
        //Splita o texto do botão clicado e o imprime no console
        var splitThis = this.innerText.split('-')
        var splitThis = splitThis[splitThis.length-1]
        console.log('Ultima parte: '+ splitThis)  
        
        //validação se o botão foi clicado e adiciono o texto no array criado 
        if (!array.includes(splitThis)){
            array.push(splitThis)
            
        } 
        //caso o array tenha a mesma quantidade de elementos que os botões informa isso ao usuario e imprime a ordem clicada
        else if(array.length == botoes.length){
            console.log('Os botões já foram todos clicados na ordem abaixo')
            console.log(array.toString())
        }

    })
}