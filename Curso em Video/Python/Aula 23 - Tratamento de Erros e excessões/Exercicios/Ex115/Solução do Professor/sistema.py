from lib.interface import *
from lib.arquivo import *
from time import sleep
#D:\Users\rphil\Documents\03 - VS Code Códigos\Python>   
#D:\Users\rphil\Documents\03 - VS Code Códigos\Python\Curso em video\Aula 23 - Tratamento de Erros e excessões\Exercicios\Ex115\Solução do Professor"

caminho = 'Curso em video\Aula 23 - Tratamento de Erros e excessões\Exercicios\Ex115\Solução do Professor\\'
arq = caminho + 'cursoemvideo.txt'


if not arquivoExiste(arq):
    criarArquivo(arq)
    print('Arquivo Criado com sucesso')
else:
    print('Arquivo encontrado')

while True:
    resposta = menu(['Ver pessoas Cadastradas', 'Cadastrar Pessoas','Sair do Sistema'])
    if resposta == 1:
        # Opção de listar o conteudo do arquivo
        lerArquivo(arq)
    elif resposta == 2:
        # cadastrar uma nova pessoa
        cabecalho('NOVO CADASTRO')
        nome = str(input('Nome: '))
        idade = leiaInt('Idade: ')
        cadastrar(arq, nome, idade)
    elif resposta == 3:
        cabecalho('Saindo do sistema, até logo')
        break
    else:
        print('Erro, digite uma opção válida')
        # sleep(1)

