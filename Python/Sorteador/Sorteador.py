import time
import sys
from random import randint

listaDeCoisas = []
item = ''

while item != "0":   
    item = input("Digite o item para adicionar a lista ou ZERO para sair: ")

    if item == "0":
        break
    else :
        
        if item in listaDeCoisas:
            print(f"Item {item} encontrado na lista.............")
            listaDeCoisas.remove(item)

        else:
            listaDeCoisas.append(item)
            print(f"Item {item} adicionado a lista")


        print("Lista ate agora:")
        if len(listaDeCoisas) > 0:
            for item in listaDeCoisas:
                print(item)
            # print(f'Lista ate agora: {listaDeCoisas}\n')
        else:
            print("Lista vazia")



texto = "Sorteando item ....."
for letra in texto:
    sys.stdout.write(letra)
    sys.stdout.flush()
    time.sleep(0.1)
print()

if randint(0,1) == 1:
    print("Fazer amorzinho gostoso hmmmm")
else:
    i = randint(0, len(listaDeCoisas) - 1)
    print(f'Item sorteado: {listaDeCoisas[i]}')
