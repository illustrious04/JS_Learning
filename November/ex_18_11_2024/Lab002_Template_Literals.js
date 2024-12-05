/*
Template Literals=>
* A Way to have embedded expression in strings
* It is a special typre of string
* We need to user backticks 

  'this is a template litera'

* string interpolation=>
    To Create strings by doing substitution of placeholders
                     `String ${Expression} String`
*/

let obj = {
    item: "pen",
    price: 10
}

// Approch 1
console.log("---------------String Approch---------------")
console.log("The cost of", obj.item, "is", obj.price, "rupees") 

console.log("---------------Template literal---------------")
//Approch 2- Template Literals 
let output = `The cost of ${obj.item} is ${obj.price} rupees`
console.log(output)

console.log("---------------Template literal---------------")
let outpt1 = `Template literal first calculate the value inside the curly braces ${2+2+4}`
console.log(outpt1)

console.log("---------------Escape Character---------------")
console.log("Suyash\nGuha")
console.log("Suyash\tGuha")