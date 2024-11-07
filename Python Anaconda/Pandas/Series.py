import pandas as pd
def p(t=''):
    print('-------------------------------------------------')
    print(t)
    print('-------------------------------------------------')

t=pd.Series(5)
p(t)


lista_nomes = 'Howard Ian Peter Jonah Kellie'.split()
t= pd.Series(lista_nomes)
p(t)


dados = {
    'nome1': 'Howard',
    'nome2': 'Ian',
    'nome3': 'Peter',
    'nome4': 'Jonah',
    'nome5': 'Kellie',
}
t= pd.Series(dados)
p(t)


cpfs = '111.111.111-11 222.222.222-22 333.333.333-33 444.444.444-44 555.555.555-55'.split()
t= pd.Series(lista_nomes, index=cpfs)
p(t)


series_dados = pd.Series(lista_nomes, index=cpfs)
t = series_dados.loc['111.111.111-11']
p(t)


p()
series_dados = pd.Series([10.2, -1, None, 15, 23.4])
t= series_dados
p(t)
print('Quantidade de linhas = ', series_dados.shape) # Retorna uma tupla com o número de linhas
print('Tipo de dados', series_dados.dtypes) # Retorna o tipo de dados, se for misto será object
print('Os valores são únicos?', series_dados.is_unique) # Verifica se os valores são únicos (sem duplicações)
print('Existem valores nulos?', series_dados.hasnans) # Verifica se existem valores nulos
print('Quantos valores existem?', series_dados.count()) # Conta quantas valores existem (excluí os nulos)
print('Qual o menor valor?', series_dados.min()) # Extrai o menor valor da Series (nesse caso os dados precisam ser do mesmo tipo)
print('Qual o maior valor?', series_dados.max()) # Extrai o valor máximo, com a mesma condição do mínimo
print('Qual a média aritmética?', series_dados.mean()) # Extrai a média aritmética de uma Series numérica
print('Qual o desvio padrão?', series_dados.std()) # Extrai o desvio padrão de uma Series numérica
print('Qual a mediana?', series_dados.median()) # Extrai a mediana de uma Series numérica
print('\nResumo:\n', series_dados.describe()) # Exibe um resumo sobre os dados na Series