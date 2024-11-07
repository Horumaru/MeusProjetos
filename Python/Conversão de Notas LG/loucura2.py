# Abre o arquivo em modo de leitura ('r') e o lê como UTF-8
import re

def ler_arquivo_lqm(caminho_arquivo_lqm):
    with open(caminho_arquivo_lqm, 'rb') as arquivo:
        conteudo_byte = arquivo.read()

        # Substitui os bytes indesejados (0xAF, por exemplo) por bytes vazios (0x00)
        conteudo_corrigido = conteudo_byte.replace(b'\xAF', b'')

        # Decodifica o conteúdo corrigido em UTF-8, ignorando erros
        conteudo_utf8 = conteudo_corrigido.decode('utf-8', errors='ignore')

        # Encontra o conteúdo da lista "MemoObjectList"
        padrao = r'"MemoObjectList"\s*:\s*\[(.*?)\]'
        matches = re.search(padrao, conteudo_utf8, re.DOTALL)

        if matches:
            conteudo_memo_object_list = matches.group(1)

            # Encontra a chave "DescRaw" dentro do conteúdo da lista "MemoObjectList"
            padrao_descraw = r'"DescRaw"\s*:\s*"(.*?)"'
            matches_descraw = re.search(padrao_descraw, conteudo_memo_object_list)

            if matches_descraw:
                descraw = matches_descraw.group(1)
                return descraw
            else:
                return "Chave 'DescRaw' não encontrada dentro de 'MemoObjectList'"

        else:
            return "Lista 'MemoObjectList' não encontrada no arquivo"

caminho_arquivo_lqm = 'C:\\Users\\rphil\\Desktop\\QuickMemo+ - Copia\\arquivos teste\\QuickMemo+_231119_181331.lqm'
conteudo_descraw = ler_arquivo_lqm(caminho_arquivo_lqm)

# Criar um arquivo com o conteúdo obtido
with open('conteudo_descraw.txt', 'w', encoding='utf-8') as arquivo_saida:
    arquivo_saida.write(conteudo_descraw)

print("Conteúdo escrito no arquivo 'conteudo_descraw.txt'")
