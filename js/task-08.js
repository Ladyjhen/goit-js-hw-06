const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  const formData = {}; // Object to store form data
  
  // Iterate over form elements
  for (let element of loginForm.elements) {
    // Skip elements without a name attribute
    if (!element.name) continue;
    
    // Check if the field is empty
    if (!element.value.trim()) {
      alert('All fields must be filled in.');
      return; // Stop form submission if any field is empty
    }
    
    // Add field name and value to the formData object
    formData[element.name] = element.value;
  }
  
  // Log the formData object to the console
  console.log(formData);
  
  // Reset the form fields
  loginForm.reset();
});
