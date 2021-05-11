# Exercicio 66 - ler varios inteiros, parar com 999
# mostrar quantos numeros foram digitados e a soma entre eles
# desconsiderando o 999


# a soma dos X valores foi Y

quant = soma = 0
while True:
    numero = int(input('Digite um valor : '))
    if numero == 999:
        break
    soma += numero
    quant += 1
print(f'A soma dos {quant} números digitados é {soma}')
