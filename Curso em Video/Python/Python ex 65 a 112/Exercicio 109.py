# modificar o 107
# para que aceite um parametro se o valor vai retornar formatado ou nao pela função moeda() do ex 108


from modulos import moeda

p = 1000 #float(input('Digite o Preço: R$'))

print(f'A metade de {moeda.moeda(p)} é {moeda.metade(p, True)}')
print(f'O dobro de {moeda.moeda(p)} é {moeda.dobro(p,True)}')
print(f'Aumentando 10%, temos {moeda.aumentar(p, 10,True)}')
print(f'Reduzindo 13% temos {moeda.diminuir(p, 13 , True)}')
