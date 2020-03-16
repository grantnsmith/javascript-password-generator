// Write a function that takes user input and creates a password
// based on that input and returns it




function generatePassword() {

  // Prompting for length of password
    
    var length = prompt("How many characters would you like your password to be? Please choose between '8' and '128'.");
  
  //   Checking for a number between 8 and 128
  
    while (length < 8 || length > 128) {
        alert("That is not betwen '8' and '128'. Please try again.");
        var length = prompt("How many characters would you like your password to be? Please choose between '8' and '128'.");
    };
  
  //   Asking for other password specifications (uppercase, lowerase, numbers, special characters)
  
    alert("Now we will ask what type of characters you want in your password. For each option, click 'Ok' for Yes and 'Cancel' for No.");
    var uppercase = confirm("Would you like uppercase letters in your password?");
    var lowercase = confirm("Would you like lowercase letters in your password?");
    var numbers = confirm("Would you like numbers in your password?");
    var specialCharacters = confirm("Would you like special characters (e.g. '!', '%', '$') in your password?");
  
  //   Creating the various arrays we will use
  
    var characterSet = [];
    var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
    var specialCharArray = ["!","@","#","$","%","^","&","*","?","~","<",">","{","}","[","]"]
  
  //   Based off user input, creating the final array that our random generator will pick from
  
    if (uppercase && lowercase && numbers && specialCharacters) { 
      characterSet = uppercaseArray.concat(lowercaseArray, numbersArray, specialCharArray);
    } 
    else if (uppercase && lowercase && numbers) { 
      characterSet = uppercaseArray.concat(lowercaseArray, numbersArray);
    }
    else if (uppercase && lowercase) { 
      characterSet = uppercaseArray.concat(lowercaseArray);
    } else {
        characterSet = uppercaseArray
    };
  
  
    
  }

//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
