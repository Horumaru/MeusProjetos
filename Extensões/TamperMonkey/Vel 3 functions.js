var video = document.querySelector("#movie_player > div.html5-video-container > video")
var vel = 3

function mudaVel(video, vel){

    var atual = video.playbackRate

    if (atual < vel){
        check = video.playbackRate
        console.log('check = ', check)
        //video.playbackRate = vel
        console.log('video.playbackRate ; ',video.playbackRate)
        return(video.playbackRate = vel)
    }
    else{
        console.log('check = ',check)
        //video.playbackRate = check
        console.log('video.playbackRate = ',video.playbackRate)
        return(video.playbackRate = check)
    }
}

mudaVel(video, vel)

D:\\Users\\rphil\\Documents\\03 - VS Code Códigos\\Extensões\\TamperMonkey\\Vel 3 functions.js