var res = document.getElementById('resultado')
var botao = document.getElementById('botao')
function JaSabia() {
    vc = ['Fabrício', 'João', 'Nery', 'Willian', 'Renan', 'Victor', 'Abdiel']
    é = "Segundo estudos do "
    muito = ["INS","IPCC","MIT","Banco Mundial","CDC","IBGE","Harvard Medical School","FMI","UNICEF","Greenpeace"];
    g = muito[Math.floor(Math.random()*muito.length)]+' '
    a = vc[Math.floor(Math.random()*vc.length)]
    y = ` é ${Math.floor((Math.random(0, 100) * 101))}% Gαy `
    return  é+g+a+y
}
botao.addEventListener('click',function(){
    console.log('cliquei')
    res.innerText = JaSabia()
})
