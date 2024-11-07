# Exercicio 90 - ler nome e média, guardando a situação do aluno
# mostrar isso na tela
# nome
# media
# situação, reprovado aprovado
aluno = {}
aluno['nome'] = str(input('Digite o nome do aluno: '))
aluno['media'] = float(input(f'Digite a média de {aluno["nome"]}: '))

if (aluno['media'] >= 7):
    aluno['situacao'] = 'Aprovado'
elif 5<= aluno['media'] < 7:
    aluno['situacao'] = 'Recuperação'
else:
    aluno['situacao'] = 'Reprovado'
print('-='*30)
for key,value in aluno.items():
    print(f'{key} é igual a {value}')
print('-='*30, '\n')