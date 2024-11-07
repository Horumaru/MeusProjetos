// ==UserScript==
// @name         Whats Recover Messages
// @namespace    https://web.whatsapp.com/
// @version      2024-07-30
// @description  try to take over the world!
// @author       You
// @match        https://web.whatsapp.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=whatsapp.com
// @grant        none
// ==/UserScript==

(function() {
    var messages = []
    var interval = setInterval(() => {
    
        var messageList = document.querySelector("#main > div._amm9 > div > div._ajyl > div.x3psx0u.xwib8y2.xkhd6sd.xrmvbpv").children
        var lastMessage = messageList[messageList.length - 1].innerText
    
        if (lastMessage != messages[messages.length - 1]) {
            if (lastMessage.includes('deleted')) {
                var apagada = 'MENSAGEM APAGADA : ' + messages[messages.length - 1]
                console.error(apagada)
                messages.push(apagada)
    
                //Para Recuperar as Mensagens, siga abaixo
                // Recupera a string do localStorage
                //var arrayString = localStorage.getItem("meuArray");
    
                // Converte a string JSON de volta em um array
                //var messagesRecover = JSON.parse(arrayString);
    
                // Agora você pode usar o array como um array JavaScript normal
                //console.log("Mensagem recover : " + messagesRecover);)
            }
    
            messages.push(lastMessage)
            console.warn(messages)
    
            // Converte o array em uma string JSON
            var arrayString = JSON.stringify(messages);
    
            // Armazena a string no localStorage
            localStorage.setItem('meuArray', arrayString);
        }
    }, 250);
    
})();



// Converte o array em uma string JSON
var arrayString = JSON.stringify(messages);

// Armazena a string no localStorage
localStorage.setItem('meuArray', arrayString);




// Recupera a string do localStorage
var arrayString = localStorage.getItem('meuArray');

// Converte a string JSON de volta em um array
var messagesRecover = JSON.parse(arrayString);

// Agora você pode usar o array como um array JavaScript normal
console.log('Mensagem recover : ' + messagesRecover);