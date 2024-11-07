let amigo = {
    nome: 'José', 
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
        //this faz uma auto referencia ao objeto que pertence, aqui no caso, o objeto 'amigo'
    }

}
console.log(amigo)

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)