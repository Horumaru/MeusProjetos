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
         window.location.reload();
      }
    }, 1000);
}
suaHora(07,59);
