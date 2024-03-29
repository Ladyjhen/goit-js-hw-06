// Get reference to the counter element and the span that displays the counter value
const valueSpan = document.getElementById('value');

// Initialize counter value
let counterValue = 0;

// Function to update the interface with the current counter value
function updateCounterDisplay() {
  valueSpan.textContent = counterValue;
}

// Add event listener for the decrement button
document.getElementById('decrementBtn').addEventListener('click', function() {
  counterValue--;
  updateCounterDisplay();
});

// Add event listener for the increment button
document.getElementById('incrementBtn').addEventListener('click', function() {
  counterValue++;
  updateCounterDisplay();
});

// Update the interface with the initial counter value
updateCounterDisplay();