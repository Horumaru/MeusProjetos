var d = new Date()
var anoAtual = d.getFullYear()
var verificar = document.querySelector('#verificar')
var txtIdade = document.querySelector('#idade')

function img(idade, sex) {
    console.log(`Imagem idade:${idade} e sex ${sex}`)
    if (sex == 'Homem') {
        if (idade < 15) {
            return 'Imagens\\masc_(1).jpg'
        }
        if (idade < 25) {
            return 'Imagens\\masc_(2).jpg'
        }
        if (idade < 55) {
            return 'Imagens\\masc_(3).jpg'
        }
        if (idade < 130) {
            return 'Imagens\\masc_(4).jpg'
        }
        if(idade > 130){
            return 'Imagens\\morto.png'
        }
    }
    if (sex == "Mulher") {
        if (idade < 15) {
            return 'Imagens\\fem_(1).jpg'
        }
        if (idade < 25) {
            return 'Imagens\\fem_(2).jpg'
        }
        if (idade < 55) {
            return 'Imagens\\fem_(3).jpg'
        }
        if (idade < 130) {
            return 'Imagens\\fem_(4).jpg'
        }
        if(idade > 130){
            return 'Imagens\\morto.png'
        }
    }
}

verificar.addEventListener('click', function(){
    var anoNasc = document.querySelector('#ano').value 
    var idade = anoAtual - anoNasc
    
    var sexoSelec = document.getElementsByName('sexo')
    for(i=0; i< sexoSelec.length; i++){
        if(sexoSelec[i].checked){
            var sex = sexoSelec[i].labels[0].innerHTML
            sex = sex.toLowerCase()
            if(sex == 'masculino'){
                sexoSelec = "Homem"
            }
            else if(sex == 'feminino'){
                sexoSelec = "Mulher"
            }
            else{sexoSelec= 'Problematico'}
        }
    }   
    txtIdade.innerHTML = `A detectamos ${sexoSelec} de ${idade} anos.`
    var foto = img(idade, sexoSelec)
    var imagem = document.querySelector('#img')
    console.log(imagem)
    imagem.src= foto
    imagem.style.borderRadius = '50%'
    imagem.style.width ='400px'
    imagem.style.height ='400px'
    //pode isar o appendChild para adicionar a imagem em alguma div via js
    
})

