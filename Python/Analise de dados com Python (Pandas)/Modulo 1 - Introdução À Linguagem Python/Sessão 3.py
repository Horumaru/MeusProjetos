a = 5
b = 10

if a < b:
    print("a é menor do que b")
    r = a + b
    print(r)

a = 10
b = 5

if a < b:
    print("a é menor do que b")
    r = a + b
    print(r)
else:
    print("a é maior do que b")
    r = a - b
    print(r)

codigo_compra = 5111

if codigo_compra == 5222:
    print("Compra à vista.")
elif codigo_compra == 5333:
    print("Compra à prazo no boleto.")
elif codigo_compra == 5444:
    print("Compra à prazo no cartão.")
else:
    print("Código não cadastrado")

qtde_faltas = int(input("Digite a quantidade de faltas: "))
media_final = float(input("Digite a média final: "))

if qtde_faltas <= 5 and media_final >= 7:
    print("Aluno aprovado!")
else:
    print("Aluno reprovado!")

A = 15
B = 9
C = 9

print(B == C or A < B and A < C)
print((B == C or A < B) and A < C )

numero = 1
while numero != 0:
    numero = int(input("Digite um número: "))
    if numero % 2 == 0:
        print("Número par!")
    else:
        print("Número ímpar!")

nome = "Guido"
for c in nome:
    print(c)

nome = "Guido"
for i, c in enumerate(nome):
    print(f"Posição = {i}, valor = {c}")

for x in range(5):
    print(x)

# Método 1
for i in range(10):
    print(i)

# Método 2
for i in range(0, 5):
    print(i)
    
#Método 3
for i in range(0, 20, 2):
    print(i)

# Exemplo de uso do break
disciplina = "Linguagem de programação"
for c in disciplina:
    if c == 'a':
        break
    else:
        print(c)

# Exemplo de uso do continue
disciplina = "Linguagem de programação"
for c in disciplina:
    if c == 'a':
        continue
    else:
        print(c)


texto = """
A inserção de comentários no código do programa é uma prática normal.
Em função disso, toda linguagem de programação tem alguma maneira de permitir que comentários sejam inseridos nos programas.
O objetivo é adicionar descrições em partes do código, seja para documentá-lo ou para adicionar uma descrição do algoritmo implementado (BANIN, p. 45, 2018)."
"""
for i, c in enumerate(texto):
    if c == 'a' or c == 'e':
        print(f"Vogal '{c}' encontrada, na posição {i}")
    else:
        continue