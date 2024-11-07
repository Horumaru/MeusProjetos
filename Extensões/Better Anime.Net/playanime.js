// ==UserScript==
// @name         BetterAnime Pula Intro
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://betteranime.net/anime*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=betteranime.net
// @grant        none
// ==/UserScript==

(function() {
    setInterval(()=>{
        //Iframe Document
            var iframeDocument = document.getElementsByTagName('iframe')[0].contentWindow.document
        if (iframeDocument.querySelector("#betterPlayer > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video")){
            var video = iframeDocument.querySelector("#betterPlayer > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video")
            }

        // Pula Abertura
        if(iframeDocument.getElementsByClassName('ba-skipIntro').length < 2 ){
            if(iframeDocument.getElementsByClassName('ba-skipIntro')[0]){
                iframeDocument.getElementsByClassName('ba-skipIntro')[0].click();
                //Pula Resumo
                video.currentTime += 40
            }
        }

        // Pula fim
        if(video.currentTime){
            if(video.currentTime/video.duration >.98){
                var atual = window.location.href.split('episodio-')
                atual[1] = Number(window.location.href.split('episodio-')[1]) + 1
                var next = atual.join().replace(',','episodio-')
                window.location.href = next
            }
        }

    },500)
})();


document.getElementsByTagName('iframe')[0].contentWindow.document


