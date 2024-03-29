const input = document.getElementById('validation-input');

input.addEventListener('blur', function() {
  const enteredLength = input.value.trim().length; // Trim whitespace and get the length of the entered value
  const expectedLength = parseInt(input.getAttribute('data-length')); // Get the expected length from the data-length attribute
  
  // Check if the entered length matches the expected length
  if (enteredLength === expectedLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});