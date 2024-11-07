# cirar um sistema de cadastrar uma nova pessoa e mostrar todas as pessoas cadastratas
# Fazer isso com modularização

# Cadastrar num bloco de texto

# 1- ver pessoas cadastradas
#     deve se manter o registro mesmo depois que a parada fechar
# 2- cadastrar nova pessoas
#     nome e idade
# 3- sair


# Caractere Significado
# 'r' abre para leitura (padrão)
# 'w' abre para escrita, truncando o arquivo primeiro (removendo tudo o que estiver contido no mesmo)
# 'x' abre para criação exclusiva, falhando caso o arquivo exista
# 'a' abre para escrita, anexando ao final do arquivo caso o mesmo exista
# 'b' binary mode
# 't' modo texto (padrão)
# '+' aberto para atualização (leitura e escrita)

from pathlib import Path

dado = Path('./Curso em video/Aula 23 - Tratamento de Erros e excessões/Exercicios/Ex115/arquivo.txt')
sistema = True

def menu():
    print('-'*30)
    print('MEU PRINCIPAL'.center(30))
    print('-'*30)
    print('''1 - Ver pessoas cadastradas
2 - Cadastrar nova pessoa
3 - Sair do sistema''')
    print('-'*30)
    return int(input('Sua Oção: '))


while sistema:
    try:
        escolha = menu()
    except ValueError:
        print('Informe um numero valido')
    else:
        if   escolha == 1:
            try:
                with open(dado , 'r') as arquivo:
                    conteudo = arquivo.read()
                    print(conteudo)
            except FileNotFoundError:
                print('Ainda não existem pessoas cadastradas')
                print('Voltando ao menu')

        elif escolha == 2:
            def cadastro(nome, idade):
                try:
                    with open(dado, 'x') as f:
                        print('-'*30,file=f)
                        print('PESSOAS CADASTRADAS'.center(30),file=f)
                        print('-'*30,file=f)
                        print(f'{nome},\t {idade} anos ',file= f)
                except FileExistsError:
                    with open(dado, 'a') as f:
                        print
                        print(f'{nome},\t {idade} anos ',file= f)

            nome = str(input('Nome: '))
            idadeValida = False
            while not idadeValida:
                try:
                    idade = int(input('Idade: '))
                except ValueError:
                    print('ERRO: Digite uma idade valida')
                else:
                    idadeValida = True
                    cadastro(nome, idade)
                    print(f'Novo registro de {nome} adicionado')
                    
        elif escolha == 3:
            print('Saindo do Sistema')
            sistema = False
        else:
            print('Erro, digite uma opção válida')    