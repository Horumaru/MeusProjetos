# Exercicio 100 - lista chamada numeros[]
# duas funções sorteio() e somaPar()
# a primeira sorteia 5 numeros e coloca dentro da lista
# a segunda mostra a soma de todos os pares da lista
from random import randint
from time import sleep


def sorteio(lista):
    print('Sorteando 5 valores da lista', end=' ')
    for i in range(5):
        n = randint(0,10)
        lista.append(n)
        print(n, end=' ', flush= True)
        sleep(.3)
    print('pronto!')
    return lista


def somaPar(lista):
    soma = 0
    for i in lista:
        if i%2==0:
            soma = soma + i
    print(f'somando os valores pares de {lista}, temos {soma}')


lista = []
sorteio(lista)
somaPar(lista)
