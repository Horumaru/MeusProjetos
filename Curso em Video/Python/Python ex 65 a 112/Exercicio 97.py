# Exercicio 97 - função chamada escreva(),
# receber um texto qualquer 
# mostrar a mensagem de tamanho adaptavel

def escreva(txt):
    tam = len(txt)+2
    print('~'*tam)
    print(f' {txt} ')
    print('~'*tam)


#  PROGRAMA PRINCIPAL
txt = str(input('Escreva o texto: '))
escreva(txt)

escreva(' --- --Curso de python-- ---')
escreva(' -- -texto medio- --')
escreva('- txt curto -')