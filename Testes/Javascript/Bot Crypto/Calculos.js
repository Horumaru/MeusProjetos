var real_investido = 200;
var qntBTC = 0.00033236
var cripto_preco_compra = 591587.44;
var cripto_preco_atual = 561909.16;

function jurosEntrada(valor, jurosEntrada = 0.9822485207){
    return  (valor * jurosEntrada);
}
function jurosSaida(valor, jurosSaida = 0.007051647446){
    return valor - (valor * jurosSaida);
}

function calcSatoshis(real_investido, cripto_preco_compra) {
    satoshi = real_investido / cripto_preco_compra;
    console.log("Investimento em reais : R$" + real_investido)
    console.log("Quantidade de bitcoins:"+ satoshi.toFixed(6))
    return satoshi;
}



var satoshi = calcSatoshis(real_investido, cripto_preco_compra);
var porcentagem = cripto_preco_atual/cripto_preco_compra;
var variacao = ((real_investido*porcentagem)) - real_investido;
var patrimonio = real_investido*porcentagem;

console.log("Satoshi        : ", satoshi.toFixed(8))
console.log("Você tem       : ", (porcentagem*100).toFixed(2), "% do que investiu")
console.log("Variação de    : ", variacao.toFixed(2), "reais")
console.log("Você Investiu  : ", real_investido.toFixed(2), "reais")
console.log("Saldo atual    : ", patrimonio.toFixed(2),"reais")


console.log(jurosEntrada(satoshi).toFixed(6))