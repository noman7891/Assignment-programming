
// Exercise 4
// Input format:
// divisors : values
// Output format:
// sum : divisors : values

const displayExercise4 = () => {
  // Read user input
  const inputValue = document.getElementById("ex4-input").value;

  // Generate result
  const finalResult = processExercise4(inputValue);

  // Show result on the webpage
  document.getElementById("ex4-output").textContent = finalResult;
};

const processExercise4 = (text) => {
  // Split the input into divisor section and number section
  const parts = text.split(" : ");

  const divisors = convertToArray(parts[0]);
  const values = convertToArray(parts[1]);

  let sum = 0;

  // Check each value against every divisor
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < divisors.length; j++) {
      if (values[i] % divisors[j] === 0) {
        sum += values[i];
        break;
      }
    }
  }

  // Return formatted output
  return `${sum} : ${divisors.join(" ")} : ${values.join(" ")}`;
};

// Convert a space-separated string into an array of numbers
const convertToArray = (str) => {
  return str.trim().split(/\s+/).map(Number);
};

