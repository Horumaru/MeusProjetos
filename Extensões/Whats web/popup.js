let timerInterval;
let remainingTime = 0;

document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);

function startTimer() {
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;
  const message = document.getElementById('message').value;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    alert('Por favor, defina um tempo válido!');
    return;
  }

  remainingTime = (hours * 3600) + (minutes * 60) + seconds;
  
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    remainingTime--;
    updateTimerDisplay();

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      sendWhatsAppMessage(message);
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  remainingTime = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  document.getElementById('timer').textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function sendWhatsAppMessage(message) {
  chrome.tabs.query({url: 'https://web.whatsapp.com/*'}, (tabs) => {
    if (tabs.length === 0) {
      mostrarNotificacao('Atenção', 'Por favor, abra o WhatsApp Web primeiro', 'error');
      window.open('https://web.whatsapp.com', '_blank');
      return;
    }

    chrome.tabs.executeScript(tabs[0].id, {
      code: `
        function sendMessage(message) {
          const input = document.querySelector('div[contenteditable="true"]');
          if (!input) {
            return { success: false, error: 'Campo de mensagem não encontrado' };
          }

          input.textContent = message;
          input.dispatchEvent(new InputEvent('input', { bubbles: true }));
          
          const sendButton = document.querySelector('button[data-testid="send"]');
          if (sendButton) {
            sendButton.click();
            return { success: true };
          }
          return { success: false, error: 'Botão de envio não encontrado' };
        }
        sendMessage("${message}");
      `
    }, (results) => {
      if (results && results[0] && results[0].success) {
        mostrarNotificacao('Sucesso', 'Mensagem enviada com sucesso!', 'success');
      } else {
        const errorMsg = results && results[0] && results[0].error ? results[0].error : 'Erro ao enviar mensagem';
        mostrarNotificacao('Erro', 'Falha ao enviar mensagem: ' + errorMsg, 'error');
      }
    });
  });
}

function mostrarNotificacao(titulo, mensagem, tipo) {
  const notification = document.createElement('div');
  notification.className = `notification ${tipo}`;
  notification.innerHTML = `
    <strong>${titulo}</strong>
    <p>${mensagem}</p>
  `;
  
  document.body.appendChild(notification);
  
  // Remove a notificação após 3 segundos
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}