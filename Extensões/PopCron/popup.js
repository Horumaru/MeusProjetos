document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var tab = tabs[0];
        var pageTitle = document.getElementById('pageTitle');
        pageTitle.textContent = tab.title;
    });
});
