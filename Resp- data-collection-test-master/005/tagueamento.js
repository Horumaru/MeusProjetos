var valores = document.querySelectorAll('#valores span')
for(var i = 0; i< valores.length ;i++){
    document.getElementsByTagName('a')[i].addEventListener('click',function(e){
        var num  = this.innerText
        console.log('clicou no botão : '+num+ '\nO texto acima é : ' + valores[num-1].innerText)
    })
}