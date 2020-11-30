function alteraImagem(){
    alert('Ò.Ó   Change Images!!!!!!!');
    for (var i = 0; i < document.images.length; i++){
        document.images[i].src='http://bonstutoriais.com.br/wp-content/uploads/2015/11/imagens3d-3.gif';
        }
}

document.addEventListener('click', function(e){
    console.log('cliquei');
    alteraImagem()
});


document.addEventListener( "click", function(e) {
    console.log(e);
});

