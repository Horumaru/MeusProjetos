# # Exercicio 105
# notas() recebe varias notas
# retorna um dicionario{} com:
# -quantidade de notas
# - a maior nota
# - a menor nota
# - a media da turma
# - a situação(aprovado reprovado etc) - parametro opcional sit= True or False

# - adicionar docstring da função

def notas(*notas, sit = False):
    '''
    ->Função para analisar naotas e situações de varios alunos
    :param notas: uma oiu mais notas dos alunos (aceita varias)
    :param sit: valor opcional, indicando se deve ou nao adicionar a situação do aluno
    :return: dicionario com várias informações sobre a situação da turma
    '''
    dicio = {}
    dicio['quant_notas'] = len(notas)
    dicio['maior_nota']  = max(notas)
    dicio['menor_nota']  = min(notas)
    dicio['media_notas'] = sum(notas) / len(notas)
    if sit :
        if dicio['media_notas'] < 5:
            dicio['Situação'] = 'A coisa ta feia'
        elif 5 <= dicio['media_notas'] < 7:
            dicio['Situação'] = 'Pode melhorar'
        elif 7 <= dicio['media_notas'] < 9:
            dicio['Situação'] = 'Ta fluindo'
        elif 9 <= dicio['media_notas'] :
            dicio['Situação'] = 'Exelente'
    return dicio
   

resp = notas(9, 10, 5.5, 2.5, 8.5, sit=True)
help(notas)
print(resp)


