// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetUpperArr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphabetLowerArr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numArr=["0","1","2","3","4","5","6","7","8","9"];
var specialArr=["\u0022","\u0027","\u005C"," ","!","#","$","%","&","(",",",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var count=0;
// var  criteriaArr=[];
var Arr=[];

function getCriteria(){
  // console.log("test")
  var passLength=0;
  passLength=prompt("PLease enter the length of password you would like to generate.");
  if(passLength===null){
    console.log("works");
    return;
  }
  while(passLength<8 || passLength>128){
    passLength=prompt("Please enter a number between 8 and 128.");
    if(passLength===null){
      return;
    }
  }
  var lowercase=confirm("Please confirm if you would like to use lowercase characters in your password.");
  var uppercase=confirm("Please confirm if you would like to use uppercase characters in your password.");
  var numbers=confirm("Please confirm if you would like to use numeric characters in your password.");
  var special=confirm("Please confirm if you would like to use special characters in your password.");
  while(!lowercase && !uppercase && !numbers && !special){
    alert("Please select at least one of the criteria.");
    lowercase=confirm("Please confirm if you would like to use lowercase characters in your password.");
    uppercase=confirm("Please confirm if you would like to use uppercase characters in your password.");
    numbers=confirm("Please confirm if you would like to use numeric characters in your password.");
    special=confirm("Please confirm if you would like to use special characters in your password.");
  }
  return [passLength,lowercase,uppercase,numbers,special];
}

function generatePassword(Arr){
  var pass="";
  console.log(Arr);
  while(count<Arr[0]){
  if(Arr[1]){//lowercase
    pass=pass+alphabetLowerArr[Math.floor(Math.random() * alphabetLowerArr.length) ];
    count++;
    console.log(pass);
  }
  else{

  }
  if(Arr[2]){//uppercase
    pass=pass+alphabetUpperArr[Math.floor(Math.random() * alphabetUpperArr.length) ];
    count++;
    console.log(pass);
  }
  else{

  }
  if(Arr[3]){//numbers
    pass=pass+numArr[Math.floor(Math.random() * numArr.length) ];
    count++;
    console.log(pass);
  }
  else{

  }
  if(Arr[4]){//special
    pass=pass+specialArr[Math.floor(Math.random() * specialArr.length) ];
    count++;
    console.log(pass);
  }
  }
  count=0;
  return pass;
}

// console.log(specialArr[0],specialArr[1],specialArr[2]);
// Write password to the #password input
function writePassword() {
  var criteriaArr=getCriteria();

  // console.log(criteriaArr);
  var password = generatePassword(criteriaArr);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // count=0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

