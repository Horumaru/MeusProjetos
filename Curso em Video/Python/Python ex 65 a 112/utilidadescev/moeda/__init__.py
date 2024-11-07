from utilidadescev import dado

def dobro(x, mod=False):
    r = x*2
    if mod:
        return moeda(r)
    else:
        return r


def metade(x, mod=False) :
    r = x/2
    if mod:
        return moeda(r)
    else:
        return r

def aumentar(x, p , mod=False):
    r = ((p * x) / 100 ) + x
    if mod:
        return moeda(r)
    else:
        return r

def diminuir(x, p, mod=False):
    r = x - ((p * x) / 100 )
    if mod:
        return moeda(r)
    else:
        return r
def moeda(x):
    r = f'R$ {x:.2f}'
    return r

def resumo(p, aum, red):

    print('-'*25)    
    print('     resumo do valor')
    print('-'*25)
    print(f'Preço analisado: R$ {p}')
    print(f'Dobra do preço : R$ {p*2}') 
    print(f'metade do peço : R$ {p/2}')
    print(f'{aum}% de aumento : R$ {aumentar(p, aum)}')
    print(f'{red}% de redução : R$ {diminuir(p, red)}')