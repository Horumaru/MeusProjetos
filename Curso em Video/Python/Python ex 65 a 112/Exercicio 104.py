# # Exercicio 104
# leiaint() funciona igual o imput do python
# mas só avança de for um numerico
# n = leiaint('digite um numero ')

def leiaint(n):
    cont = 0
    while True:
        if n.isnumeric():
            int(n)
            return n
        else:
            if cont == 1:
                print('\033[0;31mErro! Digite um valor númerico.\033[m')
            n = str(input('Digite um numero: '))
            cont = 1



n = leiaint('Digite um numero: ')
print(f'Voce acabou de digitar o numero {n}')
