if (window.performance) {
    console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info("This page is reloaded");
    //login();
} else {
    console.info("This page is not reloaded");
    relogioReload();
}
function relogioReload(){
    var interval = setInterval(() => {
        var data = new Date;
        var minutos = data.getMinutes();
        var horas = data.getHours();
        var segundos = data.getSeconds();
        console.log(horas + ':' + minutos + ':' + segundos)

        
        function hora(h, m, s = 0) {
            horaSai = 14
            minutoSai = 58
            if (h >= horaSai && m >= minutoSai && s >= segundos) {
                console.log('maior')
                clearInterval(interval)
                console.log('reload!')
                setTimeout(location.reload(), 1000)
            }
        }
        hora(horas, minutos, segundos)
    }, 1000)
}


function inicial(a, b){
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




var interval = setInterval(()=>{
    var um = document.querySelector('body > form:nth-child(2) > table:nth-child(7) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > input:nth-child(2)')
    var processa = document.querySelector('body > form:nth-child(2) > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > input:nth-child(1)')
    var marcacao = document.querySelector('body > form:nth-child(1) > table:nth-child(9) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > font:nth-child(1) > b:nth-child(1)')
    if(um){
        inicial(21, 60003385)
    }
    if(processa){
        document.getElementsByName('U01_DS_APL_VIS_SLC')[0].selectedOptions[0].value = "5"
        processa.click()
    }
    else if(marcacao){
        console.log('Pew');
        clearInterval(interval)
        //document.querySelector('#NM_BOT_PRC').click()
        //document.querySelector('#NM_BOT_FIM').click()
    } 
},1000)
