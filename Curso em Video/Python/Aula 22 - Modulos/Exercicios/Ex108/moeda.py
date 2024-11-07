def aumentar(p=0, a=0):
    r = p+ ((p*a)/100 )
    return r

def diminuir(p=0, d=0):
    r = p - ((p*d)/100 )
    return r


def dobro(p=0):
    return p*2

def metade(p=0):
    return p/2

def moeda(preco=0,moeda='R$'):
    return f'{moeda}{preco:>8.2f}'.replace('.',',')