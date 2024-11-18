/*
For a given array with prices of 5 items [250, 645, 300,900,50]
All items have an offer of 10% OFF on them. Change the array to store final price
after applying offer.
*/


let items = [250, 645, 300,900,50];
let i = 0;

// Using for of loop 

// for(let val of items){
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer ${items[i]}`)
//     i++
// }

// Using for loop

for(let val = 0; val < items.length; val++){
    let offer = items[i] / 10;
    items[i] -= offer;


}

console.log(items)