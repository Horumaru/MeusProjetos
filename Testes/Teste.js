
var docs = document.getElementsByClassName('col-120 ng-scope')

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log("Loop iteration: " + i);
        docs[i].children[0].click()
    }, i * 500); // 500 milissegundos = meio segundo
}
