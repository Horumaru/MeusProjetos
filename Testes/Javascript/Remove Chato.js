/*
var listabanidos = ['Willian "Lé Lé" Lima', 'On Açaí']
var statusWhats = document.getElementsByClassName("_3uIPm WYyr1")[0].children[0].children

for(var i = 0 ; i < statusWhats.length; i++){
    var nomeBanido = statusWhats[i].innerText.split('\n')[0]
    if(listabanidos.includes(nomeBanido)){
        console.log(nomeBanido)
        //document.getElementsByClassName('lhggkp7q ln8gz9je rx9719la')[i].remove()
    }
}

var pixel = Number(document.getElementsByClassName("_3uIPm WYyr1")[0].children[0].children[i+1].style.transform.replace('translateY(','').replace('px)',''))//
var d = pixel - 40
var d = d.toString()
var i = 7
document.getElementsByClassName("_3uIPm WYyr1")[0].children[0].children[i].style.transform ='translateY('+d+'px)'
*/

var listabanidos = ['Tesss','Willian "Lé Lé" Lima','On Açaí','Lopes Pizzaria']
var statusWhats = [
  ['Daniel Cazala Tammy '       ,'translateY(608px)'],
  ['Líliane Corretora'          ,'translateY(544px)'],
  ['Adriano Cognizant'          ,'translateY(480px)'],
  ['Juliana Barbosa Cog'        ,'translateY(416px)'],
  ['Adriano Cognizant'          ,'translateY(352px)'],
  ['On Açaí'                    ,'translateY(288px)'],
  ['Willian "Lé Lé" Lima'       ,'translateY(224px)'],
  ['VISTO'                      ,'translateY(176px)'],
  ['Lopes Pizzaria'             ,'translateY(112px)'],
  ['Rakel Querido.'             ,'translateY(48px)' ],
  ['RECENTE'                    ,'translateY(0px)'  ],
  ['Samuel Cog'                 ,'translateY(672px)']
]
//console.log(listabanidos)

for(var i = 0 ; i < statusWhats.length; i++){
    var nomeBanido = statusWhats
    if(listabanidos.includes(nomeBanido[i][0])){
        console.log(nomeBanido[0])
        nomeBanido[1] = nomeBanido[2]
    }
}
