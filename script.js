 const display = document.getElementById('display');

function appendValue(value) {
  if (display.value === '0') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '0';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

let input = document.querySelector(".input");
let num = document.querySelector(".numbers");
let clear = document.querySelector("#clear");
let opr = document.querySelector(".operation");
let eql = document.querySelector("#equals");
