def aumentar(p=0, a=0):
    r = p+ ((p*a)/100 )
    return moeda(r)
    
def diminuir(p=0, d=0):
    r = p - ((p*d)/100 )
    return moeda(r)

def dobro(p=0):
    r = p*2
    return moeda(r)
    
def metade(p=0):
    r = p/2
    return moeda(r)
    
def moeda(preco=0, moeda='R$'):
    return f'{moeda}{preco:>8.2f}'.replace('.',',')

def resumo(prc,aum,dim):
    print('-'*30)
    print('RESUMO DO VALOR'.center(30))
    print('-'*30)

    print(f'Preço analisado: \t{prc}')
    print(f'Dobro do preço: \t{dobro(prc)}')
    print(f'Metade do preço: \t{metade(prc)}')
    print(f'80% de aumento: \t{aumentar(prc,aum)}')
    print(f'35% de redução: \t{diminuir(prc,dim)}')
    
    print('-'*30)