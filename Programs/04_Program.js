/* 
Prompt the user to enter their full name. Generate a username for them based on the input
Start username with @, followed by their full name and ending with the fullname length.
eg: user name = "suyash guha" , username should be "@suyashguha10"

*/

let full_name = prompt("Enter your full name without space")

let user_name = "@" + full_name + full_name.length;
console.log(user_name)