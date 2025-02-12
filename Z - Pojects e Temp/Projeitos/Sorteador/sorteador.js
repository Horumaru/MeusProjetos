let listaDeCoisas = [];

function adicionarItem() {
    const itemInput = document.getElementById('item');
    const item = itemInput.value.trim();
    const resultado = document.getElementById('resultado');
    
    if (item === '') {
        //alert('Por favor, digite um item válido!');
        return;
    }

    if (listaDeCoisas.includes(item)) {
        listaDeCoisas = listaDeCoisas.filter(i => i !== item);
        resultado.textContent = `Item "${item}" removido da lista!`;
    } else {
        listaDeCoisas.push(item);
        resultado.textContent = `Item "${item}" adicionado à lista!`;
    }

    // Remove itens vazios da lista
    listaDeCoisas = listaDeCoisas.filter(item => item !== '');

    atualizarLista();
    itemInput.value = "";
}

function atualizarLista() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';
    
    listaDeCoisas.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });
}

function sortear() {
    if (listaDeCoisas.length === 0) {
        alert('Adicione itens antes de sortear!');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.textContent = 'Sorteando...';

    // Efeito de "sorteando"
    setTimeout(() => {
        // if (Math.random() < 0.5) {
        //     resultado.textContent = 'Vamos fazer amorzinho gostoso!!';
        //     resultado.innerHTML += '<br>HMMMMMM!!!';
        // } else {
            const indice = Math.floor(Math.random() * listaDeCoisas.length);
            resultado.textContent = `Item sorteado: ${listaDeCoisas[indice]}`;
        // }
    }, 1000);
}

// Adiciona event listener para a tecla Enter
document.getElementById('item').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarItem();
    }
});