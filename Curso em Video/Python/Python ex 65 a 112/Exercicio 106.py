# # Exercicio 106
# interactive help
# o usuario vai digitar o comando e a ajuda aparece
# quando o cara digitar 'FIM' sai do programa
# usar cores.?

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#     Sistema de ajuda PyHELP
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# função ou biblioteca > len
#
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#     analisando o manual do comando 'len'
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# função ou biblioteca > FIM
#
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#     Finalizando o programa
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
c =(
    '\033[m',           # 0 - Sem cores
    '\033[0;30;41m',    # 1 - Vermelho
    '\033[0;30;42m',    # 2 - Verde
    '\033[0;30;43m',    # 3 - Amarelo
    '\033[0;30;44m',    # 4 - Azul
    '\033[0;30;45m',    # 5 - Roxo
    '\033[7;30m'        # 6 - Branco
);
def titulo(msg, cor=0):
    tam = len(msg) + 4
    print(c[cor],end='')
    print('~'*tam)
    print(f'  {msg}')
    print('~'*tam)
    print(c[0], end='')

def PyHelp():
    while True:
        titulo('Sistema ajuda PyHelp    ',5)

        comando = str(input('Função ou biblioteca > '))
        if comando.upper() == 'FIM':
            print('vlw flw')
            break
        else:
            titulo(f'Analisando o manual do comando \'{comando}\'',3)
        
            help(comando)


PyHelp()