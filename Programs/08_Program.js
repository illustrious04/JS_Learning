/**
 * Create a function using the "function" keyword that takes a String as an argument and returns thenumber of vowels in the string.
 */

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count ++;
        }
    }
    return count;
}

// Create the above program by using arrow function.

const vowelCount = (str)=> {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count ++;
        }
    }
    return count;
}