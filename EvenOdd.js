// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Function to check if a number is odd
function isOdd(number) {
  return number % 2 !== 0;
}

// Function to prompt the user for input and display the result
function checkEvenOdd() {
  const input = prompt("Enter a number (or type 'exit' to quit):");

  if (input === null || input.toLowerCase() === 'exit') {
    return; // Exit the program if the user types 'exit' or cancels
  }

  const number = parseInt(input);

  if (isNaN(number)) {
    alert("Invalid input. Please enter a valid number.");
  } else {
    if (isEven(number)) {
      alert(`${number} is even.`);
    } else {
      alert(`${number} is odd.`);
    }
  }

  // Recursively call the function to continue checking numbers
  checkEvenOdd();
}

// Start the program
checkEvenOdd();
