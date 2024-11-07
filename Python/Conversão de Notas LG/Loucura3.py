import os
import re

def converter_lqm_para_txt(pasta_origem, pasta_destino):
    try:
        # Verifica se a pasta de destino existe, se não, cria ela
        if not os.path.exists(pasta_destino):
            os.makedirs(pasta_destino)

        # Percorre todos os arquivos na pasta de origem
        for arquivo in os.listdir(pasta_origem):
            if arquivo.endswith(".lqm"):
                caminho_arquivo_lqm = os.path.join(pasta_origem, arquivo)

                # Abre o arquivo em modo de leitura ('r') e o lê como UTF-8
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

                conteudo_descraw = ler_arquivo_lqm(caminho_arquivo_lqm)

                # Criar um arquivo com o conteúdo obtido
                nome_arquivo_saida = os.path.splitext(arquivo)[0] + "_conteudo_descraw.txt"
                caminho_arquivo_saida = os.path.join(pasta_destino, nome_arquivo_saida)

                with open(caminho_arquivo_saida, 'w', encoding='utf-8') as arquivo_saida:
                    arquivo_saida.write(conteudo_descraw)

                print(f"Conteúdo do arquivo '{arquivo}' escrito em '{caminho_arquivo_saida}'")

    except Exception as e:
        print(f"Ocorreu um erro: {e}")

pasta_origem = 'C:\\Users\\rphil\\Desktop\\QuickMemo+ - Copia\\Arquivos'
pasta_destino = 'C:\\Users\\rphil\\Desktop\\QuickMemo+ - Copia\\Arquivos_destino'

converter_lqm_para_txt(pasta_origem, pasta_destino)
