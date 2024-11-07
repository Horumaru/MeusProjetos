(function() {
    function setHdQuality() {
        // Abre o menu de configurações
        let settingsButton = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-button.ytp-settings-button").click()

        if (settingsButton) {
            settingsButton.click();

            // Aguarda e clica na opção de qualidade
            setTimeout(() => {
                let qualityMenu = Array.from(document.querySelectorAll('.ytp-menuitem')).find(el => el.innerText.includes('Qualidade'));
                qualityMenu.click();

                // Seleciona a qualidade HD (1080p ou 720p)
                setTimeout(() => {
                    let hdOption = Array.from(document.querySelectorAll('.ytp-menuitem')).find(el => el.innerText.includes('1080p') || el.innerText.includes('720p'));
                    if (hdOption) {
                        hdOption.click();
                    }
                }, 500);
            }, 500);
        }
    }
    function monitorVideoChange() {
        let previousVideoId = document.querySelector('video').getAttribute('src');

        setInterval(() => {
            let currentVideoId = document.querySelector('video').getAttribute('src');
            if (currentVideoId !== previousVideoId) {
                previousVideoId = currentVideoId;
                console.log("Novo vídeo detectado");
                setHdQuality();
            }
        }, 2000);
    }

    // Inicializa a configuração HD para o vídeo atual
    setHdQuality();

    // Monitora mudanças de vídeo
    monitorVideoChange();
}) ();