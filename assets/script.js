// Assignment code here

//place all password criteria options into arrays
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "{", "}", "~"];

//declaring variables
var confirmCharCount = "";

//confirm with user the amount of characters they want their password to be
function createPassword() {
  var confirmCharCount = (window.prompt("How many characters long do you want your password to be? Your password can be a minimum of 8 characters and a maximum of 128 characters."));

  //alert user with error message if they choose an answer within acceptable range
  while (confirmCharCount < 8 || confirmCharCount > 128) {
    //message to user if response is outside of acceptable range
    window.alert("You must choose a password length between 8 and 128 characters. Please try again.");
    var confirmCharCount = (window.prompt("How many characters long do you want your password to be? Your password can be a minimum of 8 characters and a maximum of 128 characters.")); 
  }

  //repeat back to user how many characters they choose if it falls within acceptable range
  window.alert("Your password will be " + confirmCharCount + " characters long.");

  //verify with user the types of characters they want in their password
  var confirmLetterLower = (window.confirm("Press 'OK' if you want to include lowercase letters."));
  var confirmLetterUpper = (window.confirm("Press 'OK' if you want to include uppercase letters."));
  var confirmNumber = (window.confirm("Press 'OK' if you want to include numbers."));
  var confirmSpecialChar = (window.confirm("Press 'OK' if you want to include special characters."));
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
