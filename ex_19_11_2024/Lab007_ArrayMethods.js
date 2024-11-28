// Array Methods

/*
1- slice() : 
* It returns a piece of the array 
* it will not cahnge anything in the original array. 
* it is used to create a copy of an array
    * slice(startIndex, endindex) *

2- splice() : 
* Change original array (Add, remove, replace)
*
    splice(startindex, delCount, newEl1..)
*/

console.log("----------------------slice()----------------------")
let marvelHeroes = ["Iron Man", "Captain America", " Ant Man", "Dr. Strange"]

console.log(marvelHeroes)
let result_slice = marvelHeroes.slice(1,3)
console.log(result_slice)






console.log("----------------------splice()----------------------")

let numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers)
numbers.splice(2,2,101,102)
console.log(numbers)