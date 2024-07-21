let display = document.querySelector("#display");
let numbers = document.querySelectorAll(".number-button");

const actualDisplay = document.createElement("div");

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
  if (b === 0) {
    return "Dividing by 0 is illegal!";
  }
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

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    let currentNumber = event.target.id;

    if (currentFocusOnStart === true) {
      if (firstNumber === undefined) {
        firstNumber = currentNumber;
        numbersToDisplay = firstNumber.toString();
      } else {
        if (firstNumber.toString().includes(".")) {
          if (currentNumber.toString() === ".") {
            firstNumber = firstNumber;
          } else {
            firstNumber = firstNumber + currentNumber;
            numbersToDisplay = firstNumber.toString();
          }
        } else {
          firstNumber = firstNumber + currentNumber;
          numbersToDisplay = firstNumber.toString();
        }
      }
    } else if (currentFocusOnStart === false) {
      if (secondNumber === undefined) {
        secondNumber = currentNumber;
        numbersToDisplay = currentNumber.toString();
      } else {
        if (secondNumber.toString().includes(".")) {
          if (currentNumber.toString() === ".") {
            secondNumber = secondNumber;
          } else {
            secondNumber = secondNumber + currentNumber;
            numbersToDisplay = numbersToDisplay + currentNumber.toString();
          }
        } else {
          secondNumber = secondNumber + currentNumber;
          numbersToDisplay = numbersToDisplay + currentNumber.toString();
        }
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
    numbersToDisplay = Math.round((firstNumber + Number.EPSILON) * 100) / 100;
    actualDisplay.textContent = numbersToDisplay;
  } else {
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
    numbersToDisplay = Math.round((firstNumber + Number.EPSILON) * 100) / 100;
    actualDisplay.textContent = numbersToDisplay;
  } else {
    operator = subtract;
    currentFocusOnStart = false;
  }
});

let multiplyButton = document.querySelector("#multiply");

multiplyButton.addEventListener("click", () => {
  if (firstNumber === undefined) {
    return;
  } else if (secondNumber !== undefined) {
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = undefined;
    operator = multiply;
    numbersToDisplay = Math.round((firstNumber + Number.EPSILON) * 100) / 100;
    actualDisplay.textContent = numbersToDisplay;
  } else {
    operator = multiply;
    currentFocusOnStart = false;
  }
});

let divideButton = document.querySelector("#divide");

divideButton.addEventListener("click", () => {
  if (firstNumber === undefined) {
    return;
  } else if (secondNumber !== undefined) {
    firstNumber = operate(operator, firstNumber, secondNumber);
    if (typeof firstNumber === "string") {
      numbersToDisplay = firstNumber;
    } else {
      secondNumber = undefined;
      operator = divide;
      numbersToDisplay = Math.round((firstNumber + Number.EPSILON) * 100) / 100;
    }
    actualDisplay.textContent = numbersToDisplay;
  } else {
    operator = divide;
    currentFocusOnStart = false;
  }
});

let resultButton = document.querySelector("#result");

resultButton.addEventListener("click", () => {
  if (firstNumber === undefined || secondNumber === undefined) {
    return;
  }
  let result = operate(operator, firstNumber, secondNumber);
  if (typeof result === "string") {
    numbersToDisplay = result;
  } else {
    numbersToDisplay = Math.round((result + Number.EPSILON) * 100) / 100;
  }
  actualDisplay.textContent = numbersToDisplay;
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
