const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

let firstNumber;

let secondNumber;

let operator;

const operate = (operator, num1, num2) => {
  return operator(num1, num2);
};
