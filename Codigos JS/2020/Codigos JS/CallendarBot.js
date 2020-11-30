//window.dataLayer = window.dataLayer || [];
//dataLayer.push('EventCalendar');


//A ideia é o programa abrir uma nova aba, rodar o mudaCor na nova aba, e fechar, somente de clicar no botão da agenda.
function OpenTab(){
    window.open('https://calendar.google.com/calendar/u/0/r/eventedit');
    wiondow.close();
    /* 
    Exemplo de link
    https://calendar.google.com/calendar/r/eventedit?text=Consultoria+de+Implementa%C3%A7%C3%A3o+de+Tags+do+Google+-+https%3A%2F%2Flitoraneagestao.com.br%2F&details=Ol%C3%A1%2C%3Cbr%3E%3Cbr%3EPara+nossa+consultoria%2C+criei+uma+sala+de+reuni%C3%A3o+para+que+voc%C3%AA+possa%26nbsp%3Bcompartilhar+sua+tela.%3Cbr%3E%3Cbr%3EPara+se+conectar%2C+siga+os+passos+a+seguir%3A%3Cbr%3E+%3Col%3E+%3Cli%3EFeche+todo+e+qualquer%26nbsp%3B%3Cb%3Econte%C3%BAdo+pessoal+e+confidencial%3C%2Fb%3E%26nbsp%3Bque+possa+ter+aberto.%3C%2Fli%3E+%3Cli%3E%3Cb%3EUtilize+o+navegador+Google+Chrome%3C%2Fb%3E%2C+assim+n%C3%A3o+ter%C3%A1+que+instalar+complementos.%3C%2Fli%3E+%3Cli%3E%3Cb%3EAbra+o+link%3C%2Fb%3E%26nbsp%3Bque+se+encontra+no+in%C3%ADcio+deste+e-mail.%3C%2Fli%3E+%3Cli%3E%3Cb%3EPermita+o+acesso+%C3%A0+c%C3%A2mera+e+microfone%3C%2Fb%3E%26nbsp%3Bse+for+solicitado.+N%C3%A3o+utilizaremos+durante+a+chamada%2C+mas+%C3%A9+necess%C3%A1rio+ativ%C3%A1-los+para+poder+se+conectar+sem+problemas.%3C%2Fli%3E+%3Cli%3EClique+em%26nbsp%3B%3Cb%3EParticipar%3C%2Fb%3E%26nbsp%3B%28ou+%22Join%22+em+ingl%C3%AAs%29+para+se+conectar+na+videochamada.%3C%2Fli%3E+%3C%2Fol%3E+%3Cbr%3E%3Cbr%3E+%3Ci%3E%3Cb%3E*POL%C3%8DTICA+DE+REAGENDAMENTO%3C%2Fb%3E%3A+No+caso+de+voc%C3%AA+n%C3%A3o+estar+dispon%C3%ADvel+para+falar+neste+hor%C3%A1rio%2C+por+favor+informe+nosso+time+o+quanto+antes.+A+disponibilidade+da+Consultoria+%C3%A9+limitada+e+o+reagendamento+para+a+mesma+semana+talvez+n%C3%A3o+seja+sempre+poss%C3%ADvel.%3C%2Fi%3E%3Cbr%3E%3Cbr%3E%3Ci%3E%3Cb%3E**TERMOS%3C%2Fb%3E%3A+Ao+responder+a+esta+mensagem%2C+voc%C3%AA+autoriza+o+especialista+em+implementa%C3%A7%C3%A3o+do+Google+a+fornecer+orienta%C3%A7%C3%B5es+quanto+%C3%A0+instala%C3%A7%C3%A3o+do+c%C3%B3digo+de+Ads+Conversion+Code+no+seu+website+e%2Fou+campanha+e%2Fou+conta+do+Google+Analytics%2C+conforme+necess%C3%A1rio.+Voc%C3%AA+confirma+e+reconhece+que+todas+as+altera%C3%A7%C3%B5es+sugeridas+e%2Fou+implementadas+pelo+Google+devem+ser+realizadas+por+sua+conta+e+risco.+O+Google+n%C3%A3o+garante+ou+promete+resultados+decorrentes+da+implementa%C3%A7%C3%A3o+dessas+altera%C3%A7%C3%B5es.+Al%C3%A9m+disso%2C+o+Google+n%C3%A3o+ser%C3%A1+respons%C3%A1vel+por+eventuais+efeitos+dessas+altera%C3%A7%C3%B5es%2C+o+que+inclui%2C+sem+limita%C3%A7%C3%A3o%2C+qualquer+aumento+nos+gastos+relacionados+%C3%A0s+campanhas+do+Google+Ads%2C+pelos+quais+voc%C3%AA+ser%C3%A1+o+%C3%BAnico+respons%C3%A1vel.+Voc%C3%AA+tamb%C3%A9m+concorda+em+validar+que+seu+website+continue+funcionando+conforme+o+esperado.%3C%2Fi%3E%3Cbr%3E%3Cbr%3E%3Ci%3E%3Cb%3E***Observa%C3%A7%C3%A3o%3C%2Fb%3E%3A+Recomendamos+que+voc%C3%AA+verifique+se+fez+o+backup+completo+do+seu+website+antes+de+realizar+altera%C3%A7%C3%B5es.+Al%C3%A9m+disso%2C+voc%C3%AA+N%C3%83O+deve+compartilhar%2Fpartilhar+as+credenciais+do+site+comigo+ou+com+outras+pessoas+do+Google.+Por+fim%2C+fazer+altera%C3%A7%C3%B5es+no+seu+website%2Fconta+enquanto+trabalhamos+na+solicita%C3%A7%C3%A3o+pode+causar+a+perda+de+algumas+altera%C3%A7%C3%B5es%2Fconfigura%C3%A7%C3%B5es.+Aconselhamos+que+voc%C3%AA+n%C3%A3o+fa%C3%A7a+altera%C3%A7%C3%B5es+no+seu+website%2Fconta+at%C3%A9+a+conclus%C3%A3o+das+altera%C3%A7%C3%B5es+recomendadas.%3C%2Fi%3E%3Cbr%3E%3Cbr%3E%3Ci%3E%3Cb%3E****Nota%3C%2Fb%3E%3A+Como+uma+medida+de+sa%C3%BAde+preventiva+aos+nossos+especialistas+em+suporte+com+rela%C3%A7%C3%A3o+ao+COVID-19%2C+n%C3%B3s+estamos+operando+com+um+time+limitado.+Agradecemos+pela+sua+paci%C3%AAncia%2C+j%C3%A1+que+nosso+contato+pode+levar+mais+tempo+do+que+o+habitual.%3C%2Fi%3E&dates=20201026T110000%2F20201026T120000&location=&trp=true&sf=true&add=webtech-qa-sao%40google.com&add=ianealves%40litoraneagestao.com.br
    */
}

//Delay de 2 Seg para a página carregar.
var delay= 2000;
setTimeout(function(){
    console.log('Ola mundo!');
    nomesClick();
},delay);

function nomesClick(){
    var listaDeNomes = document.getElementsByClassName('MocG8c LMgvRb KKjvXb')
    for(i=0; i< listaDeNomes.length ; i++){
        if(listaDeNomes[i].innerText == "Renan Ribeiro"){
            console.log('Cliquei no nome')
            listaDeNomes[i].click()
        }
    }
    console.log('Click feio')
    setTimeout(clickFeio, 2000)
}
function clickFeio(){
    document.getElementsByClassName('Z7IIl jT5e9')[3].click();
    setTimeout(mudaCor, 1000)  
}
/*
function webaoClick(){
    var WebaoName = document.getElementsByClassName('Z7IIl jT5e9')
    for(i=0; i< WebaoName.length ; i++){
        if(WebaoName[i].innerText == "Website Optimization Support"){
            console.log('Cliquei no webão')
            WebaoName[i].click()
        }
    }
    setTimeout(mudaCor, 1000)   
}
*/

//Muda a cor evento e da um delayzinho pra carregar as outras coisas
function mudaCor(){
    document.getElementsByClassName('U26fgb c7fp5b FS4hgd FpmPAb')[0].click()
    setTimeout(grafite, 1000)
    function grafite(){
        var listaDeCores = document.getElementsByClassName('WdtDhe')
        for(i=0; i< listaDeCores.length ; i++){
            if(listaDeCores[i].dataset.text == "Graphite"){
                listaDeCores[i].click()
            }
        }
    setTimeout(salvar, 1000)
    }
}

//clica no salvar e da um delayzinho
function salvar(){
    var salvar = document.getElementsByClassName('l4V7wb Fxmcue')
    for (i=0; i < salvar.length ; i++){
        if (salvar[i].innerText == "Save"){
            salvar[i].click()
        }
    }
    setTimeout(enviar, 1000)
}

//clica no enviar e da um delayzinho
function enviar(){
    var botao = document.getElementsByClassName('NPEfkd RveJvd snByac')
    for(i=0; i< botao.length ; i++){
        if(botao[i].innerText == "Send"){
            botao[i].click()
        }
    }
    setTimeout(invite, 1000)
}

//Invite external Guests
function invite(){
    var invites = document.getElementsByClassName('NPEfkd RveJvd snByac')
    for(i=0; i< invites.length ; i++){
        if(invites[i].innerText == 'Invite external guests'){
            console.log('invites click')
            invites[i].click()
        }
    }
}