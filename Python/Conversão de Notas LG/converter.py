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

                # Abre o arquivo .lqm para leitura
                with open(caminho_arquivo_lqm, 'r', encoding='latin-1') as arquivo_lqm:
                    conteudo_lqm = arquivo_lqm.read()

                    # Procura o padrão de texto no conteúdo do arquivo .lqm
                    padrao_texto = re.search(r'PlainText=\s*(.*)', conteudo_lqm)

                    if padrao_texto:
                        # Extrai o texto encontrado
                        texto = padrao_texto.group(1)

                        # Cria o nome do arquivo .txt baseado no nome do arquivo .lqm
                        nome_arquivo_txt = os.path.splitext(arquivo)[0] + ".txt"
                        caminho_arquivo_txt = os.path.join(pasta_destino, nome_arquivo_txt)

                        # Salva o conteúdo extraído no arquivo .txt
                        with open(caminho_arquivo_txt, 'w', encoding='utf-8') as arquivo_txt:
                            arquivo_txt.write(texto)
                    
                        print(f"Arquivo convertido: {caminho_arquivo_txt}")
    except Exception as e:
        print(f"Ocorreu um erro: {e}")


# Substitua 'pasta_origem' e 'pasta_destino' pelos caminhos das suas pastas
pasta_origem = 'C:\\Users\\rphil\\Desktop\\QuickMemo+ - Copia\\Arquivos'
pasta_destino = 'C:\\Users\\rphil\\Desktop\\QuickMemo+ - Copia\\Arquivos destino'

converter_lqm_para_txt(pasta_origem, pasta_destino)
