def contador(i,f,p):
    p = abs(p)
    if p ==0:
        p=1
    print('-='*20)
    print('Contagem de {i} ate {f} de {p} em {p}')

    if i<f:
        cont = i
        while cont >= f:
            print(f'{cont} ',end='')
            cont += p
        print('Fim')
    else:
        cont = i
        while cont >= f:
            print(f'{cont} ',end='')
            cont -= p
        print('Fim')


#programa principal
contador(1,10,1)
contador(10,0,2)
print('-='*20)
print('Agora é sua vez de personalizar a contagem!')
ini = int(input('Inicio: '))
fim = int(input('Fim   : '))
pas = int(input('Passo : '))
contador(ini, fim, pas)