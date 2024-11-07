var itensSalvos = itensSalvos || {}

function item(key, value) {
    key = key.toString().toLowerCase().replaceAll(' ','')

    return itensSalvos[key] = value
}
item("um Texto de Exemplo   ", 11)
console.log(itensSalvos)


window.addEventListener('keydown', (event) => {
    console.log(event.key);
}, false);