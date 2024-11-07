//o codigo abaixo identifica se a aba está visivel ou nao.

/*
document.addEventListener("visibilitychange", function() {
    var aba = document.visibilityState
    console.log(aba)
    location.reload()
});

para que funcione no opera usamos o webkitvisibilitychange
document.addEventListener("webkitvisibilitychange", function() {
    var aba = document.webkitVisibilityState
    console.log(aba)
});
*/

document.addEventListener("visibilitychange", function() {
    var aba = document.visibilityState
    console.log(aba)
    if(aba == "hidden"){
        console.log('mudou de aba')
    }
    else if(aba == "visible"){
        console.log('voltou pra aba')
        location.reload()
    }
});