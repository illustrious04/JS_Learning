/**
 * For a given array of numbers, print the square of each value using the forEach loop.
 *
 */

let num = [2, 5, 6, 7, 3, 6]

num.forEach((num)=>{
    console.log(num*num);
});

console.log("-------Another way of writing call back function.")

let calSquare = (num) => {
    console.log(num * num);
};

num.forEach(calSquare)