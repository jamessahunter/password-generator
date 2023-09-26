// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetUpperArr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphabetLowerArr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numArr=["0","1","2","3","4","5","6","7","8","9"];
var specialArr=["\u0022","\u0027","\u005C"," ","!","#","$","%","&","(",",",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];


var  criteriaArr=[];
var Arr=[];

function getCriteria(){
  // console.log("test")
  var passLength=prompt("PLease enter the length of password you would like to generate.");
  while(passLength<8 || passLength>128){
    length=prompt("Please enter a number between 8 and 128.");
  }
  var lowercase=confirm("Please confirm if you would like to use lowercase characters in your password.");
  var uppercase=confirm("Please confirm if you would like to use uppercase characters in your password.");
  var numbers=confirm("Please confirm if you would like to use numeric characters in your password.");
  var special=confirm("Please confirm if you would like to use special characters in your password.");
  return [passLength,lowercase,uppercase,numbers,special];
}

function generatePassword(Arr){
  console.log(Arr);
  if(Arr[1]){//lowercase
    console.log("lower");
  }
  else{

  }
  if(Arr[2]){//uppercase
    console.log("upper");
  }
  else{

  }
  if(Arr[3]){//numbers
    console.log("number");
  }
  else{

  }
  if(Arr[4]){//special
    console.log("special");
  }
  return;
}

// console.log(specialArr[0],specialArr[1],specialArr[2]);
// Write password to the #password input
function writePassword() {
  criteriaArr=getCriteria();
  // console.log(criteriaArr);
  var password = generatePassword(criteriaArr);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

