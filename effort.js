As tags abaixo foram feitas com a vista direta do SF 'sf/my.sf.com/Ndocaso'

// Effort Hours para casos tag
//doubleclick
var clickeff = document.getElementsByClassName('last dataCol inlineEditWrite')

for(var i = 0 ; i < clickeff.length; i++){
    console.log(i)
    if(clickeff[i].id == '00N3600000RWn6W_ilecell'){
        var clickEvent  = document.createEvent ('MouseEvents');
        clickEvent.initEvent ('dblclick', true, true);
        clickeff[i].dispatchEvent (clickEvent);
    }
}
//edit
var effort = document.getElementById('00N3600000RWn6W').value
console.log(effort)
var contaEff = effort/60
var newEff = parseFloat(contaEff.toFixed(2))
console.log(newEff)

document.getElementById('00N3600000RWn6W').value = newEff 

//save
document.getElementsByClassName('pbButton')[5].children[1].click();



// Effort Hours para casos shopping
//doubleclick
var clickeff = document.getElementsByClassName('dataCol ww-value ww-required inlineEditWrite')
for(var i = 0 ; i < clickeff.length; i++){
    console.log(i)
    if(clickeff[i].id == '00N3600000RWn6W_ilecell'){
        var clickEvent  = document.createEvent ('MouseEvents');
        clickEvent.initEvent ('dblclick', true, true);
        clickeff[i].dispatchEvent (clickEvent);
    }
}
//edit
var effort = document.getElementById('00N3600000RWn6W').value
console.log(effort)
var contaEff = effort/60
var newEff = parseFloat(contaEff.toFixed(2))
console.log(newEff)

document.getElementById('00N3600000RWn6W').value = newEff 

//save
document.getElementsByClassName('pbButton')[5].children[1].click();
