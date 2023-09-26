// Assignment Code
var generateBtn = document.querySelector("#generate");


function getCriteria(){
  console.log("test")
  var length=prompt("PLease enter the length of password you would like to generate.");
  while(length<8 || length>128){
    length=prompt("Please enter a number between 8 and 128.");
  }
  var lowercase=confirm("Please confirm if you would like to use lowercase characters in your password.");
  var uppercase=confirm("Please confirm if you would like to use uppercase characters in your password.");
  var numbers=confirm("Please confirm if you would like to use numeric characters in your password.");
  var special=confirm("Please confirm if you would like to use special characters in your password.");
  return;
}

// Write password to the #password input
function writePassword() {
  getCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

