c = 200 # valor da constante

mes = input("Digite o mês que deseja saber o resultado: ") # Função para captura o mês que o cliente digitar
mes = int(mes) # Não esqueça de converter para numérico o valor captura pela função input()

r = c * mes # Equação do primeiro grau, também chamada função do primeiro grau ou de função linear.

print(f"A quantidade de peças para o mês {mes} será {r}") # Impressão do resultado usando string interpolada "f-strings" (PEP 498)