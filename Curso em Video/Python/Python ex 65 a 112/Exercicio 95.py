# Exercicio 95 - melhorar o exercicio 93 
# varias jogadores
# incluir visualização de detalhes de aproveitamento de cada jogador
time = []
jogador = {}
while True:
    jogador.clear()
    jogador['nome'] = str(input('Nome do jogador: '))
    jogador['partidas'] = int(input(f"Quantas partidas {jogador['nome']} jogou? "))
    jogador['gols']  = []
    soma = 0
    for i in range(jogador['partidas']):
        n = int(input(f'Quantos gols na partida {i+1}? '))
        jogador['gols'].append(n)
        soma = soma + n
    jogador['total'] =  soma

    time.append(jogador.copy())
    while True:
        c = input('Quer Continuar?[S/N] ').upper()[0]
        if c in 'SN':
            break
        print('Erro, Responda apenas com S ou N')
    if c == 'N':
           break

print('-='*30)
print(f'cod ', end='')
for i in jogador.keys():
    print(f'{i:<15}',end='')
print()

for k , v  in enumerate(time):
    print(f'{k:>3} ', end='')
    for d in v.values():
        print(f'{str(d):<15}',end='')
    print()
print('-='*30)

while True:
    j = int(input('\nMostrar dados de qual jogador? '))
    if j == 999:
        print('< < < SAINDO > > >')
        break
    elif j > len(time)-1 or j < 0:
        print('Erro, o numero não esta na lista')
    else:
        print(f"-- LEVANTAMENTO DO JOGADOR {time[j]['nome']}:")
        for jogo , gols in enumerate(time[j]['gols']):
            print(f'    No jogo {jogo} faz {gols} gols')
print('-='*30)
print('< <  ENCERRADO  > >')