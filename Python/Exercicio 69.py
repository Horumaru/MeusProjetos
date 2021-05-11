# Exercicio 69 - ler idade e sexo de varias pessoas
# a cada pessoa perguntar se quer parar ou nao

# ao final mostrar:
# maiores de 18
# quantos homens 
# mulheres menor de 20
sexo = parar = '.'
maior18 = homens = mulheres_menor_20 = 0

while (parar not in 'Ss'):
    print('-='*16)
    idade = int(input('Digite a idade da pessoa: '))
    while (sexo not in 'MmFf'):
        sexo =  str(input('Digite o sexo [M/F]:  ')).strip()[0].upper()


    print('-='*16)
    print(f'Registrado sexo {sexo} e idade {idade}')

    if (idade >= 18):
        maior18 += 1
    if (sexo in 'Mm'):
        homens += 1
    if (sexo in 'Ff'and idade < 20):
        mulheres_menor_20 += 1 


    while (parar not in 'SsNn'):
        parar = str(input('Deseja parar? [S/N]:  ')).strip()[0].upper()



print('-='*16)
print(f'''Foram registrados:
{maior18} pessoas maiores de 18 anos,
{homens} Homens,
{mulheres_menor_20} mulheres com menos de 20 anos''')
print('-='*16)