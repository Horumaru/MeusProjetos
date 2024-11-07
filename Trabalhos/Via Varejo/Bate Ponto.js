// ==UserScript==
// @name         Marcação 2.0
// @namespace    http://tampermonkey.net/
// @version      2
// @description  try to take over the world!
// @author       You
// @match        https://prweb01/bahia/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function () {
    //Inseir a hora de Bater o ponto
    var horaSai = 7
    var minutoSai = 27

    //Gera um relogio que se atualiza por segunddo
    function relogioSai(horaSai, minutoSai) {
        var interval = setInterval(() => {

            var data = new Date;
            var horaAtual = data.getHours();
            var minutoAtual = data.getMinutes();
            var segundoAtual = data.getSeconds();

            //verifica se está antes da hora e mostra o relógio
            if (horaSai > horaAtual) {
                console.log(horaSai + ':' + minutoSai + ' - ' + horaAtual + ':' + minutoAtual + ':' + segundoAtual)
            }
            else if (horaSai == horaAtual) {
                console.log(horaSai + ':' + minutoSai + ' - ' + horaAtual + ':' + minutoAtual + ':' + segundoAtual)
                if (minutoSai - 1 == minutoAtual && segundoAtual >= 58) {
                    console.log('Reload ', horaAtual + ':' + minutoAtual + ':' + segundoAtual)
                }
                else if (minutoSai == minutoAtual && segundoAtual <= 10) {
                    console.log('Play')
                    clearInterval(interval)
                    setTimeout(playCode, 1000)
                }
                else if (minutoSai <= minutoAtual) {
                    console.log('Passou')
                    clearInterval(interval)
                }
            }
            else if (horaSai < horaAtual) {
                console.log('Passou da Hora', horaAtual + ':' + minutoAtual + ':' + segundoAtual)
                clearInterval(interval)

            }

        }, 1000)
    }; relogioSai(horaSai, minutoSai);

    function playCode() {
        var codeInterval = setInterval(() => {
            console.warn('PLaiCode')

            var um = document.querySelector('body > form:nth-child(2) > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > input:nth-child(2)')
            var processa = document.querySelector('body > form:nth-child(2) > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > input:nth-child(1)')
            var marcacao = document.querySelector('body > form:nth-child(1) > table:nth-child(9) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > font:nth-child(1) > b:nth-child(1)')
            var confirmado = document.querySelector('body > form:nth-child(1) > table:nth-child(11) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > b:nth-child(1) > font:nth-child(1)').innerText

            if (um) {
                inicial(21, 60003385)
            }
            if (processa) {
                console.warn('processa')
                document.getElementsByName('U01_DS_APL_VIS_SLC')[0].selectedOptions[0].value = "5"
                processa.click()
            }
            if (marcacao) {
                console.log('Pew');
                var marca = document.querySelector('#NM_BOT_PRC')
                marca.click()
            }
            //confirmação de marcação
            if (confirmado) {
                console.warn('confirmado')
                clearInterval(codeInterval)
            }




            function inicial(a, b) {
                console.warn('Inicial')
                //1
                var um = document.querySelector('body > form:nth-child(2) > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > input:nth-child(2)')
                //2
                var dois = document.querySelector('body > form:nth-child(2) > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > input:nth-child(2)')
                //pass
                var pass = document.querySelector('body > form:nth-child(2) > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3) > b:nth-child(1) > input:nth-child(1)')
                //enter
                var enter = document.querySelector('body > form:nth-child(2) > table:nth-child(10) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > input:nth-child(1)')
                dois.disabled = false
                pass.disabled = false
                enter.disabled = false


                um.value = a
                dois.value = b
                pass.value = 'ICEMAKER11'
                enter.click()
            }
        }, 250)
    }
})();