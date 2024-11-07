
with open(caminho_arquivo, 'rb') as arquivo:
    # Lê o conteúdo do arquivo byte a byte
    conteudo = bytearray(arquivo.read())

    # Substitui os bytes indesejados (0xAF, por exemplo) por bytes vazios (0x00)
    byte_indesejado = 0xAF
    conteudo_corrigido = bytes(byte if byte != byte_indesejado else 0x00 for byte in conteudo)

    # Decodifica o conteúdo em UTF-8 ignorando erros
    texto_utf8 = conteudo_corrigido.decode('utf-8', errors='ignore')

    print(texto_utf8)
