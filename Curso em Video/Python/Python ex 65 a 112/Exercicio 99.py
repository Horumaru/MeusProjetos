# Exercicio 99 - desempacotamento
# função cahamda maior()
# mostrar quantos valores foram informados e mostrar o maior
from time import sleep


def maior(*int):
    print('Analisando valores passados...')
    sleep(.5)
    if len(int) == 0:
        print('Não foram digitados valores\n')
        print(f'Foram passados {len(int)} valores ao todo.')
        print(f'O maior valor não existe')
    else:
        maior = int[0]     
        for i in int:
            if i > maior:
                maior = i
            print(i, end= ' ')
            sleep(.3)

        print(f'Foram passados {len(int)} valores ao todo.')
        print(f'O maior valor informado foi {maior}')
    print('-='*30)


maior(2,9,4,5,7,1)
maior(4,7,0)
maior(1,2)
maior(6)
maior()
