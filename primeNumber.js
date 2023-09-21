// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

// Function to prompt the user for a list of numbers and find prime numbers
function findPrimeNumbers() {
  const input = prompt("Enter a list of numbers separated by commas (e.g., 1,2,3,4):");
  
  if (input === null) return; // Exit the program if the user cancels
  
  const numbers = input.split(',').map(number => parseInt(number.trim()));
  const primeNumbers = numbers.filter(isPrime);

  if (primeNumbers.length === 0) {
    alert("No prime numbers found in the list.");
  } else {
    alert(`Prime numbers in the list: ${primeNumbers.join(', ')}`);
  }

  // Recursively call the function to continue checking numbers
  findPrimeNumbers();
}

// Start the program
findPrimeNumbers();
