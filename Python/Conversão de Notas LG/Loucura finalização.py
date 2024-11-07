import glob

def combinar_arquivos_txt(diretorio_origem, arquivo_destino):
    with open(arquivo_destino, 'w') as destino:
        txt_files = glob.glob(f"{diretorio_origem}/*.txt")
        for arquivo in txt_files:
            with open(arquivo, 'r') as arquivo_origem:
                conteudo = arquivo_origem.read()
                destino.write(conteudo)
                destino.write('\n' * 5)  # Adiciona 5 linhas em branco entre os arquivos


diretorio_origem = 'C:\\Users\\rphil\\Desktop\\QuickMemo+ - Copia\\Arquivos_destino'  # Substitua pelo caminho da sua pasta
arquivo_destino  = 'C:\\Users\\rphil\\Desktop\\QuickMemo+ - Copia\\Arquivos_destino\\Comp.txt'  # Substitua pelo caminho do arquivo de destino


combinar_arquivos_txt(diretorio_origem, arquivo_destino)