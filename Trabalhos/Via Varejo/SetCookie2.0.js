document = {
  URL: "www.urldeteste.com.br?utm_source=source_Test&utm_medium=medium_afiliadosTest&utm_campaign=000000&lmdsid=lomadeeparamTest",
  cookie: '',
  domain: "urldeteste.com.br",
  location: {
    pathname: "urldeteste.com.br"
  }
}
function criaCookie(MeuCookie) {
  function URLParams() {
    var queryString = document.URL.split("?")[1];

    if (!queryString) {
      return "";
    }

    return document.URL.split('?')[1].split('&')
  }
  function SetCookie(URLParams) {
    for (var i = 0; i < URLParams.length; i++) {
      if (URLParams[i].includes(MeuCookie)) {
        return document.cookie = (URLParams[i] + "; " + document.location.pathname + "; domain=" + document.domain)
      }
    }
  }
  SetCookie(URLParams())
}

criaCookie('lmdsid')
console.log(document.cookie)
