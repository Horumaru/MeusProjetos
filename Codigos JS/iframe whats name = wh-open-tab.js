window.addEventListener('message', function (e) {
try {
var dado = JSON.parse(e.data);
if (dado.name === "wh-open-tab") {
dataLayer.push({
'event': 'WhatsApp',
}); 
}
} catch (error) { }
}, false);
