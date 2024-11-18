/*
For the given array of marks of students [85, 95, 47 , 67, 52 , 58]
find the average marks of the entire class.

*/

let marks = [85, 95, 47 , 67, 52 , 58]

let sum = 0; 

for (let val of marks){
    sum += val;

}

let avg = sum / marks.length;
console.log("Average marks of the class is :", avg)