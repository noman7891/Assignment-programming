
// Calculate the sum of list elements divisible by either of two numbers

const findTotal = (firstDivisor, secondDivisor, numbers) => {
  let sum = 0;

  for (const value of numbers) {
    if (value % firstDivisor === 0 || value % secondDivisor === 0) {
      sum += value;
    }
  }

  return sum;
};

// Calculate the total using an array of divisors

const calculateListTotal = (divisorArray, numberArray) => {
  if (divisorArray.length < 2) {
    console.warn("Please provide at least two divisor values.");
  }

  let sum = 0;

  for (const value of numberArray) {
    const matchFound = divisorArray.some((divisor) => value % divisor === 0);

    if (matchFound) {
      sum += value;
    }
  }

  return sum;
};

// Generic version that works with any number of divisors

const calculateMultipleDivisors = (divisorArray, numberArray) => {
  let total = 0;

  numberArray.forEach((item) => {
    if (divisorArray.some((divisor) => item % divisor === 0)) {
      total += item;
    }
  });

  return total;
};

// Read input values and display the result

const showListResult = () => {
  const firstDivisor = Number(document.getElementById("a1").value);
  const secondDivisor = Number(document.getElementById("b1").value);

  const values = document
    .getElementById("l")
    .value.trim()
    .split(" ")
    .map(Number);

  alert(findTotal(firstDivisor, secondDivisor, values));
};

// Use divisor array and number array

const showDivisorArrayResult = () => {
  const divisors = document
    .getElementById("aList")
    .value.trim()
    .split(" ")
    .map(Number);

  const values = document
    .getElementById("mList")
    .value.trim()
    .split(" ")
    .map(Number);

  alert(calculateListTotal(divisors, values));
};

// Alternative implementation

const showGenericResult = () => {
  const divisors = document
    .getElementById("aList")
    .value.trim()
    .split(" ")
    .map(Number);

  const values = document
    .getElementById("mList")
    .value.trim()
    .split(" ")
    .map(Number);

  alert(calculateMultipleDivisors(divisors, values));
};

