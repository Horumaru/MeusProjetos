# Exercicio 98 - funcão contador() recebe (inicio, fim e passo)
# O programa tem de realizar tres contagens
# A) - de 1 a 10, de 1 em 1
# B) - de 10 a 0, de 2 em 2
# C) - uma contagem personalizada
# medidas de segurnaça ida/volta, final maior que começo 
# passo 0 = 1, passo -1 = voltando -1

def contador(inicio,fim,passo):
    passo = abs(passo)
    print('-='*30)
    print(f'contagem de {inicio} até {fim}, de {passo} em {passo}')
        
    if passo == 0:
        passo = 1
    if inicio > fim:
        passo = passo *-1
        fim-=1
    else: 
        fim+=1

    for i in range(inicio,fim,passo):
        print(i, end=' ')
    print('Fim!')
    print('-='*30)


contador(0,10,1)
contador(10,0,-2)


print('Agora é sua vez de personalizar a contagem!')
inicio = int(input('Inicio: '))
fim = int(input('Fim   : '))
passo = int(input('Passo : '))


contador(inicio,fim,passo)
