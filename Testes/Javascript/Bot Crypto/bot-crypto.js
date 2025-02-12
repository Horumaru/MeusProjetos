//  async function start() {
//     const data = await getData("https://api.binance.com");
//     console.log("Price now: " + data);
//     const BUY_PRICE = 60000;
//     if (data.price <= BUY_PRICE)
//         await buy("BTCUSDT");
//     else if (data.price >= (BUY_PRICE * 1.1))
//         await sell("BTCUSDT");
//     else
//         console.log("Wait...");



//const url = "https://www.mercadobitcoin.net/api/BTC/ticker/";
const url ="https://api.mercadobitcoin.net/api/v4/tickers"
const market = "BTC-BRL"

async function getPrice() {
    try {
        // Constrói a URL com parâmetros dinâmicos
        const response = await fetch(`${url}?symbols=${market}`);
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }
        const data = await response.json();
        const lastPrice = data[0].last
        console.log(`Preço BTC-BRL: R$ ${lastPrice}`);
        return lastPrice;
    } catch (error) {
        console.error("Erro ao buscar preço:", error.message);
        return null;
    }
}

async function monitor() {
    
    const price = await getPrice();
    if (!price) return;
    
    const BUY_PRICE = 566042.17090074; // 🛒 Defina o preço de compra
    const SELL_PRICE = BUY_PRICE * 1.1; // 💰 Vender se subir 10%
    
    // 🧹 Limpa o terminal antes de imprimir o painel
    console.clear();
    console.log("===================================");
    console.log(" 📊 PAINEL DE MONITORAMENTO BTC/BRL ");
    console.log("===================================");
    
    console.log(` 🏷  Preço Atual  : R$ ${price}`);
    console.log(` 💰 Preço Compra : R$ ${BUY_PRICE}`);
    console.log(` 💵 Preço Venda  : R$ ${SELL_PRICE}`);
    console.log("-----------------------------------");
    
    if (price <= BUY_PRICE) {
        console.log("💰 Hora de comprar!");
    } else if (price >= SELL_PRICE) {
        console.log("📈 Hora de vender!");
    } else {
        console.log("⌛ Aguardando condições ideais...");
    }
}

// 🟢 Agendar a execução a cada 5 segundos
var interval = setInterval(monitor, 5000);
//clearInterval(interval)