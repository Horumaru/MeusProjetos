var string1 = "camelCasing"
var string2 = "identifier"
var string3 = ""
var string4 = "camel CasingTest"
var string5 = "caseYoungYoung"

function solution(txt) {
    String(txt)
    for (var i = 0; i < txt.length; i++) {
        if (txt[i] === txt[i].toUpperCase()) {
            if (txt[i] == ' ' || txt[i-1] == ' ') {
                continue
            }
            else {
                txt = txt.replaceAll(txt[i], ' ' + txt[i])
                i++
            }
        }
    }
    return txt
}
console.log('Scing 1 -> ',solution(string1))
console.log('Scing 2 -> ',solution(string2))
console.log('Scing 3 -> ',solution(string3))
console.log('Scing 4 -> ',solution(string4))
console.log('Scing 4 -> ',solution(string5))