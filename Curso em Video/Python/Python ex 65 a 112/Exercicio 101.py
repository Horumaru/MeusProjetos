# Exercicio 100
# criar uma função chamada voto()
# recebe como pametro o ano de nascimento
# retorna valor literal se o voto dessa pessoa é
# negado opcional ou obrigatório


def voto(ano_nasc):
    from datetime import date
    ano_atual = date.today().year
    idade = ano_atual - ano_nasc 
    
    if idade < 16:
        return f'Com {idade} anos voce nao vota'
    elif 16 <= idade < 18 or idade >= 65:
        return f'Com {idade} anos o voto é opcional'
    else :
        return f'Com {idade} anos o voto é obrigatorio'


ano_nasc = int(input('Digite o ano que voce nasceu '))
print(voto(ano_nasc))