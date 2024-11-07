var chatMessages = document.getElementsByClassName('messageListItem_d5deea')
var tempoDeCall = 0

for(var i = 0; i < chatMessages.length; i++){
    if(chatMessages[i].innerText.includes('iniciou uma chamada')){
        var chamada = document.getElementsByClassName('messageListItem_d5deea')[i].innerText.split(' iniciou uma chamada que durou ')
        var chamadaDuracao = Number(chamada[1].split('.')[0].split(' ')[0])
        if(isNaN(chamadaDuracao)){
            
            if (chamada[1].split('.')[0].split(' ')[0].includes('um')){
                chamadaDuracao = 1
            }
            //console.info('Adicionado como 1 o valor ->' ,chamada[1].split('.')[0].split(' ')[0] )
        }
        var chamadaTempo = chamada[1].split('.')[0].split(' ')[1]

        if(chamadaTempo.includes('hora')){
            tempoDeCall = (tempoDeCall + (chamadaDuracao*60))

        }
        else if (chamadaTempo.includes('minuto')){
            tempoDeCall = (tempoDeCall + (chamadaDuracao))
        }
        if(isNaN(tempoDeCall)){
            console.log(i)
            console.log(chamada)
        }
    }
}

var lastMessageData = chatMessages[0].innerText.split('\n — \n')[1].split(' ')[0]
var lastMessageHora = chatMessages[0].innerText.split('\n — \n')[1].split(' ')[1].split('\n')[0]
console.log('foram analisadas as ultimas', i, 'mensagens, desde o dia', lastMessageData, 'as', lastMessageHora, 'horas')
console.log('tempo de call final =', tempoDeCall, 'minutos')
console.log('tempo de call final =', tempoDeCall/60, 'horas')
console.log('tempo de call final =', (tempoDeCall/60)/24, 'dias')