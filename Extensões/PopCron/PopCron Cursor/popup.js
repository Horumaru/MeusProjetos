document.getElementById('save').addEventListener('click', function() {
  const shortcut = document.getElementById('shortcut').value.trim();
  const text = document.getElementById('text').value.trim();

  if (!shortcut || !text) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  chrome.storage.sync.get({ shortcuts: {} }, function(data) {
    const shortcuts = data.shortcuts;
    
    if (shortcuts[shortcut] && !confirm(`O atalho "${shortcut}" já existe. Deseja sobrescrever?`)) {
      return;
    }
    
    shortcuts[shortcut] = text;
    chrome.storage.sync.set({ shortcuts: shortcuts }, function() {
      alert('Atalho salvo com sucesso!');
      displayShortcuts();
      document.getElementById('shortcut').value = '';
      document.getElementById('text').value = '';
    });
  });
});
function displayShortcuts() {
  chrome.storage.sync.get({ shortcuts: {} }, function(data) {
    const shortcutsList = document.getElementById('shortcutsList');
    shortcutsList.innerHTML = '';

    Object.entries(data.shortcuts).forEach(([shortcut, text]) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${shortcut}: ${text}</span>
        <button class="delete-btn" data-shortcut="${shortcut}">Excluir</button>
      `;
      shortcutsList.appendChild(li);
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const shortcutToDelete = this.dataset.shortcut;
        if (confirm(`Deseja excluir o atalho "${shortcutToDelete}"?`)) {
          chrome.storage.sync.get({ shortcuts: {} }, function(data) {
            const shortcuts = data.shortcuts;
            delete shortcuts[shortcutToDelete];
            chrome.storage.sync.set({ shortcuts: shortcuts }, function() {
              displayShortcuts();
            });
          });
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', displayShortcuts); 