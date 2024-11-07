
// //Muda a cor do card 
// var coluna = 2
// var card   = 0
// document.getElementsByClassName('taskBoardColumn')[coluna].firstElementChild.lastChild.firstChild.firstChild.firstChild.children[card].firstChild.firstChild.firstChild.firstChild.style.backgroundColor = 'red'


//Pegando a data atual DD MM AA
const fullDate = new Date()
const atualAA = fullDate.getFullYear()
const atualMM = fullDate.getMonth() + 1
const atualDD = fullDate.getDate()

// //data do card '23 junho 2023'
// document.getElementsByClassName('taskBoardColumn')[1].firstElementChild.lastChild.firstChild.firstChild.firstChild.children[0].firstChild.firstChild.firstChild.firstChild.lastChild.firstChild.lastElementChild.title.replace(' Vence em ','').replaceAll(' de','').trim().split(' ')
const CardData = ['09', 'julho', '2023'] // comentar isso quando o de cima estiver ativo

//Tratando a data do card
// Card DD
const CardDD = Number(CardData[0])
// Card MM
switch (CardData[1]) {
    case 'janeiro'  : CardMM = 1; break;
    case 'fevereiro': CardMM = 2; break;
    case 'março'    : CardMM = 3; break;
    case 'abril'    : CardMM = 4; break;
    case 'maio'     : CardMM = 5; break;
    case 'junho'    : CardMM = 6; break;
    case 'julho'    : CardMM = 7; break;
    case 'agosto'   : CardMM = 8; break;
    case 'setermbro': CardMM = 9; break;
    case 'outubro'  : CardMM = 10; break;
    case 'novembro' : CardMM = 11; break;
    case 'dezembro' : CardMM = 12; break;
}
// Card AA
const CardAA = Number(CardData[2])

//Calculando a diferença de datas
const DAY    = 1000 * 60 * 60 * 24;
const today    = new Date(atualAA, atualMM, atualDD);
const cardDue  = new Date(CardAA, CardMM,  CardDD);
const mlsD1 = today.getTime();
const mlsD2 = cardDue.getTime();
const dif = mlsD2 - mlsD1;
const qtdDays = dif / DAY;


console.log("quantidade de dias  = ", qtdDays)
//tratando a distancia da data
if (qtdDays < 0) {
    console.log('Fudeu')
}
else if (qtdDays == 0) {
    console.log('é hoje')
}
else if (qtdDays < 5) {
    console.log('essa semana')
}
else if (qtdDays < 8) {
    console.log('semana que vem')
}
else if (qtdDays < 15) {
    console.log('entrou essa semana')
}
else if (qtdDays >= 15) {
    console.log('Entrou agora / Verificar dados')
} 
else{console.log('Tem algo estranho')}

