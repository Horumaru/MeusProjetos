// Cria um array vazio e o pupula com o SKU dos produtos
var array = new Array();
var produtos = document.getElementsByTagName('a')
for (var i = 0; i < produtos.length;i++){
    array.push(produtos[i].dataset.sku);
}
console.log(array);

//verifica os produtos clicados e printa o objeto com as informações
for (var i = 0; i < produtos.length;i++){
    produtos[i].addEventListener('click',function(e){
        console.log({
            'SKU'   : this.dataset.sku,
            'Nome'  : this.children[0].innerText,
            'Preco' : Number(this.children[2].innerText)
            }
        );
    })
}
