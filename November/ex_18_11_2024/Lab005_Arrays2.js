// Looping in Array => 
/*
Print all elements of an Array.

*/

let heros = ["Bat Man", "Super Man", "Shaktiman", "SpiderMan", "Wonder Women"]


// Using for Loop
// for (let index = 0; index < heros.length; index++ ){
//     console.log(heros[index]);
// }

// for Of loop

for (let hero of heros){
    console.log(hero)
}

console.log("---------------------Cities------------------------------------")

let cities = ["Indore", "Jabalpur", "Bhopal", "Jaipur"]

for(let city of cities){
    console.log(city.toLocaleUpperCase())
}



