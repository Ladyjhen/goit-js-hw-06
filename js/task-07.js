const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

// Add an event listener for the input event
fontSizeControl.addEventListener('input', function() {
  // Update the font size of the text span based on the input value
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});