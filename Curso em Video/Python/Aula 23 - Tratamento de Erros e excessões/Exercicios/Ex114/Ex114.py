# Verificar se o site pudim está funcionando 
# procurar na internet a solução

import urllib.request
try:
    site = urllib.request.urlopen('https://www.pudim.com.br')
    # urllib.request.urlopen('https://www.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas3a21s32a1s32a1s3a21s3a21.com')
except urllib.error.URLError:
    print('Houve um erro com a URL, está offline')
except Exception as erro:
    print(f'Houve um erro, o problema foi {erro.__class__}')
else:
    print('o site ta funcionando normalmente')
    #print(site.read())