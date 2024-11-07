# Exercicio 65 - ler varios inteiros
# mostrar a media entre todos, 
# mostrar o maior e menor
# perguntar se quer continuar ou nao digitar valores. (S/N)

# Array para guardar os valores digitados
valores = []

# Numero base para comparações
numero = int(input('Digite um numero inteiro para continuar: '))
valores.append(numero)
maior =  numero
menor =  numero


#! Repetição para adição de numeros no array
continuar = 'S'
while(continuar != 'N'):
    numero = int(input('Digite um numero inteiro para continuar: '))
    valores.append(numero)

    # verificação de maior e menor numero    
    if (numero > maior):
        maior = numero
    elif(numero < menor):
        menor = numero
    
    # Teste de continuidade do array
    continuar = input('Deseja continuar? S/N -->  ' ).upper()

#! Soma e média
soma = 0 
for i in range(len(valores)):
    soma = soma + valores[i]
media = soma / len(valores)

#! Print no console para visualização do usuario.
print('Os valores digitados foram \n {}'.format(valores))
print('o maior foi {}, e o menor foi {}'.format(maior, menor))
print('A soma dos valores é {}, e a média é {}'.format(soma, media))
