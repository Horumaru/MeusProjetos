a = 2
b = 1

equacao = input("Digite a fórmula geral da equação linear (a * x + b): ")
print(f"\nA entrada do usuário {equacao} é do tipo {type(equacao)}")

for x in range(5):
    y = eval(equacao)
    print(f"\nResultado da equação para x = {x} é {y}")

# def nome_funcao():
#     # bloco de comandos

def imprimir_mensagem(disciplina, curso):
    print(f"Minha primeira função em Python desenvolvida na disciplina: {disciplina}, do curso: {curso}.")

    
imprimir_mensagem("Python", "ADS")

def imprimir_mensagem(disciplina, curso):
    print(f"Minha primeira função em Python desenvolvida na disciplina: {disciplina}, do curso: {curso}.")

resultado = imprimir_mensagem("Python", "ADS")
print(f"Resultado = {resultado}")

def imprimir_mensagem(disciplina, curso):
    return f"Minha primeira função em Python desenvolvida na disciplina: {disciplina}, do curso: {curso}."

    
mensagem = imprimir_mensagem("Python", "ADS")
print(mensagem)

def converter_mes_para_extenso(data):
    mes = '''janeiro fevereiro março
      abril maio junho julho agosto
      setembro outubro novembro
      dezembro'''.split()
    d, m, a = data.split('/')
    mes_extenso = mes[int(m) - 1] # O mês 1, estará na posição 0!
    return f'{d} de {mes_extenso} de {a}'

print(converter_mes_para_extenso('10/05/2021'))

def somar(a, b):
    return a + b

r = somar(2)
print(r)


def calcular_desconto(valor, desconto=0): # O parâmetro desconto possui zero valor default
    valor_com_desconto = valor - (valor * desconto)
    return valor_com_desconto

valor1 = calcular_desconto(100) # Não aplicar nenhum desconto
valor2 = calcular_desconto(100, 0.25) # Aplicar desconto de 25%

print(f"\nPrimeiro valor a ser pago = {valor1}")
print(f"\nSegundo valor a ser pago = {valor2}")


def cadastrar_pessoa(nome, idade, cidade):
    print("\nDados a serem cadastrados:")
    print(f"Nome: {nome}")
    print(f"Idade: {idade}")
    print(f"Cidade: {cidade}")
    

cadastrar_pessoa("João", 23, "São Paulo")
cadastrar_pessoa("São Paulo", "João", 23)


def converter_maiuscula(texto, flag_maiuscula):
    if flag_maiuscula:
        return texto.upper()
    else:
        return texto.lower()


texto = converter_maiuscula(flag_maiuscula=True, texto="João") # Passagem nominal de parâmetros
print(texto)


def converter_minuscula(texto, flag_minuscula=True): # O parâmetro flag_minuscula possui True como valor default
    if flag_minuscula:
        return texto.lower()
    else:
        return texto.upper()


texto1 = converter_minuscula(flag_minuscula=True, texto="LINGUAGEM de Programação")
texto2 = converter_minuscula(texto="LINGUAGEM de Programação")

print(f"\nTexto 1 = {texto1}")
print(f"\nTexto 2 = {texto2}")


def imprimir_parametros(*args):
    qtde_parametros = len(args)
    print(f"Quantidade de parâmetros = {qtde_parametros}")
    
    for i, valor in enumerate(args):
        print(f"Posição = {i}, valor = {valor}")

        
print("\nChamada 1")        
imprimir_parametros("São Paulo", 10, 23.78, "João")

print("\nChamada 2")        
imprimir_parametros(10, "São Paulo")



def imprimir_parametros(**kwargs):
    print(f"Tipo de objeto recebido = {type(kwargs)}\n")
    qtde_parametros = len(kwargs)
    print(f"Quantidade de parâmetros = {qtde_parametros}")
    
    for chave, valor in kwargs.items():
        print(f"variável = {chave}, valor = {valor}")

        
print("\nChamada 1")        
imprimir_parametros(cidade="São Paulo", idade=33, nome="João")

print("\nChamada 2")        
imprimir_parametros(desconto=10, valor=100)


# Já que estamos falando sobre funções, 
# não podemos deixar de mencionar um poderoso recurso da linguagem Python: 
# a expressão "lambda". Expressões lambda (às vezes chamadas de formas lambda) 
# são usadas para criar funções anônimas 
# https://docs.python.org/3/reference/expressions.html#lambda.

(lambda x: x + 1)(x=3)
(lambda x, y: x + y)(x=3, y=2)
somar = lambda x, y: x + y
somar(x=5, y=3)