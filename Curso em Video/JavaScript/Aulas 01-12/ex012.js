var d = new Date()        
var hora = d.getHours()
var m = d.getMinutes()
var s = d.getSeconds()
console.log(`Hora certa -> ${hora}:${m}:${s}`)

if(hora <12 ){
    console.log('bomdia')
}else if (hora <18){
    console.log('boa tarde')
} else{
    console.log('boa noite')
}
