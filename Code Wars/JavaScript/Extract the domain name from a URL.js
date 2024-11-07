// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    url = url.split('www.')[1] || url.split('//')[1] || url
    url = url.split('.')[0]
    return url
    
}

url = "http://github.com/carbonfive/raygun"
console.log(domainName(url))

url = "http://www.zombie-bites.com"
console.log(domainName(url))

url = "https://www.cnet.com"      
console.log(domainName(url))

url = "http://google.com"
console.log(domainName(url))

url = "www.xakep.ru"
console.log(domainName(url))

url = "https://youtube.com"
console.log(domainName(url))

url = "http://google.co.jp"
console.log(domainName(url))


url = "http://www.hpy5o99i1und81j67m2v2al.name"
console.log(domainName(url))
