// Add event listener on keydown
var atual = document.querySelector("#movie_player > div.html5-video-container > video").playbackRate
var novo = 3
var temp = 0
document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (document.querySelector("#movie_player > div.html5-video-container > video").playbackRate != atual){
        atual = document.querySelector("#movie_player > div.html5-video-container > video").playbackRate
    }
    if (name == "F9") {
        temp = atual
        atual = novo
        novo = temp
        //console.warn('temp: ', temp)
        console.warn('novo ', novo)
        console.warn('atual ', atual)
        document.querySelector("#movie_player > div.html5-video-container > video").playbackRate = atual
    }
}, false);

/*
V1
(function() {
    // Add event listener on keydown
        var tru = true;
        document.addEventListener('keydown', (event) => {
            var name = event.key;
            var code = event.code;
            if(name == "F9"){
                if(tru){
                    document.querySelector("#movie_player > div.html5-video-container > video").playbackRate = 3
                    tru = !tru
                    console.log(tru)
                }
                else{
                    document.querySelector("#movie_player > div.html5-video-container > video").playbackRate = 1
                    tru = !tru
                    console.log(tru)
                }
            }
    
        }, false);
    })();
*/