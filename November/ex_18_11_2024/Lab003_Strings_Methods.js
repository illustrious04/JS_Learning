/*
* String Methods =>
    These are in-build functions to manupulate a string

a) str.toUpperCase()
b) str.toLowerCase()
c) str.trim() -> Remove White space
d) str.slice(start,end?) => Returns part of string- ending value non inclusive
e) str.concat() => Join str2 with str1
f) str.replace(searchVal, newVal) => Used o search any value in the string and relace it with new value
g) str.charAt(idx) => 

*/

console.log("------------------Upper case-----------------------")
let obj1 = "suyash"
output1 = obj1.toUpperCase()
console.log(output1)

console.log("------------------Lower case-----------------------")

let obj2 = "TECHVALENS"
output2 = obj2.toLowerCase()
console.log(output2)

console.log("-------------------Trim----------------------")

let obj3 = "     This is a White space string        "
output3 = obj3.trim()
console.log(output3)

console.log("--------------------Slice---------------------")
let str = "0123456789"
console.log(str.slice(1,4)) // Output will be 123, 4 will be inclusive


console.log("--------------------Concate---------------------")
let str1 = "Hello"
let str2 = "JavaScript"
result = str1.concat(str2) // We can o this with + as well str1 + str2
console.log(result)

console.log("--------------------Replace---------------------")

let obj4 = "Hello"
console.log(obj4.replace("l", "1234"))

console.log("--------------------charAt(idx)---------------------")
let obj5 = "IamLearningJavaScript"
console.log(obj5.charAt(5))