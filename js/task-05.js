let input = document.querySelector('#name-input');
let output = document.querySelector('#name-output')

function manageInput(event) {
let inputValue = event.currentTarget.value.trim();
if (inputValue) {output.textContent = inputValue
} else { 
    output.textContent = 'Anonymous';
}
};

input.addEventListener('input', manageInput);