# Quando o erro nao é sintatico (como digitação errada) ele é chamado de excessão por exemplo "print(x)" sendo que X não foi declarado.
# Em casos de erro de sintaxe é chamado de erro como por exemplo "priMt(x)" mesmo se X for declarado daria erro devido a escrita.

try:
    a = int(input('digite um numero '))
    b = int(input('digite um numero '))
    r = a/b

except (ValueError, TypeError):
    print('Tivemos um problmema com os tipos de dados que voce digitou')
except ZeroDivisionError:
    print('nao é possivel dividir por zero')
except KeyboardInterrupt:
    print(' o usuario interrompeu o programa')
except Exception as erro:
     print(f'Houve um erro, o problema foi {erro.__cause__}')
else:
    print(f'O resultado é {r:.1f}')
finally:
    print('Volte sempre, muito obrigado')