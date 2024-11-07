# Exercicio 92 - ler nome ano de nascimento e carteira
# guardar a nome idade carteira
# se a carteira de trabalho for diferente de 0 
# perguntar ano dce contratação e salario e com quantos anos vai se aposentar
# aposenta depois de 35 anos de trabalho
from datetime import date
ano_atual = date.today().year

pessoa = {
    'nome' : str(input('Nome: ')),
    'idade' : ano_atual - int(input('Ano de Nascimento: ')),
    'ctps' : int(input('Carteira de trabalho (0 não tem): ')),
}
if pessoa['ctps'] != 0:
    pessoa['contratação'] = int(input('Ano de contratação: '))
    pessoa['salario'] = float(input('Salário : R$ '))
    pessoa['aposentadoria']  = (( pessoa['contratação'] - ano_atual) + 35 + pessoa['idade'])

print('-='*30), print(pessoa), print('-='*30)

for key, value in pessoa.items():
    print(f'{key} tem o valor {value}')