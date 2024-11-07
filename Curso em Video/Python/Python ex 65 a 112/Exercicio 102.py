# Exercicio 102
# função fatorial() recebe dois parametros
# numero a calcular e show
# show é um valor logico(opcional) indica se sera mostrado ou nao a fatoração

def fatorial(n,show = False):
    '''
    ->Calcula fatorial de um numero.
    :param n: o Numero a ser fatorado
    :param show: (opicional), mostra ou nao a conta da fatoração
    :return: O valor fatorial do numero N
    '''
    f = 1

    for c in range( n , 0 , -1):
        f *= c
        if show:
            print(c, end='')
            if c > 1 :
                print(f' x ',end='')
            else:
                print(f' = ',end='')
    return f


print(fatorial(5))
print(fatorial(4, show = True))
print(fatorial(3, show = True))
help(fatorial)