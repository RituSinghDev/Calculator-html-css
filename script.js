let display = document.getElementById("display");
let input = "";

function appendInput(value) {
  input += value;
  updateDisplay();
}

function clearDisplay() {
  input = "";
  updateDisplay();
}

function calculate() {
  try {
    input = eval(input).toString();
    updateDisplay();
  } catch (error) {
    display.textContent = "Error";
  }
}

function updateDisplay() {
  display.textContent = input;
}
