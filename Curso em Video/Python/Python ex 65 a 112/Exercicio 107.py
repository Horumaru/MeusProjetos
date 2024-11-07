# cirar um modulo moeda .py que tenha as funções
# aumentar(),diminuir(),dobro() e metade()
# fazer um programa  que importe esse modulo e use as funções.

from modulos import moeda

p = float(input('Digite o preço: R$ '))
print(f'A metade de {p} é {moeda.metade(p)}')
print(f'O  dobro de {p} é {moeda.dobro(p)}')
print(f'Aumentando 10%, de {p} temos {moeda.aumentar(p)}')
print(f'Reduzindo  13%, temos {moeda.diminuir(p)}')