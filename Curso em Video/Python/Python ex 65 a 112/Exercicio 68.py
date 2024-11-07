# Exercicio 68 - programa que jogue par ou impar com o computador
# o jogo para quandoo jogador PERDER
# mostrar a quantidade de vitórias consecutivas do jogador

from random import randint
#ganhou = True
#while ganhou:
numero = int(input('Diga um valor: '))

#par_ou_impar = str(input('Par ou Impar? [P/I]')).upper().strip()[0]


pc_numero = randint(0, 10)
print(f'o computador escolheu {pc_numero}')

soma = numero + pc_numero

print(f'Voce jogou {numero}, e o computador jogou {pc_numero}, a soma deu {soma}')
if (soma %2 == 0):
    print('a soma deu par')
else:
    print('a soma deu impar')



