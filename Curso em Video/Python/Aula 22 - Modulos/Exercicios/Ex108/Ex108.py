import moeda

p = float(input('Digite o preço: R$ '))
print(f'A metade de {moeda.moeda(p)} é {moeda.moeda(moeda.metade(p))}')
print(f'O Dobro de {moeda.moeda(p)} é {moeda.moeda(moeda.dobro(p))}')
print(f'Aumentando 10% de {moeda.moeda(p)} é {moeda.moeda(moeda.aumentar(p, 10))}')
print(f'Reduzindo 13% de {moeda.moeda(p)} é {moeda.moeda(moeda.diminuir(p, 13))}')