// verificar a URL

// UrlInicio começa como não
// poe o video no Inicio
// muda a UrlInicio pra sim

// checa se a url mudou 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var URL_atual = ''
var Atual_interval = setInterval(() => {
    if (URL_atual != document.URL) {
        URL_atual = document.URL

        HD_Inderval()
    }
    console.log('URL Atual -> ', URL_atual)
}, 1000)

async function HD_Inderval() {
    var HD_Inderval = setInterval(() => {
        console.log('Estou no HD INTERVAL')
        if (document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-button.ytp-settings-button").className.includes('hd-quality-badge') === false) {
            // O video esta em HD? Retornará true ou false
            
            //Config click
            document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-button.ytp-settings-button").click()
            sleep(250)

            //menu config
            var videoConfig = document.querySelector("#ytp-id-18 > div > div").children
            for (var i = 0; i < videoConfig.length; i++) {
                if (videoConfig[i].innerText.includes('Qualidade')) {
                    videoConfig[i].click()
                }
            }
            sleep(250)

            // menu qualidade
            var videoQualits = document.querySelector("#ytp-id-18 > div > div.ytp-panel-menu").children

            for (var i = 0; i < videoQualits.length; i++) {
                
                if (videoQualits[i].innerText.includes('HD')) {
                    videoQualits[i].click()
                    break
                }
                else if(i == videoQualits.length) {
                    videoQualits[0].click()
                    break
                }
            }
        }
        else {
            clearInterval(HD_Inderval)
            console.log('O video está em HD, sai do interval')

            //time do video pra zero
            document.querySelector("#movie_player > div.html5-video-container > video").currentTime = 0
            console.log('E joguei o time do video pra zero')
        }
    }, 500)
}