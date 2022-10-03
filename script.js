var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Var To Upper Case ------------
var EmptyUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
//--------------------------------------
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("value of Password must be  between 8 and 128");


  if(!passwordLength) {
    alert("Required value must be enter");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("choose between 8 and 128");


  } else { 
    confirmLower = confirm("lower case letters?");
    
    confirmUpper = confirm(" upper case letters?");

    confirmNumber = confirm(" numbers?");

    confirmSpecial = confirm(" special symbols characters?");

  };

  // No answer then
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("choose a criteria");
  // 4 true options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);

  }
  // 3 true options
  else if (confirmLower && confirmUpper && confirmNumber && !confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers);

  }
  else if (confirmLower && confirmUpper && !confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);

  }
  else if (confirmLower && !confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);

  }
  else if (!confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);

  }
 
  else if (confirmLower && confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = lowerCase.concat(upperCase);

  }
  else if (confirmLower && !confirmUpper && confirmNumber && !confirmSpecial) {
    userChoices = lowerCase.concat(numbers);

  }
  else if (confirmLower && !confirmUpper && !confirmNumber && confirmSpecial)  {
    userChoices = lowerCase.concat(special);

  }
  else if (!confirmLower && confirmUpper && confirmNumber && !confirmSpecial) {
    userChoices = upperCase.concat(numbers);

  }
  else if (!confirmLower && confirmUpper && !confirmNumber && confirmSpecial)  {
    userChoices = upperCase.concat(special);

  }
  else if (!confirmLower && !confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);

  }
 
  else if (confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = lowerCase;

  }
  else if (!confirmLower && confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = EmptyUpper.concat(upperCase);

  }
  else if (!confirmLower && !confirmUpper && confirmNumber && !confirmSpecial) {
    userChoices = numbers;

  }
  else if (!confirmLower && !confirmUpper && !confirmNumber && confirmSpecial) {
    userChoices = special;
  
  };


  var passwordBlank = [];


  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);

  }

  var password = passwordBlank.join("");

  return password;

}