var pesoGramas = {
    'kg': 1000,
    'g': 1,
    'mg': 0.001,
};

function Produto(nome, valor, peso, medida = 'g') {
    this.nome = nome;
    this.valor = valor;
    this.peso = peso * pesoGramas[medida];
    this.medida = medida;
}

function adicionarProduto() {
    const produtosWrapper = document.querySelector('.produtos-wrapper');
    const numProdutos = produtosWrapper.children.length + 1;
    
    const novoProduto = document.createElement('div');
    novoProduto.className = 'produto';
    novoProduto.innerHTML = `
        <h2>Produto ${numProdutos}</h2>
        <div class="form-row">
            <div class="form-group">
                <input type="text" id="nome${numProdutos}" placeholder="Nome do produto">
            </div>
            <div class="form-group">
                <input type="number" step="0.01" id="valor${numProdutos}" placeholder="Valor">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group peso-group">
                <input type="number" step="0.01" id="peso${numProdutos}" placeholder="Peso">
                <select id="medida${numProdutos}">
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="mg">mg</option>
                </select>
            </div>
        </div>
        <button onclick="removerProduto(this)" class="btn-remover" title="Remover produto">
            <i class="fas fa-trash"></i>
        </button>
    `;
    
    produtosWrapper.appendChild(novoProduto);
}

function removerProduto(button) {
    const produto = button.closest('.produto');
    if (produto && document.querySelectorAll('.produto').length > 2) {
        produto.remove();
    } else {
        alert('É necessário manter pelo menos 2 produtos para comparação!');
    }
}

function compararProdutos() {
    const produtos = [];
    const elementos = document.querySelectorAll('.produto');
    const medidaReferencia = document.getElementById('medida1').value;
    
    // Coleta os produtos
    elementos.forEach((elemento, index) => {
        const nome = document.getElementById(`nome${index + 1}`).value;
        const valor = parseFloat(document.getElementById(`valor${index + 1}`).value);
        const peso = parseFloat(document.getElementById(`peso${index + 1}`).value);
        const medida = document.getElementById(`medida${index + 1}`).value;
        
        if (nome && !isNaN(valor) && !isNaN(peso)) {
            produtos.push(new Produto(nome, valor, peso, medida));
        }
    });

    if (produtos.length < 2) {
        alert('Por favor, preencha pelo menos 2 produtos para comparar!');
        return;
    }

    // Ordena os produtos do mais barato para o mais caro
    produtos.sort((a, b) => (a.valor / a.peso) - (b.valor / b.peso));

    const melhorPreco = produtos[0].valor / produtos[0].peso;
    const piorPreco = produtos[produtos.length - 1].valor / produtos[produtos.length - 1].peso;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <h3>Comparação de Preços (R$ por ${medidaReferencia})</h3>
    `;

    const textoMedida = {
        'kg': 'Preço por quilo',
        'g': 'Preço por grama',
        'mg': 'Preço por miligrama'
    };

    produtos.forEach((produto, index) => {
        let precoUnidade;
        switch(medidaReferencia) {
            case 'kg':
                precoUnidade = produto.valor / (produto.peso / 1000);
                break;
            case 'g':
                precoUnidade = produto.valor / produto.peso;
                break;
            case 'mg':
                precoUnidade = produto.valor / (produto.peso * 1000);
                break;
        }
        
        let cardClass = 'neutro';
        if (index === 0) {
            cardClass = 'melhor';
        } else if (index === produtos.length - 1) {
            cardClass = 'pior';
        }

        resultado.innerHTML += `
            <div class="produto-card ${cardClass}">
                <p><strong>${produto.nome}</strong></p>
                <ul>
                    <li>${textoMedida[medidaReferencia]}: R$ ${precoUnidade.toFixed(2)}/${medidaReferencia}</li>
                </ul>
                ${index === 0 ? '<div class="economia-chip">Melhor custo-benefício</div>' : ''}
            </div>
        `;
    });

    const economiaPercentual = ((piorPreco / melhorPreco - 1) * 100);
    
    if (produtos.length > 1) {
        resultado.innerHTML += `
            <p style="font-size: 12px; color: #5f6368; margin-top: 8px;">
                Economia de até ${economiaPercentual.toFixed(1)}% entre o mais barato e o mais caro
            </p>
        `;
    }
}