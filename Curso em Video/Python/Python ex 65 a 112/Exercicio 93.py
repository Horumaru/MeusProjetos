# Exercicio 93 - aproveitamento de um jogador de fuitebol
# nome e numero de partidas
# perguntar quantos gols em cada partida
# salvar no dicionario a quantidade de gols no campeonato
# ver o video pra pegar a estrutura

jogador = {}
jogador['nome'] = str(input('Nome do jogador: '))
jogador['partidas'] = int(input(f"Quantas partidas {jogador['nome']} jogou? "))
jogador['gols']  = []

for i in range(jogador['partidas']):
    n = int(input(f'Quantos gols na partida {i+1}? '))
    jogador['gols'].append(n)
jogador['total'] =  sum(jogador['gols'])

print('-='*30)
print(jogador)
print('-='*30)
for key, value in jogador.items():
    print(f'o campo {key} tem o valor {value}')
print('-='*30)

print(f"O jogador {jogador['nome']} jogou {jogador['partidas']} partidas")
for i , gol in enumerate(jogador['gols']):
    print(f'    => Na partida {i+1}, fez {gol} gols.')
print(f"Foi um total de {jogador['total']} gols.")
print('-='*30)