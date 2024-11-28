/*
* forEach Loop in Array:- 
* arr.forEach(callBackFunction)

CallbackFunction:Here it is a function to execute for each element in the array. 

arr.forEach((val)=> {
    console.log(val)
})

*/

let arr = ["Pune", "mumbai", "Delhi"]

// arr.forEach(function printVal(val){  // val = value at each index.
//     console.log(val)

// })

arr.forEach((val, idx , arr)=>{  // val = value at each index.
    console.log(val.toLocaleUpperCase(), idx, arr )

})

