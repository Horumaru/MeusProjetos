//criei um arrai vazio para popular com o valor dos botões
var array = new Array();
var botoes = document.querySelectorAll('#botoes > button')
for (var i = 0; i < botoes.length; i++){
    botoes[i].addEventListener('click', function(e){
        //Splita o texto do botão clicado e o imprime no console
        var splitThis = this.innerText.split('-')
        var splitThis = splitThis[0]
        console.log('Primeira perte:\n'+ splitThis)  

        // validação se o botão foi clicado e adiciono o texto no array criado
        if (!array.includes(splitThis)){
            array.push(splitThis)
            
        } 
        //caso o array tenha a mesma quantidade de elementos que os botões informa isso ao usuario e imprime a ordem clicada em forma de texto
        if(array.length == botoes.length){
            console.log('Os botões já foram todos clicados na ordem abaixo')
            console.log(array.toString())
        }
        
    })
}