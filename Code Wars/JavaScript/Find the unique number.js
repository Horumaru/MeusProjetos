// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// Lento
// function findUniq(arr) {
//     for(var i=0; i < arr.length; i++){
//         var quantidadeElementos = arr.filter(x => x === arr[i]);
//         if(quantidadeElementos.length == 1 ){
//              return quantidadeElementos[0]
//         }
//     }
// }
//console.log(findUniq(arr))
var arr = [ 0, 0, 0.55, 0, 0 ]// [ 1, 1, 1, 2, 1, 1 ]

function findUniq(arr) {
    // Crie um objeto vazio para armazenar a contagem de cada número
    let countObj = {};

    // Itere pelo array e atualize a contagem para cada número
    arr.forEach(num => {
        countObj[num] = (countObj[num] || 0) + 1;
    });

    // Encontre o número com uma contagem de 1
    for (let num in countObj) {
        if (countObj[num] === 1) {
            return parseFloat(num); // Converta o número de volta para float se necessário
        }
    }
}
console.log(findUniq(arr))