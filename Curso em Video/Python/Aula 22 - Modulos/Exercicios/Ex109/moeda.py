def aumentar(p=0, a=0, form= False):
    r = p+ ((p*a)/100 )
    if form == True:
        return moeda(r)
    else:
        return r

def diminuir(p=0, d=0, form= False):
    r = p - ((p*d)/100 )
    if form == True:
        return moeda(r)
    else:
        return r


def dobro(p=0, form= False):
    r = p*2
    if form == True:
        return moeda(r)
    else:
        return r

def metade(p=0, form= False):
    r = p/2
    if form == True:
        return moeda(r)
    else: 
        return r

def moeda(preco=0, moeda='R$'):
    return f'{moeda}{preco:>8.2f}'.replace('.',',')