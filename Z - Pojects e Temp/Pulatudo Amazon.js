// Constantes para textos de busca
const TEXTOS_PULAR = {
    abertura: 'pular abertura',
    anuncio: 'pular',
    resumo: 'pular resumo'
};

// Seletores dos elementos
const seletores = {
    abertura: '.fqye4e3.f1ly7q5u.fk9c3ap.fz9ydgy.f1xrlb00.f1hy0e6n.fgbpje3.f1uteees.f1h2a8xb.atvwebplayersdk-skipelement-button.f1cg7427.fiqc9rt.fg426ew.f1ekwadg',
    puloAd: '.fu4rd6c.f1cw2swo',
    resumo: '#dv-web-player > div > div:nth-child(1) > div > div > div.webPlayerSDKUiContainer > div > div > div > div > div.atvwebplayersdk-overlays-container.fpqiyer > div.fkhz08q.f8hspre > div.f18oq18q.f6suwnu.fhxjtbc.f1ngx5al > div.atvwebplayersdk-action-buttons.fxo8s2s > div > div > button'
};

// Função melhorada para clicar em elementos
function clicarSeExistir(seletor, textoEsperado) {
    try {
        const elemento = document.querySelector(seletor) || document.getElementsByClassName(seletor.replace('.', ''))[0];
        if (elemento && elemento.innerText.toLowerCase().includes(textoEsperado)) {
            elemento.click();
            console.log(`Clicado com sucesso: ${textoEsperado}`);
        }
    } catch (erro) {
        console.error(`Erro ao tentar clicar em ${textoEsperado}:`, erro);
    }
}

// Executa as verificações para cada botão
Object.entries(seletores).forEach(([tipo, seletor]) => {
    clicarSeExistir(seletor, TEXTOS_PULAR[tipo]);
});