var conversas = {}

var interval = setInterval(() => {

    var abas = document.querySelector("#pane-side > div:nth-child(3) > div > div").children

    for (var i = 0; i < abas.length; i++) {

        var nome = abas[i].firstChild.firstChild.firstChild.children[1].firstChild.innerText.split('\n')[0]
        var mensagem = abas[i].firstChild.firstChild.firstChild.children[1].lastChild.innerText

        conversas[nome] = conversas[nome] || []

        if (mensagem != conversas[nome][conversas[nome].length - 1]) {
            conversas[nome].push(mensagem)

            if (mensagem.includes('deleted') && conversas[nome].length > 1) {
                var apagada = 'MENSAGEM APAGADA : ' + [nome] + '\nMensagem : \n\n\n' + conversas[nome][conversas[nome].length - 2] +'\n\n\n'
                console.error(apagada)

                // Recupera a string do localStorage
                var whatsAppMessages = localStorage.getItem('whatsAppMessages');

                // Converte a string JSON de volta em um array
                var messagesRecover = JSON.parse(whatsAppMessages);

                // Agora você pode usar o array como um array JavaScript normal
                console.log('Mensagem recover : ' , messagesRecover);
            }

            // Converte o array em uma string JSON
            whatsAppMessages = JSON.stringify(conversas);

            // Armazena a string no localStorage
            localStorage.setItem('whatsAppMessages', whatsAppMessages);
        }
    }

}, 250)