// Map()
/**
 * arr.map(callbackFnx(value, idx, array))

let newArr = arr.map((val)=>{
    return val*2
})
 * 
 */
console.log("--------Map() Method-----------")
let nums = [67,78,98,88,98]

nums.map((val)=>{
    console.log(val)
})
console.log("-----We can also retuen a new array------") 
let newArr = nums.map((val)=>{
    return val * 2
})
console.log(newArr)


console.log("--------Filter() Method------------------")
let filterArray = [2,4,6,8,1,3,5,7,9,]

let newArray = filterArray.filter((val)=>{
    return val % 2 === 0;
    
})

console.log(newArray)