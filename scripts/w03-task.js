/* LESSON 3 - Programming Tasks */
/* FUNCTIONS */

function add(number1, number2) {
  return number1 + number2;
}

/* Function Definition - Add Numbers */
function addNumbers() {
  let addNumber1 = parseFloat(document.getElementById("add1").value);
  let addNumber2 = parseFloat(document.getElementById("add2").value);
  document.getElementById("sum").value = add(addNumber1, addNumber2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {
  return number1 - number2;
};

let subtractNumbers = function() {
  let subtractNumber1 = parseFloat(document.getElementById("subtract1").value);
  let subtractNumber2 = parseFloat(document.getElementById("subtract2").value);
  document.getElementById("difference").value = subtract(subtractNumber1, subtractNumber2);
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;

let multiplyNumbers = () => {
  let factor1 = parseFloat(document.getElementById("factor1").value);
  let factor2 = parseFloat(document.getElementById("factor2").value);
  document.getElementById("product").value = multiply(factor1, factor2);
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
  return dividend / divisor;
}

function divideNumbers() {
  let dividend = parseFloat(document.getElementById("dividend").value);
  let divisor = parseFloat(document.getElementById("divisor").value);
  document.getElementById("quotient").value = divide(dividend, divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function() {
  let subtotal = parseFloat(document.getElementById("subtotal").value);
  let isMember = document.getElementById("member").checked;
  let discount = isMember ? 0.2 : 0;
  let total = subtotal * (1 - discount);
  document.getElementById("total").textContent = `$${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById("array").textContent = numbersArray.join(", ");

/* Output Odds Only Array */
let odds = numbersArray.filter(num => num % 2 !== 0);
document.getElementById("odds").textContent = odds.join(", ");

/* Output Evens Only Array */
let evens = numbersArray.filter(num => num % 2 === 0);
document.getElementById("evens").textContent = evens.join(", ");

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(num => num * 2);
document.getElementById("multiplied").textContent = multiplied.join(", ");

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multiplied.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;

document.getElementById("heading").style.color = "green";

