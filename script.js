let display = document.getElementById('display');
let currentInput = '';
let result = 0;
let operator = null;

// Function to handle input
function input(value) {
  if (display.innerText === '0' || currentInput === result.toString()) {
    display.innerText = '';
    currentInput = '';
  }
  if (value === '.' && currentInput.includes('.')) return;
  currentInput += value;
  display.innerText = currentInput;
}

// Function to clear display
function clearDisplay() {
  display.innerText = '0';
  currentInput = '';
  result = 0;
  operator = null;
}

// Function to perform calculation
function calculate() {
  try {
    result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    display.innerText = result;
    currentInput = result.toString();
  } catch (error) {
    display.innerText = 'Error';
  }
}
