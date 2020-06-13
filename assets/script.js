// Script to create a random password based on criteria that the user decides


//place all password criteria options into arrays
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "{", "}", "~"];

//declaring criteria variables
var confirmLetterLower;
var confirmLetterUpper;
var confirmNumber;
var confirmSpecialChar;
var confirmCharCount = "";


function createPassword() {
  //verify with user the types of characters they want in their password
  var confirmLetterLower = (window.confirm("Press 'OK' if you want to include lowercase letters."));
  var confirmLetterUpper = (window.confirm("Press 'OK' if you want to include uppercase letters."));
  var confirmNumber = (window.confirm("Press 'OK' if you want to include numbers."));
  var confirmSpecialChar = (window.confirm("Press 'OK' if you want to include special characters."));

    //create a loop that runs if the user doesn't choose any criteria, they must choose at least one
    while (confirmLetterLower === false && confirmLetterUpper === false && confirmNumber === false && confirmSpecialChar === false) {
      window.alert("You have to choose at least one set of criteria for your password.");
      //confirm the password criteria with the user again
      var confirmLetterLower = (window.confirm("Press 'OK' if you want to include lowercase letters."));
      var confirmLetterUpper = (window.confirm("Press 'OK' if you want to include uppercase letters."));
      var confirmNumber = (window.confirm("Press 'OK' if you want to include numbers."));
      var confirmSpecialChar = (window.confirm("Press 'OK' if you want to include special characters."));
    }

  //ask the user how many characters long they want their password to be
  var confirmCharCount = (window.prompt("How many characters long do you want your password to be? Your password can be a minimum of 8 characters and a maximum of 128 characters."));

  //alert user with error message if they choose an answer outside the acceptable range
  while (confirmCharCount < 8 || confirmCharCount > 128) {
    //message to user if their response is outside of acceptable range
    window.alert("You must choose a password length between 8 and 128 characters. Please try again.");
    //repeat the question asking them how many characters they want in their password
    var confirmCharCount = (window.prompt("How many characters long do you want your password to be? Your password can be a minimum of 8 characters and a maximum of 128 characters.")); 
  }

  //repeat back to user how many characters they choose if their response falls within acceptable range
  window.alert("Your password will be " + confirmCharCount + " characters long.");

  //add actions to password criteria
  var passwordChar = [];

    if (confirmLetterLower){
      passwordChar = passwordChar.concat(letterLower);
    }

    if (confirmLetterUpper){
      passwordChar = passwordChar.concat(letterUpper);
    }

    if (confirmNumber){
      passwordChar = passwordChar.concat(number);
    }

    if (confirmSpecialChar){
      passwordChar = passwordChar.concat(specialChar);
    }

    //display password character array in console
    console.log(passwordChar, "password character array");
  
    //fill string with random characters
    var randomPassword = "";

    for (var i = 0; i < confirmCharCount; i++) {
      randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
      //display the generated password in console
      console.log(randomPassword, "generated random password");
    }
  
  //display generated password in html on webpage
  document.getElementById("password").innerHTML = randomPassword;
}

