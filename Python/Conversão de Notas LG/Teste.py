import os
import shutil

# Pasta de origem onde estão as subpastas com os arquivos
pasta_principal = 'C:\\Users\\rphil\\\Desktop\\\QuickMemo+ - Copia\\share'

# Pasta de destino onde você quer mover todos os arquivos
pasta_destino = 'C:\\Users\\rphil\\Desktop\\QuickMemo+ - Copia\\Arquivos'

# Dicionário para rastrear os nomes dos arquivos e suas contagens
arquivos_existentes = {}

# Função para renomear o arquivo, se necessário
def renomear_arquivo(caminho_arquivo):
    nome_arquivo, extensao = os.path.splitext(caminho_arquivo)
    contador = arquivos_existentes.get(os.path.basename(nome_arquivo), 0)
    while os.path.exists(caminho_arquivo):
        contador += 1
        nome_arquivo = f"{os.path.basename(nome_arquivo)}_{contador}"
        caminho_arquivo = os.path.join(pasta_destino, f"{nome_arquivo}{extensao}")
    arquivos_existentes[os.path.basename(nome_arquivo)] = contador
    return caminho_arquivo

# Percorre todas as subpastas na pasta principal
for pasta in os.listdir(pasta_principal):
    caminho_pasta = os.path.join(pasta_principal, pasta)
    
    # Verifica se é uma pasta
    if os.path.isdir(caminho_pasta):
        # Percorre todos os arquivos na subpasta
        for arquivo in os.listdir(caminho_pasta):
            caminho_arquivo_origem = os.path.join(caminho_pasta, arquivo)
            
            # Move o arquivo para a pasta de destino
            caminho_arquivo_destino = os.path.join(pasta_destino, arquivo)
            if os.path.exists(caminho_arquivo_destino):
                caminho_arquivo_destino = renomear_arquivo(caminho_arquivo_destino)
            
            shutil.move(caminho_arquivo_origem, caminho_arquivo_destino)
