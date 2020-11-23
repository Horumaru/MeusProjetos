//"Vai de 'LogIN' ou 'LogOUT'??"
var LOG = 'IN'
suaHora(17, 30)

//'LogIN' ou 'LogOUT'??
function logs() {
   if (LOG.toUpperCase().includes('IN')) {
      loguin()
   } else { logout() }
}
function suaHora(HH, MM) {
   var interval = setInterval(() => {
      var dateT = new Date();
      var hh = dateT.getHours();
      var mm = dateT.getMinutes();
      var ss = dateT.getSeconds();

      console.log(hh + ' : ' + mm + ' : ' + ss)
      if (hh >= HH && mm >= MM) {
         console.log('Deu as:\n' + hh + ' : ' + mm + ' : ' + ss);
         clearInterval(interval)
         somaMin();
      }
   }, 1000);
}
function somaMin() {
   //gera um numero aleatório entre min e max
   function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
   }
   var dateT = new Date();
   var mm = dateT.getMinutes();
   var ss = dateT.getSeconds();

   var aMin = parseInt(getRandomArbitrary(0, 5)) + mm;
   var aSeg = parseInt(getRandomArbitrary(00, 59));
   console.log('o novo timer agora é ' + aMin + ' : ' + aSeg)

   var interval = setInterval(() => {
      var dateT = new Date();
      var mm = dateT.getMinutes();
      var ss = dateT.getSeconds();

      console.log('o novo timer agora é ' + aMin + ' : ' + aSeg)
      console.log(mm + ' : ' + ss)
      if (mm >= aMin && ss >= aSeg) {
         console.log('Deu as : ' + dateT);
         clearInterval(interval)
         logs()
      }
   }, 1000);
}
//loguin()
function loguin() {
   console.log('login');
   /*
   var logss = document.getElementsByClassName('PSPUSHBUTTON')
   for (var i = 0; i < logss.length; i++) {
      console.log(i);
      if (logss[i].id == 'IN_BTN$0') {
         console.log(logss[i].id + '  - cliquei nesse')
         document.getElementsByClassName('PSPUSHBUTTON')[i].click();
      }
   }
   */
}
//logout()
function logout() {
   console.log('logOUT');
   /*
   var logss = document.getElementsByClassName('PSPUSHBUTTON')
   for (var i = 0; i < logss.length; i++) {
      console.log(i);
      if (logss[i].id == 'OUT_BTN$0') {
         console.log(logss[i].id + 'cliquei nesse')
         //document.getElementsByClassName('PSPUSHBUTTON')[i].click();
      }
   }
   */
}
