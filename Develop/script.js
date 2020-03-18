// Write a function that takes user input and creates a password
// based on that input and returns it



function generatePassword() {

  // Prompting for length of password
    
    var length = parseInt(prompt("How many characters would you like your password to be? Please choose between '8' and '128'."));
    
  //   Checking for a number between 8 and 128
  
    while (length < 8 || length > 128)   {
        alert("That is not a number betwen '8' and '128'. Please try again.");
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
    var passwordArray = [];
    var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
    var specialCharArray = ["!","@","#","$","%","^","&","*","?","~","<",">","{","}","[","]",":",";"];
  
  //   Based off user input, creating the final array that our random generator will pick from
  
  // User picks all 4 options
  
    if (uppercase && lowercase && numbers && specialCharacters) { 
      characterSet = uppercaseArray.concat(lowercaseArray, numbersArray, specialCharArray);
    } 
  
    // User picks uppercase, lowercase, numbers
  
    else if (uppercase && lowercase && numbers) { 
      characterSet = uppercaseArray.concat(lowercaseArray, numbersArray);
    }
  
    // User picks uppercase, lowercase, and special characters
  
    else if (uppercase && lowercase && specialCharacters) { 
      characterSet = uppercaseArray.concat(lowercaseArray, specialCharArray);
    }
  
    // User picks uppercase, numbers, and special characters
  
    else if (uppercase && numbers && specialCharacters) { 
      characterSet = uppercaseArray.concat(numbersArray, specialCharArray);
    }
  
    // User picks lowercase, numbers, and special characters
  
    else if (lowercase && numbers && specialCharacters) { 
      characterSet = lowercaseArray.concat(numbersArray, specialCharArray);
    }
  
    // User picks uppercase and lower case
  
    else if (uppercase && lowercase) { 
      characterSet = uppercaseArray.concat(lowercaseArray);
    
    } 
  
    // User picks uppercase and numbers
  
    else if (uppercase && numbers) { 
      characterSet = uppercaseArray.concat(numbersArray);
    
    } 
  
    // User picks uppercase and special characters
  
    else if (uppercase && specialCharacters) { 
      characterSet = uppercaseArray.concat(specialCharArray);
    
    }
    
    // User picks lowercase and special characters
  
    else if (specialCharacters && lowercase) { 
      characterSet = specialCharArray.concat(lowercaseArray);
    
    } 
  
    // User picks lowercase and numbers
  
    else if (numbers && lowercase) { 
      characterSet = numbersArray.concat(lowercaseArray);
    
    } 
  
    // User picks special characters and numbers
  
    else if (numbers && specialCharacters) { 
      characterSet = numbersArray.concat(specialCharArray);
    
    } 
  
    // User picks just uppercase
    
    else if (uppercase) {
        characterSet = uppercaseArray;
    
    } 
  
    // User picks just lowercase
    
    else if (lowercase) {
        characterSet = lowercaseArray;
  
    } 
  
    // User picks just numbers
  
    else if (numbers) {
        characterSet = numbersArray;
  
    } 
  
    // User picks just special characters
  
    else if (specialCharacters) {
        characterSet = specialCharArray;
  
    } 
      
    // User doesn't pick anything (returns password as if they picked all 4 options)
      
    else {
        characterSet = uppercaseArray.concat(lowercaseArray, numbersArray, specialCharArray);
    
    }

    // For loop that creates final password Array; this is made into var password as a string
    
    for (var i = 0; i < length; i++) {
          passwordArray.push(characterSet[Math.floor(Math.random() * characterSet.length)]);
          var password = passwordArray.join('');
    }

    // Returns final variable password to function
  
    return password; 
    
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
