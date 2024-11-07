// function produtos(){
//     var products = {{datalayer--ecommerce.add.products}};
//                                for(var i = 0; products.length > i; i++){
//                                 catalogObjectType: "Product",
//                                 catalogObjectId: products[i].id,
//                                 quantity: 1,
//                                 price: Number(products[i].price),
//                                 currency: "BRL",
//                                 attributes: {
//                                     name: products[i].name,
//                                     price: products[i].price,
//                                     brand: products[i].brand
//                                 }
//                             };
//     }

var products = [
    {
        brand: "claro-movel",
        category: "plano/celular/controle",
        id: "22283",
        name: "15gb",
        price: "49.90",
    },
    {
        brand: "motorola",
        category: "aparelhos-celular",
        id: "000000000000018527",
        name: "motorola-moto-g23-128gb",
        price: "1389.00",
    },
    {
        brand: "claro-movel",
        category: "plano/celular/chips",
        id: "000000000000023100",
        name: "chip",
        price: "10.00"
    },
    {
        brand: "claro-vazio",
        category: "plano/celular/vazio",
        id: "000",
        name: '',
        price: "1.00"
    }
]
function produtos(products) {
    var product = []
    for (var i = 0; products.length > i; i++) {
         product.push({
            catalogObjectType: "Product",
            catalogObjectId: products[i].id,
            quantity: 1,
            price: Number(products[i].price),
            currency: "BRL",
            attributes: {
                name : products[i].name,
                price: products[i].price,
                brand: products[i].brand
            }    
        } )
    };
    return product
}
console.log(products.length)
console.log(produtos(products))
