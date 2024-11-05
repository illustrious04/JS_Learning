//Program 1
let age = 16;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You CANNOT Vote");
}

//Program 2
let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}

console.log(color);

//Program 3 Odd or Even number

let num = 10;

if (num % 2 === 0) {
  console.log(num, "Is Even");
} else {
  console.log(num, "Is Odd");
}

//Program
function sumOfDigits(number) {
  let sum = 0;

  // Convert the number to a string, then split it into individual digits
  let digits = number.toString().split("");

  // Iterate over each digit
  for (let digit of digits) {
    sum += parseInt(digit); // Convert each character back to an integer and add to sum
  }

  return sum;
}

// Example usage:
let inputNumber = 23;
let result = sumOfDigits(inputNumber);
console.log("The sum of digits of", inputNumber, "is:", result);
