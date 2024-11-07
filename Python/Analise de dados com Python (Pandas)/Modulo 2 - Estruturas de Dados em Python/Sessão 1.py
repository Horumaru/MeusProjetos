texto = "Aprendendo Python na disciplina de linguagem de programação."

print(f"Tamanho do texto = {len(texto)}")
print(f"Python in texto = {'Python' in texto}")
print(f"Quantidade de y no texto = {texto.count('y')}")
print(f"As 5 primeiras letras são: {texto[0:6]}")
print(f"As letras de 10 a 15 são: {texto[9:15]}")
print(f"A última letra é: {texto[-1]}")
print(f"A penúltima letra é: {texto[-2]}")
print(f"A letra l em maiúscula é: {texto.upper().count('L')}")
print(f"A letra l em minúscula é: {texto.count('l')}")


texto = "Aprendendo Python na disciplina de linguagem de programação."

print(texto.upper())
print(texto.replace("i", 'XX'))
print(texto.replace("Python", "Java"))
print(texto.replace("a", "X", 2))
print(texto.split())
print(texto.split('a'))
print(texto.split(' '))
print(texto.split(' ', 2))

texto = "Aprendendo Python na disciplina de linguagem de programação."
print(f"texto = {texto}")
print(f"Tamanho do texto = {len(texto)}\n")

palavras = texto.split()
print(f"palavras = {palavras}")
print(f"Tamanho de palavras = {len(palavras)}")


texto = """Operadores de String
Python oferece operadores para processar texto (ou seja, valores de string).
Assim como os números, as strings podem ser comparadas usando operadores de comparação:
==, !=, <, > e assim por diante.
O operador ==, por exemplo, retorna True se as strings nos dois lados do operador tiverem o mesmo valor (Perkovic, p. 23, 2016).
"""
print(f"Tamanho do texto = {len(texto)}")
texto = texto.lower()
texto = texto.replace(",", "").replace(".", "").replace("(", "").replace(")", "").replace("\n", " ")
lista_palavras = texto.split()
print(f"Tamanho da lista de palavras = {len(lista_palavras)}")

total = lista_palavras.count("string") + lista_palavras.count("strings")

print(f"Quantidade de vezes que string ou strings aparecem = {total}")


vogais = ['a', 'e', 'i', 'o', 'u'] # também poderia ter sido criada usando aspas duplas

for vogal in vogais:
    print (f'Posição = {vogais.index(vogal)}, valor = {vogal}')


# Mesmo resultado.
vogais = []
print(f"Tipo do objeto vogais = {type(vogais)}")

vogais.append('a')
vogais.append('e')
vogais.append('i')
vogais.append('o')
vogais.append('u')

for p, x in enumerate(vogais):
    print(f"Posição = {p}, valor = {x}")

frutas = ["maça", "banana", "uva", "mamão", "maça"]
notas = [8.7, 5.2, 10, 3.5]

print("maça" in frutas) # True
print("abacate" in frutas) # False
print("abacate" not in frutas) # True
print(min(frutas)) # banana
print(max(notas)) # 10
print(frutas.count("maça")) # 2
print(frutas + notas)
print(2 * frutas)

lista = ['Python', 30.61, "Java", 51 , ['a', 'b', 20], "maça"]

print(f"Tamanho da lista = {len(lista)}")

for i, item in enumerate(lista):
    print(f"Posição = {i},\t valor = {item} -----------------> tipo individual = {type(item)}")

print("\nExemplos de slices:\n")

print("lista[1] = ", lista[1])
print("lista[0:2] = ", lista[0:2])
print("lista[:2] = ", lista[:2])
print("lista[3:5] = ", lista[3:5])
print("lista[3:6] = ", lista[3:6])
print("lista[3:] = ", lista[3:])
print("lista[-2] = ", lista[-2])
print("lista[-1] = ", lista[-1])
print("lista[4][1] = ", lista[4][1])


linguagens = ["Python", "Java", "JavaScript", "C", "C#", "C++", "Swift", "Go", "Kotlin"]
#linguagens = '''Python Java JavaScript C C# C++ Swift Go Kotlin'''.split() # Essa sintaxe produz o mesmo resultado que a linha 1

print("Antes da listcomp = ", linguagens)

linguagens = [item.lower() for item in linguagens]

print("\nDepois da listcomp = ", linguagens)

linguagens = '''Python Java JavaScript C C# C++ Swift Go Kotlin'''.split()
print("Antes da listcomp = ", linguagens)

for i, item in enumerate(linguagens):
    linguagens[i] = item.lower()
    
print("\nDepois da listcomp = ", linguagens)


linguagens = '''Python Java JavaScript C C# C++ Swift Go Kotlin'''.split()

linguagens_java = [item for item in linguagens if "Java" in item]

print(linguagens_java)

linguagens = '''Python Java JavaScript C C# C++ Swift Go Kotlin'''.split()
linguagens_java = []

for item in linguagens:
    if "Java" in item:
        linguagens_java.append(item)

print(linguagens_java)


# Exemplo 1
print("Exemplo 1")
linguagens = '''Python Java JavaScript C C# C++ Swift Go Kotlin'''.split()

nova_lista = map(lambda x: x.lower(), linguagens)
print(f"A nova lista é = {nova_lista}\n")

nova_lista = list(nova_lista)
print(f"Agora sim, a nova lista é = {nova_lista}")


# Exemplo 2
print("\n\nExemplo 2")
numeros = [0, 1, 2, 3, 4, 5]

quadrados = list(map(lambda x: x*x, numeros))
print(f"Lista com o número elevado a ele mesmo = {quadrados}\n")



numeros  = list(range(0, 21))

numeros_pares = list(filter(lambda x: x % 2 == 0, numeros))

print(numeros_pares)


vogais = ('a', 'e', 'i', 'o', 'u')
print(f"Tipo do objeto vogais = {type(vogais)}")

for p, x in enumerate(vogais):
    print(f"Posição = {p}, valor = {x}")

vogais = ()

vogais.append('a')

vogais = ('a', 'e', 'i', 'o', 'u')

for item in enumerate(vogais):
    print(item)
    
# print(tuple(enumerate(vogais)))
# print(list(enumerate(vogais)))


vogais_1 = {'aeiou'} # sem uso do construtor
print(type(vogais_1), vogais_1)

vogais_2 = set('aeiouaaaaaa') # construtor com string
print(type(vogais_2), vogais_2)

vogais_3 = set(['a', 'e', 'i', 'o', 'u']) # construtor com lista
print(type(vogais_3), vogais_3)

vogais_4 = set(('a', 'e', 'i', 'o', 'u')) # construtor com tupla
print(type(vogais_4), vogais_4)

print(set('banana'))


def create_report():
    componentes_verificados = set(['caixas de som', 'cooler', 'dissipador de calor', 'cpu', 'hd', 'estabilizador', 'gabinete', 'hub', 'impressora', 'joystick', 'memória ram', 'microfone', 'modem', 'monitor', 'mouse', 'no-break', 'placa de captura', 'placa de som', 'placa de vídeo', 'placa mãe', 'scanner', 'teclado', 'webcam'])
    componentes_com_defeito = set(['hd', 'monitor', 'placa de som', 'scanner'])
    
    qtde_componentes_verificados = len(componentes_verificados)
    qtde_componentes_com_defeito = len(componentes_com_defeito)
    
    componentes_ok = componentes_verificados.difference(componentes_com_defeito)
    
    print(f"Foram verificados {qtde_componentes_verificados} componentes.\n")
    print(f"{qtde_componentes_com_defeito} componentes apresentaram defeito.\n")
    
    print("Os componentes que podem ser vendidos são:")
    for item in componentes_ok:
        print(item)


create_report()