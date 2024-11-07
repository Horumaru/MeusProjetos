var num = document.getElementById('num')
var add = document.getElementById('add')
var list = document.getElementById('list')
var fim = document.getElementById('fim')
var res = document.getElementById('resultado')
var sum = 0
var arr = []

function validacaoNum(num) {
    //valida se o numero já esta na lista e adiciona caso não esteja
    if (arr.includes(num)) {
        res.innerHTML = 'Esse numero já existe na lista '
        return false
    }
    else {
        sum = sum+num
        arr.push(num)
        console.log ('Valor adicionado ', num)
        arr.sort()
        arr = arr.sort(function(a, b) {
          return a - b;
        });
        return arr
    }

}
function addList(num) {
    // adiciona os numeros do array na lista
    var newNumber = document.createElement('option')
    newNumber.innerHTML= `Valor ${num} adicionado`
    list.appendChild(newNumber)
}


add.addEventListener('click', function () {
    res.innerHTML = ''
    //if (num.value == ''|| num.value < 1 || num.value > 100) {
    if (num.value < 1 || num.value > 100) {
        console.log('Digite um numero válido Para poder adicionar')
        res.innerHTML = 'Digite um numero válido Para poder adicionar'
    }
    else if(validacaoNum(Number(num.value))){
        addList(num.value)
    }
    num.value = ''
    num.focus()
})

function resultado() {
    if(arr.length == 0){
        window.alert('Cadastre pelo menos um numero antes de finalizar')
    }else{
        console.log(arr)
    var media = sum/arr.length
    res.innerHTML = `
    Ao todo temos ${arr.length} numeros cadastrados <br>
    O maior numero adicionado foi ${arr[arr.length-1]}<br>
    O menor numero adicionado foi ${arr[0]}<br>
    Somando todos os valores temos ${sum}<br>
    A media dos valores é ${media}<br>`
    }   
}