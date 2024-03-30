const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const counterValueSpan = document.getElementById('value');

  // Initialize counterValue variable
  let counterValue = 0;

  // Function to update the counter value and UI
  function updateCounter(value) {
    counterValue += value;
    counterValueSpan.textContent = counterValue;
  }

  // Add click event listeners to buttons
  decrementButton.addEventListener('click', () => {
    updateCounter(-1);
  });

  incrementButton.addEventListener('click', () => {
    updateCounter(1);
  });
