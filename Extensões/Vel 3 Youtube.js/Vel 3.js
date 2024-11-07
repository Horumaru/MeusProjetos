// ==UserScript==
// @name         Pause = Vel3 4.0
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    var check, video
    var tecla = "Pause"
    document.addEventListener('keydown', (event) => {
    var name = event.key;
        console.log('\nPress: ',name,'\nA tecla é ->', tecla)
    var vel = 3
    if (name == tecla) {
        //verifica se é video normal ou Short
        //Normal
        if (document.querySelector("#movie_player > div.html5-video-container > video")){
            video = document.querySelector("#movie_player > div.html5-video-container > video")
        }
        //Short
        if(document.querySelector("#shorts-player > div.html5-video-container > video")){
            video = document.querySelector("#shorts-player > div.html5-video-container > video")
        }

        var atual = video.playbackRate

        if (atual < vel){
            check = video.playbackRate
            console.log('check = ', check)
            video.playbackRate = vel
            console.log('video.playbackRate ; ',video.playbackRate)
        }
        else{
            console.log('check = ',check)
            video.playbackRate = check
            console.log('video.playbackRate = ',video.playbackRate)
        }
    }
}, false);
})();

// // var novo = 3
// // var temp
// // document.addEventListener('keydown', (event) => {
// //     var video = document.querySelector("#movie_player > div.html5-video-container > video")
// //     var atual = video.playbackRate

// //     console.log('atual :', atual)
// //     console.log('novo  :', novo)
// //     console.log('temp  :', temp)
// //     var name = event.key;
// //     if (name == "F9") {
// //         temp = atual
// //         atual = novo
// //         novo = temp

// //         console.log('novo  :', novo,)
// //         console.log('atual :', atual)
// //         video.playbackRate = atual
// //     }
// // }, false);
// =======================================================================================================
// var parado = true
// var interval
// function ini(){
//     interval = setInterval(()=>{
//         var atual = window.location.href
//         document.querySelector("#comicImages > picture > img").click()
//         if(atual == window.location.href){
//             var reset = window.location.href.split('#')[0] + '#1'
//             window.location.href = reset
//         }
//     },3000)
// }
// function fim(){
//     clearInterval(interval)
// }

// document.addEventListener('keydown', (event) => {
//     var name = event.key;
//     console.log(name)
//     if (name == " " && parado) {
//         parado = false
//         console.log('entrei ini'+ name)
//         ini()
//     }
//     else if (name == " " && !parado) {
//         parado = true
//         console.log('entrei fim'+ name)
//         fim()
//     }
// }, false);
