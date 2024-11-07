const speech = new SpeechSynthesisUtterance();

//speech.text = 'Olá. Eu sou o script do speech!';
speech.volume = 1;
speech.rate = 2;
speech.pitch = 1;
speech.lang = 'pt-BR';

//speechSynthesis.speak(speech);
document.querySelector("#button").addEventListener('click', () => {
    inputText = document.getElementById('inputText').value;
    if(inputText == ''){
        speech.text = 'Você precisa digitar algo para eu poder falar!';
    }else{
        speech.text = inputText;
    }
    speechSynthesis.speak(speech);
});     