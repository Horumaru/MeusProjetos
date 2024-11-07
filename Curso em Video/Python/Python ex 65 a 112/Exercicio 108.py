# EX 108
# Adaptar o 107 criando uma função adicional chamada moeda()
# mostrar os valores monetaris formatados

from modulos import moeda

p  = float(input('Digite o preço: R$'))
print(f'A metade de {moeda.moeda(p)} é {moeda.moeda(moeda.metade(p))}')
print(f'O Dobro de {moeda.moeda(p)} é {moeda.moeda(moeda.dobro(p))}')
print(f'Aumentando 10% de {moeda.moeda(p)}, temos {moeda.moeda(moeda.aumentar(p))}')
