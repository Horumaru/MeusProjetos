from random import randint
computador = randint(0,10)
print('Chute um numero entre zero e dez')
print('Qual é seu chute?')
acertou = False
palpites = 0
print(computador)
while not acertou:
    jogador = int(input('Qual é seu palpite?'))
    palpites += 1
    if jogador == computador:
        acertou = True
    else:
        if jogador < computador:
            print('mais que isso tente de novo')
        elif jogador > computador:
            print('menos que isso tente de novo')
print('Acertou em {} tantativas. Parabéns!'.format(palpites))
