# Exercicio 91 - 4 jogadorem jogam um dado e quarda o resultado em um dicionario
# colocar o dicionario em ordem
# mostrar o maior numero
from random import randint
from time import sleep
from operator import itemgetter
jogador = {}
for i in range(4):
    jogador[f'Jogador {i}'] = randint(1,6)
print()

for key, value in jogador.items():
    print(f'O {key} tirou: {value}')
    #sleep(1)
ranking = []
ranking = sorted(jogador.items() , key=itemgetter(1), reverse=True)
print('\n== + Ranking dos Jogadores + ==')
for i , v in enumerate(ranking):
    print(f'   {i+1}º lugar: {v[0]} com {v[1]}')