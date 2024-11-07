# # Exercicio 103
# ficha() recebe dois parametros opicionais nome e gols
# mostra a ficha do jogador mesmo que algumdados esteja errado

# nome jogador em branc0 = desconhecido
# gols em branco = 0

def ficha(nome = '<desconhecido>', gols = 0):
    if nome == '':
        nome = 'desconhecido'
    if not gols.isnumeric():
        gols = 0
    print(f'O jogador {nome} fez {gols} gol(s) no campeonato')


nome = str(input('Nome do jogador: '))
gols = str(input('Numero de gols: '))
ficha(nome, gols)
