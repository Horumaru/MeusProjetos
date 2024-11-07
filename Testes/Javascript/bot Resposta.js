var txt = "         Bom diaaa    como você esta?"
console.log('Texto recebido -> "',txt,'"')
var txt = txt.trim().replace(  /\s+/g,' ').toLowerCase().split(' ')
var resp = [
    ['bom dia', 'Bom dia, tudo bom?'],
    ['como vai', 'Bem e voce?']

]
console.log('Texto tratado -> ',txt)


for (var i=0;i<resp.length;i++){
    for(var j=0;j<txt.length;j++){
        if (resp[i][0].includes(txt[j])) {
            console.log('pergunta = ', resp[i][0])
            console.log('resposta = ', resp[i][1])
        }
    }
}


//console.log(txt)
/* 
var texto = "         Bom diaaa    como você esta? "
var resp  =[
    ['bomdia', "tuto bem"],
    ['comovocêesta?', 'bem obrigado']
]
function removeDuplicates(str)
{
    // Used as index in the modified String
    let n = str.length;
   
    // Traverse through all characters
    let res = "";
    for (let i = 0; i < n; i++)
    {
        // Check if str[i] is present before it
        let j;
        for (j = i + 1; j < n; j++)
            if (str[i] == str[j])
                break;
   
        // If not present, then add it to
        // result.
        if (j == n)
            res = res + str[i];
    }
    return res;
}
var texto = removeDuplicates(texto).toLowerCase()

for (var i=0;i<resp.length;i++){
    console.log(resp[i][0].includes(texto))
    if(texto.includes(resp[i][0])){
        console.log(i,'opa', resp[0][1])
    }
}


//console.log(i, texto)

*/


/*
console.log(texto)


var texto = texto.replace(/\s+/g,' ').trim().split(' ')
console.log(texto)



console.log('Resultado = ' + texto)
*/