# Exercicio 94 - ler nome idade de sexo de varias pessoas
# cada pessoa é um dicionario, e guardar cara pessoa nume lista
# a - quantas pessoas foram cadastradas
# b - media de idade do grupo
# c - uma lista com todas as mulheres
# d - uma lista com as pessoas de idade acima da media

galera = []
pessoa = {}
soma = media = 0

while True:
    pessoa.clear()
    pessoa['nome']  = str(input('Digite o nome: '))
    while True:
        pessoa['sexo']  = str(input('Digite o Sexo [M/F] ')).upper()[0]
        if pessoa['sexo']  in 'MF':
            break
        print('Erro, Digite apenas M ou F')
    pessoa['idade'] = int(input('Digite a idade: '))
    soma = soma+pessoa['idade']
    galera.append(pessoa.copy())

    while True:
        c = str(input('Quer continuar [S/N]')).upper()[0]
        if c in 'SN':
            break
        print('Erro, digite apenas S ou N')
    if c == 'N':
        break
    
print(galera)
print(f'A) - O grupo tem {len(galera)} pessoas.')
media = soma / len(galera)
print(f'B) - A media de idade é de {media:5.2f} anos.')

print('C) - As mulheres cadastradas foram ', end='')
for p in galera:
    if p['sexo'] in 'Ff':
        print(f'{p["nome"]} ',end='')
print()
print('D) - As pessoas acima da media de idade foram')
for p in galera:
    if p['idade'] >= media:
        print(' ', end='')
        for k, v in p.items():
            print(f'{k} = {v}; ', end='' )
        print()
print('< <  ENCERRADO  > >')