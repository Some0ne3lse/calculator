let display = document.querySelector("#display");

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

let numbersToDisplay = "";

let currentFocusOnStart = true;

const operate = (operator, num1, num2) => {
  return operator(+num1, +num2);
};

let numbers = document.querySelectorAll(".number-button");

const actualDisplay = document.createElement("div");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    let currentNumber = event.target.id;

    if (currentFocusOnStart === true) {
      if (firstNumber === undefined) {
        firstNumber = currentNumber;
        numbersToDisplay = firstNumber.toString();
      } else {
        firstNumber = firstNumber + currentNumber;
        numbersToDisplay = firstNumber.toString();
      }
    } else if (currentFocusOnStart === false) {
      if (secondNumber === undefined) {
        secondNumber = currentNumber;
        numbersToDisplay = numbersToDisplay + currentNumber.toString();
      } else {
        secondNumber = secondNumber + currentNumber;
        numbersToDisplay = numbersToDisplay + currentNumber.toString();
      }
    }
    actualDisplay.textContent = numbersToDisplay;
  });
});

let addButton = document.querySelector("#add");

addButton.addEventListener("click", () => {
  if (firstNumber === undefined) {
    return;
  } else if (secondNumber !== undefined) {
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = undefined;
    operator = add;
    numbersToDisplay = firstNumber + "+";
    actualDisplay.textContent = numbersToDisplay;
  } else {
    numbersToDisplay = numbersToDisplay + "+";
    actualDisplay.textContent = numbersToDisplay;
    operator = add;
    currentFocusOnStart = false;
  }
});

let subtractButton = document.querySelector("#subtract");

subtractButton.addEventListener("click", () => {
  if (firstNumber === undefined) {
    return;
  } else if (secondNumber !== undefined) {
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = undefined;
    operator = subtract;
    numbersToDisplay = firstNumber + "-";
    actualDisplay.textContent = numbersToDisplay;
  } else {
    numbersToDisplay = numbersToDisplay + "-";
    actualDisplay.textContent = numbersToDisplay;
    operator = subtract;
    currentFocusOnStart = false;
  }
});

let multiplyButton = document.querySelector("#multiply");

multiplyButton.addEventListener("click", () => {
  if (firstNumber === undefined || secondNumber !== undefined) {
    return;
  }
  numbersToDisplay = numbersToDisplay + "x";
  actualDisplay.textContent = numbersToDisplay;
  operator = multiply;
  currentFocusOnStart = false;
});

let divideButton = document.querySelector("#divide");

divideButton.addEventListener("click", () => {
  if (firstNumber === undefined || secondNumber !== undefined) {
    return;
  }
  numbersToDisplay = numbersToDisplay + "/";
  actualDisplay.textContent = numbersToDisplay;
  operator = divide;
  currentFocusOnStart = false;
});

let resultButton = document.querySelector("#result");

resultButton.addEventListener("click", () => {
  if (firstNumber === undefined || secondNumber === undefined) {
    return;
  }
  actualDisplay.textContent = `${numbersToDisplay} = ${operate(
    operator,
    firstNumber,
    secondNumber
  )}`;
  firstNumber = undefined;
  secondNumber = undefined;
  currentFocusOnStart = true;
});

let clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  firstNumber = undefined;
  secondNumber = undefined;
  currentFocusOnStart = true;
  actualDisplay.textContent = "";
});

display.appendChild(actualDisplay);
