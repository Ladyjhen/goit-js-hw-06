const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
  const newName = nameInput.value.trim(); // Trim whitespace from the input
  
  // Check if newName is empty, if so, display "Anonymous", otherwise, display newName
  nameOutput.textContent = newName === '' ? 'Anonymous' : newName;
});