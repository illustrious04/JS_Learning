/* 
Create a game where you start with any random number, Ask the user to keep guessing the game number until the
user enteres the correct value.
*/

let game_number = 25;

let user_number = prompt("Guess the game number")

while(user_number != game_number) {
    user_number = prompt("You Entered incorrect number, Guess Again")
}

console.log("Congratulations ! You entered a correct number")

/*
Note: 
Prompt will return the string value, do not use !== in the operator. oterwise it will not match the number.
 */