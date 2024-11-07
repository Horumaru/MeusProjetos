document = {
    domain : 'Meu dominio',
    location:{
        pathname : '/'
    }
}

function SetCookie(nomeCookie,valorCookie,expiracaoCookieDias ) {
    var dataExpiracao = new Date();
    dataExpiracao.setTime(dataExpiracao.getTime() + (expiracaoCookieDias * 24 * 60 * 60 * 1000));
    var expiracao = "expires=" + dataExpiracao.toUTCString();
    
    return  document.cookie = nomeCookie+'='+valorCookie+'; expires='+expiracao + '; path='+document.location.pathname+'; domain='+ document.domain
}
SetCookie('Cokizinho','Valor do cookie', 1)
console.log(document.cookie)