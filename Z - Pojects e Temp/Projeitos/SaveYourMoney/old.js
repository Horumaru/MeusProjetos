medida_produto = 1020
valor_produto = 14.99

medida_produto2 = 700
valor_produto2 = 12.89

unidade = 'Grama'

function regraD3_1un(valor_produto,medida_roduto){
    return valor_produto/medida_roduto
}
var result1 = regraD3_1un(valor_produto,medida_produto)
var result2 = regraD3_1un(valor_produto2,medida_produto2)
console.log(result1,' e ', result2 )


var result_final = result1-result2
console.log(result_final)


if (result_final == 0) {
    console.log('os dois produtos tem o mesmo custo beneficio')
}
else if (result_final < 0) {
    console.log('O Primeiro produto tem o melhor custo beneficio')
}
else if((result_final > 0)){
    console.log('O Segundo produto tem o melhor custo beneficio')
}

console.log('O Primeiro produto sai por', result1, ' a ', unidade, '- O KG sairia por', result1*1000)
console.log('O Segundo  produto sai por', result2, ' a ', unidade, '- O KG sairia por', result2*1000)