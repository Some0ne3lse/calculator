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

let displayValue = "";

let currentFocusOnStart = true;

const operate = (operator, num1, num2) => {
  return operator(+num1, +num2);
};

let numbers = document.querySelectorAll(".number-button");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    let currentNumber = event.target.id;

    if (currentFocusOnStart === true) {
      if (firstNumber === undefined) {
        firstNumber = currentNumber;
      } else {
        firstNumber = firstNumber + currentNumber;
        // displayValue = firstNumber.toString();
      }
      console.log(firstNumber);
    } else if (currentFocusOnStart === false) {
      if (secondNumber === undefined) {
        secondNumber = currentNumber;
      } else {
        secondNumber = secondNumber + currentNumber;
      }
      console.log(secondNumber);
    }
  });
});

let addButton = document.querySelector("#add");

addButton.addEventListener("click", () => {
  operator = add;
  currentFocusOnStart = false;
});

let subtractButton = document.querySelector("#subtract");

subtractButton.addEventListener("click", () => {
  operator = subtract;
  currentFocusOnStart = false;
});

let multiplyButton = document.querySelector("#multiply");

multiplyButton.addEventListener("click", () => {
  operator = multiply;
  currentFocusOnStart = false;
});

let divideButton = document.querySelector("#divide");

divideButton.addEventListener("click", () => {
  operator = divide;
  currentFocusOnStart = false;
});

let resultButton = document.querySelector("#result");

resultButton.addEventListener("click", () => {
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(operate(operator, firstNumber, secondNumber));
});
