
// Find the sum of all numbers less than 1000
// that are divisible by 3 or 5.

const calculateSum = () => {
  let result = 0;

  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  alert(result);
};

// Task 2:
// Calculate the sum of all multiples of two given numbers
// that appear before a user-defined limit.

const customSumCalculator = () => {
  const num1 = Number(document.getElementById("a").value);
  const num2 = Number(document.getElementById("b").value);
  const maxLimit = Number(document.getElementById("n").value);

  let answer = 0;

  for (let i = 1; i < maxLimit; i++) {
    const divisibleByFirst = i % num1 === 0;
    const divisibleBySecond = i % num2 === 0;

    if (divisibleByFirst || divisibleBySecond) {
      answer += i;
    }
  }

  alert(answer);
};

