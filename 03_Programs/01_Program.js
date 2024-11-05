// alert("Hello");
// prompt("Hello"); //Temperory way to take input from user

// Question: Get user to input a number using prompt ("Enter a number"). Check the number is multiple of 5 or not

let num = prompt("Enter a number");

if (num % 5 === 0) {
  console.log(num, " is Multiple of 5");
} else {
  console.log(num, " is Not multiple of 5");
}
