d = new Date()
hora = d.getHours()
m = d.getMinutes()
s = d.setSeconds()


var divHora = document.querySelector('div#hora')
var img = document.getElementById('img')
var divTxt = document.querySelector('div#txt')
divHora.innerHTML = `Agora são ${hora}:${m}`


if(hora < 12){
    // manha
    document.body.style.background = '#e2cd9f'
     img.src = 'https://www.novotempo.com/wp-content/uploads/2020/04/Amanhecer01.jpg'
     divTxt.innerHTML = 'Tenha um bom dia'
     
} else if(hora < 18){
    // tarde
    document.body.style.background = '#b9846f'
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Atardecer_en_playa_Esterillos%2C_Costa_Rica_2.jpg/640px-Atardecer_en_playa_Esterillos%2C_Costa_Rica_2.jpg'
    divTxt.innerHTML = 'Tenha uma boa tarde'
} else if(hora < 24){
    //noite
    document.body.style.background = '#515154'
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Noite_de_lua_cheia_%286975702395%29.jpg/640px-Noite_de_lua_cheia_%286975702395%29.jpg'
    divTxt.innerHTML = 'Tenha uma boa noite'
    
}
else{
    divHora.innerHTML = `ERRO COM O HORÁRIO, <br> Parece que você trancende o espaço e tempo`.toUpperCase()
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBFSoWxOPq7xYTltVSbmH_UsNjCc7w48wzH8N4xvSuBg&s'
    divTxt.innerHTML = 'Espero que a polícia do tempo não te encontre'.toUpperCase()
}