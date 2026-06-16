
// Convert input into an integer and reject invalid values

const toInteger = (value) => {
  const parsedValue = Number(value);

  if (!Number.isInteger(parsedValue)) {
    throw new Error("Invalid Number");
  }

  return parsedValue;
};

// Execute Exercise 5

const displayExercise5 = () => {
  const inputData = document.getElementById("ex5-input").value;

  const outputData = processInput(inputData);

  console.log(outputData);

  document.getElementById("ex5-output").textContent = outputData;
};

// Main processing function

const processInput = (text) => {
  const sections = text.split(" : ");

  const divisorText = sections[0];
  const numberText = sections[1];

  const originalText = text;

  const divisorStrings = divisorText.trim().split(/\s+/);
  const numberStrings = numberText.trim().split(/\s+/);

  let divisors = [];
  let numbers = [];
  let invalidFound = false;

  // Validate divisor values
  for (let item of divisorStrings) {
    try {
      divisors.push(toInteger(item));
    } catch (error) {
      invalidFound = true;
    }
  }

  // Validate number values
  for (let item of numberStrings) {
    try {
      numbers.push(toInteger(item));
    } catch (error) {
      invalidFound = true;
    }
  }

  // No valid divisors available
  if (invalidFound && divisors.length === 0) {
    return `corrupt : ${originalText}`;
  }

  let sum = 0;

  // Calculate total of matching numbers
  for (let value of numbers) {
    for (let divisor of divisors) {
      if (value % divisor === 0) {
        sum += value;
        break;
      }
    }
  }

  return `${sum} : ${divisors.join(" ")} : ${numbers.join(" ")}`;
};

