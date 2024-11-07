function videoSpeed(vel){
    var arrayVideo = document.getElementsByTagName('video')
    for(var i = 0; arrayVideo.length > i; i++){
        return arrayVideo[i].playbackRate = vel
    }
}

var check, video
var tecla = "Pause"
document.addEventListener('keydown', (event) => {
    var name = event.key;
    console.log('\nPress: ', name, '\nA tecla é ->', tecla)
    var vel = 3
    if (name == tecla) {
        //verifica se é video normal ou Short
        //Normal
        var video = document.getElementsByTagName('video')

        var atual = video.playbackRate

        if (atual < vel) {
            check = video.playbackRate
            console.log('check = ', check)
            //video.playbackRate = vel
            videoSpeed(vel)
            console.log('video.playbackRate ; ', video.playbackRate)
        }
        else {
            console.log('check = ', check)
            //video.playbackRate = check
            videoSpeed(check)
            console.log('video.playbackRate = ', video.playbackRate)
        }
    }
}, false);