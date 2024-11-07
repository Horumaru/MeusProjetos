import zipfile
import json

def extrair_conteudo_rar(caminho_arquivo_rar):
    try:
        with zipfile.ZipFile (caminho_arquivo_rar, 'r') as arquivo_rar:
            # Lista os arquivos dentro do .rar
            arquivos = arquivo_rar.namelist()

            # Percorre os arquivos dentro do .rar
            for arquivo in arquivos:
                with arquivo_rar.open(arquivo) as arquivo_interno:
                    conteudo = arquivo_interno.read()

                    # Verifica se é o arquivo 'memoinfo.jlqm'
                    if 'memoinfo.jlqm' in arquivo:
                        # Processamento do arquivo 'memoinfo.jlqm' para buscar a chave 'DescRaw'
                        # Use o módulo json para manipular o arquivo 'memoinfo.jlqm'

                        # Exemplo básico de busca do conteúdo
                        dados = json.loads(conteudo)
                        if 'MemoObjectList' in dados:
                            memo_object = dados['MemoObjectList'][0]
                            if 'DescRaw' in memo_object:
                                conteudo_descraw = memo_object['DescRaw']

                                # Salvar o conteúdo 'DescRaw' em um arquivo .txt separado
                                with open(f"DescRaw_{arquivo}.txt", 'w', encoding='utf-8') as arquivo_txt:
                                    arquivo_txt.write(conteudo_descraw.decode('utf-8'))

                                print(f"Conteúdo DescRaw salvo para {arquivo}")
    except Exception as e:
        print(f"Ocorreu um erro: {e}")

# Substitua 'caminho_do_arquivo.rar' pelo caminho do seu arquivo .rar
extrair_conteudo_rar('C:\\Users\\rphil\\Desktop\\QuickMemo+ - Copia\\arquivos teste\\Arquivos.zip')
