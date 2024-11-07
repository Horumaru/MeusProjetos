function a(){
    if(document.querySelector('#txt-telefone-migracao').value != ''){return document.querySelector('#txt-telefone-migracao').value};
    if(document.querySelector('#txt-telefone-portabilidade').value != ''){return document.querySelector('#txt-telefone-portabilidade').value};
    if(document.querySelector('#txt-telefone-aquisicao').value != ''){return document.querySelector('#txt-telefone-aquisicao').value};
} a()




function criptografar(texto) {
    // Substitui os caracteres por versões codificadas
    return texto.replace(/ /g, "%20").replace(/-/g, "%45").replace(/\+/g, "%43").replace(/\(/g,"%28").replace(/\)/g,"%29");
}

function descriptografar(textoCriptografado) {
    // Reverte as substituições para os caracteres originais
    return textoCriptografado.replace(/%20/g, " ").replace(/%45/g, "-").replace(/%43/g, "+").replace(/%28/g,"(").replace(/%29/g,")");
}

// Texto original
const texto = "Olá mundo - teste + encriptação";

// Criptografia
const textoCriptografado = criptografar(texto);
console.log("Texto Criptografado:", textoCriptografado);

// Descriptografia
const textoOriginal = descriptografar(textoCriptografado);
console.log("Texto Original:", textoOriginal);
