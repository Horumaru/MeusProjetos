function purchase_id() {
  return new Date.getTime()
}

item_data = []
const itens = document.getElementsByClassName('p-7 m-5 w-96 h-auto border-2 border-gray-300 shadow-lg hover:bg-gray-100 hover:text-black duration-300 flex flex-col justify-between')



for (var i = 0; i < itens.length; i++) {
  const item_titulo = itens[i].children[0].innerText
  const item_preco = Number(itens[i].children[3].firstChild.lastElementChild.innerText.replace('R$', '').replace(',', '.'))
  purchaseId = purchase_id()
  item_data.push({
    index: i,
        item_name: item_titulo,
        affiliation: "inbravisae",
        price: item_preco,
        quantity: 1
    
  });
}



for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e){
   gtag('event', 'btn_whats', {
     'event_category': 'clique'
 });
  console.log('foi');
  });
   
}