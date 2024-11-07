# digitar um numero inteiro
# digitar um numero real

def leiaInt(n):
    while True:
        try:
            n = int(input('digite um numero inteiro: '))
        except ValueError:
            print ('Esse não é um Numero inteiro válido por favor digite novamente')
            continue 
        except KeyboardInterrupt:
            print ('entrada interrompida pelo usuario')
            return 0 
        else:
            print('Esse é um numero válido ')
            return n


def leiafloat(n=0):
    
    while True:
        try:
            n = float(input('digite um numero real: '))
        except ValueError:
            print ('Esse não é um valor válido por favor digite novamente')
            continue
        except KeyboardInterrupt:
            print (' Entrada interrompida pelo usuario')
            return 0 
        else:
            print('Esse é um numero válido ')
            return n

i = leiaInt('digite um numero inteiro')
r = leiafloat('Digite um numero real')

print(f'O numero inteiro digitado foi {i} e o numero real foi {r}')
