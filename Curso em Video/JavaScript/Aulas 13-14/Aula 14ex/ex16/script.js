/*
Exercicio de Contar, fazer inicio fim e passo
e printar o resultado na tela separado por seta

passo minimo 1 - mostrar alerta em caso de pasos zero
Se nao tiver inicio ou fim aletar na tela

*/
var msg = document.createElement('div')
msg.setAttribute('id', 'msg')
document.querySelector('div#contar').appendChild(msg)

var res = document.createElement('div')
res.setAttribute('id', 'res')
document.querySelector('div#contar').appendChild(res)



function contar(ini=0, fim=10, pas=1){
    res.innerHTML = ''
    i = ini
    while(i <= fim){
        console.log(i)
        res.innerHTML += '  👉 '+i
        i+= pas
    }
    res.innerHTML += (' 🏁')
}
function contarNegativo(ini=10, fim=0, pas=1){
    res.innerHTML = ''
    i = ini
    while(i >= fim){
        console.log(i)
        res.innerHTML += '  👉 '+i
        i-= pas
    }
    res.innerHTML += (' 🏁')
}

document.querySelector('#contar').addEventListener('click', function() {
    var ini = Number(document.querySelector('#ini').value)
    var fim = Number(document.querySelector('#fim').value)
    var pas = Number(document.querySelector('#pas').value)
    msg.innerHTML = ''
    
    if(ini == fim){
        msg.innerHTML = 'Inicio e Fim iguais, vou contar até dez no passo 1 pra vc largar mao de ser tonto' 
        contar()
    }
    else if (ini > fim) {
        if (pas == 0) {
            msg.innerHTML = 'O passo não pode ser igual ou menor que zero, contando com o passo 1, Contando De forma regressiva'
            pas = 1
            contarNegativo(ini, fim, pas)
        } 
        else if(pas < 0 ){
            pas = Math.abs(pas)
            msg.innerHTML = 'Contando De forma regressiva'
            contarNegativo(ini, fim, pas)

        }
        else{
            contarNegativo(ini,fim,pas)
        }
    }
    else if (pas == 0 || pas < 0) {
        msg.innerHTML = 'O passo não pode ser igual ou menor que zero, contando com o passo 1'
        contar(ini, fim)
    }
    else{
        contar(ini, fim, pas)
    }
})