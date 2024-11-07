def leiadinheiro(p):
    cont = 0
    while True:
        if p.isnumeric():
            p = float(p)
            return p
        else:
            if cont == 1:
                print('\033[0;31mErro! Digite um valor númerico.\033[m')
            p = str(input('Digite um numero: '))
            p = p.replace(',','.')
            cont = 1
