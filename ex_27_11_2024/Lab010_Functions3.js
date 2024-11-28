/*
-> Functions: 
-------------
Block of code to perform a specific task, can be invoked whenever needed.

*/

function myFunction(msg){  // Parameter
    console.log(msg)
}

myFunction("Hello This is JavaScript") // Argument.


console.log("------------------------------------------------------------------------------")

function sum(a,b){
    // a and b variables are local variable--> Scope--> within the function
    result = a + b;
    return result
}

let sum_val = sum(34,45)
console.log("sum_val is", sum_val)

console.log("------------------------------------------------------------------------------")