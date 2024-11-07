# Exercicio 96 - fazer uma função chamada area() 
# area() recebe as dimenções de um terreno retangular largura e comprimento
# mostrar a area do terreno

def area(a,b):
    terreno = a*b
    print(f'A area do seu terreno de {a} x {b} é de {terreno}m²')


print('-'*25)
print(' Controle de terrenos')
print('-'*25)
a = float(input('Largura(m) : '))
b = float(input('Comprimento(m) : '))
area(a,b)