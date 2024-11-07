/*
Fazer uma tabuada e mostrar dentro de uma div, deixar apto a selecionar os elementos da tabuada
*/

var tabBtn = document.querySelector('#tabBtn')
var tabList = document.querySelector('#tabList')

function resText(res){
    var opc = document.createElement('option')
    tabList.appendChild(opc)
    opc.innerHTML = res
}

function gerarTabuada(num) {
   
    resText(`Gerando Tabuada do ${num}`)
    // var n = 1
    // while (n <= 10) {
    //     r  = n*num
    //     res = `${n} x ${num} = ${r} `
    //     resText(res) 
    //     n++
    // }
    for(var n= 1; n <= 10 ; n++){
        r  = n*num
        res = `${n} x ${num} = ${r} `
        resText(res) 
    }
}

function limpaTab(tabela){
    tabela.replaceChildren()
}
tabBtn.addEventListener('click',function(){
    var num = document.querySelector('#num').value
    if(num == ''){
        limpaTab(tabList)
        resText('Digite um numero válido')
    }
    else{
        limpaTab(tabList)
        gerarTabuada(num)
    }
    
})