x = 10
nome = 'aluno'
nota = 8.75
fez_inscricao = True

print(type(x))
print(type(nome))
print(type(nota))
print(type(fez_inscricao))

nome = input("Digite um nome: ")
print(nome)
print("Olá %s, bem vindo a disciplina de programação. Parabéns pelo seu primeiro hello world" % (nome))
print("Olá {}, bem vindo a disciplina de programação. Parabéns pelo seu primeiro hello world".format(nome))
print(f"Olá {nome}, bem vindo a disciplina de programação. Parabéns pelo seu primeiro hello world")

# Qual o resultado armazendo na variável operacao_1: 25 ou 17? 
operacao_1 = 2 + 3 * 5

# Qual o resultado armazendo na variável operacao_2: 25 ou 17? 
operacao_2 = (2 + 3) * 5

# Qual o resultado armazendo na variável operacao_3: 4 ou 1?
operacao_3 = 4 / 2 ** 2

# Qual o resultado armazendo na variável operacao_4: 1 ou 5?
operacao_4 = 13 % 3 + 4


print(f"Resultado em operacao_1 = {operacao_1}")
print(f"Resultado em operacao_2 = {operacao_2}")
print(f"Resultado em operacao_3 = {operacao_3}")
print(f"Resultado em operacao_4 = {operacao_4}")


a = 2
b = 0.5
c = 1
x = input("Digite o valor de x: ")

y = a * x ** 2 + b * x + c

print(f"O resultado de y para x = {x} é {y}.")

print(type(a))
print(type(b))
print(type(c))
print(type(x))

a = 2
b = 0.5
c = 1
x = input("Digite o valor de x: ")

x = float(x) # aqui fazemos a conversão da string para o tipo numérico

y = a * x ** 2 + b * x + c

print(f"O resultado de y para x = {x} é {y}.")