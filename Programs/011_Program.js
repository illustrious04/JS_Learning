/**
 * Take a number n as a user input create an array of numbers 1 to n, 
 * a) Use the reduce method to calculate the sum of all the numbers in the array.
 * b) Use the reduce method to calculate the product of all the numbers in the array.
 */

let num = prompt('Enter a number')

let arr = []

for(let i=1; i<=num; i++){
    arr[i-1] = i;

}

console.log(arr);

console.log("-----Sum of All the array numbers----------")
let sum = arr.reduce((result, current)=>{
    return result + current;
});

console.log(sum);

console.log("-----Factorial of All the array numbers----------")

let fact = arr.reduce((result,current)=>{
    return result * current;

})
console.log(fact)