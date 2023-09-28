// Assignment Code
//selects the button element
var generateBtn = document.querySelector("#generate");
//sets arrays for all the characters needed
var alphabetUpperArr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphabetLowerArr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numArr=["0","1","2","3","4","5","6","7","8","9"];
var specialArr=["\u0022","\u0027","\u005C"," ","!","#","$","%","&","(",",",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
//initializes count variable
var count=0;
//initializes empty array
var Arr=[];
// funciton to get the criteria
function getCriteria(){
  // initializes password length to 0
  var passLength=0;
  //prompts the user to enter lenght of password
  passLength=prompt("Please enter the length of password you would like to generate.");
  //allows the user to use the cancel button
  if(passLength===null){
    console.log("works");
    return;
  }
  //checks if password length is a number inbetween 8 and 128
  while(passLength<8 || passLength>128||isNaN(passLength)){
    passLength=prompt("Please enter a number between 8 and 128.");
    //allows user to use cancel button
    if(passLength===null){
      return;
    }
  }
  //confirms if the user want each of the criteria
  var lowercase=confirm("Please confirm if you would like to use lowercase characters in your password.");
  var uppercase=confirm("Please confirm if you would like to use uppercase characters in your password.");
  var numbers=confirm("Please confirm if you would like to use numeric characters in your password.");
  var special=confirm("Please confirm if you would like to use special characters in your password.");
  //checks if at least one criteria is selected other wise ask user to select at least one
  while(!lowercase && !uppercase && !numbers && !special){
    alert("Please select at least one of the criteria.");
    lowercase=confirm("Please confirm if you would like to use lowercase characters in your password.");
    uppercase=confirm("Please confirm if you would like to use uppercase characters in your password.");
    numbers=confirm("Please confirm if you would like to use numeric characters in your password.");
    special=confirm("Please confirm if you would like to use special characters in your password.");
  }
  //returns answers in an array
  return [passLength,lowercase,uppercase,numbers,special];
}
// function to generate password
function generatePassword(Arr){
  //initializes string variable pass
  var pass="";
  //while loop used to make password of desired length
  while(count<Arr[0]){
    //checks if the lowercase criteria is used
  if(Arr[1]){//lowercase
    //randomly selects one character and adds it to the password and adds 1 to count
    pass=pass+alphabetLowerArr[Math.floor(Math.random() * alphabetLowerArr.length) ];
    count++;
  }
  else{
  }
  if(Arr[2]){//uppercase
    //same as above for upper case
    pass=pass+alphabetUpperArr[Math.floor(Math.random() * alphabetUpperArr.length) ];
    count++;
  }
  else{
  }
  if(Arr[3]){//numbers
    //same for numbers
    pass=pass+numArr[Math.floor(Math.random() * numArr.length) ];
    count++;
  }
  else{
  }
  if(Arr[4]){//special
    //same for special 
    pass=pass+specialArr[Math.floor(Math.random() * specialArr.length) ];
    count++;
  }
  }
  //resets count to allow for multiple password generations
  count=0;
  //returns the generated password
  return pass;
}

// console.log(specialArr[0],specialArr[1],specialArr[2]);
// Write password to the #password input
function writePassword() {
  //calls function to get criteria
  var criteriaArr=getCriteria();
  //calls function to generate password and uses the criteria for the parameters
  var password = generatePassword(criteriaArr);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
//listens for click
generateBtn.addEventListener("click", writePassword);

