import uteis
# podemos importar usando o From 'from uteis import  fatorial, dobro , triplo'
# com isso nao precisa colocar o modulo na frente da funcção que esta usando tipo uteis.dobro(num)
# mas isso pode gerar conflito caso tenham dois modulos tenham a mesma função.

num = int(input('Digite um valor: '))
fat = uteis.fatorial(num)

print(f'O fatorial de {num} é {fat}')
print(f'O dobro de {num} é {uteis.dobro(num)}')
print(f'O triplo de {num} é {uteis.triplo(num)}')

