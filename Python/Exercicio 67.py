# Exercicio 67 - fazer uma tabuada de vários valores
# parar o programa quandoo numero for negativo

while True:
    numero = int(input('Quer ver a tabuada de qual valor? '))
    if 0 > numero:
        print('-'*20)
        print('Programa CALCULADORA finalizado')
        print('-'*20)
        break
    
    print('-'*20)
    for i in range(1, 11):
        print(f'{numero} x {i} = {numero*i}')
    print('-'*20)