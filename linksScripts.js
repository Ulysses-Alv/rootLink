function copyToClipboard(text, elementId, classes, textNode) {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  const icono = document.getElementById(elementId);
  icono.textContent = "Copied";

  setTimeout(() => recreate(elementId, classes, textNode), 400)
}

function recreate(_elementId, _classes, _textNode) {
  const miEnlace = document.getElementById(_elementId);
  miEnlace.textContent = "";
  const iconoDiscord = document.createElement("i");
  iconoDiscord.className = _classes;
  const textoEnlace = document.createTextNode(_textNode);
  miEnlace.appendChild(iconoDiscord);
  miEnlace.appendChild(textoEnlace);
}
function workingOnIt(elementId, old_classes, oldText) {
  const miEnlace = document.getElementById(elementId);
  const icono = miEnlace.getElementsByTagName("i")[0];
  icono.className = 'fa fa-exclamation-circle';
  const textoEnlace = miEnlace.lastChild;
  textoEnlace.nodeValue = " So Sorry, I'm still Working On It.";

  setTimeout(() => recreate(elementId, old_classes, oldText), 5000)
}