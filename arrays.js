// Declare variables
var stringsArray = ["Nicole","Holly","Michie","Tommy","Christie"];
var numbersArray = [88, 89, 90, 91, 92];
var booleansArray = [true, true, true, false];

//Array methods

//Method 1: "shift"
//This will remove the element at the index position and shifts the values at consecutive indexes down
stringsArray.shift();
console.log(stringsArray);
//Method 2: "unshift"
//This will add the specified elements to the beginning of the original array
numbersArray.unshift(86, 87);
console.log(numbersArray);
//Method 3: "pop"
//This will remove the last element from an array
booleansArray.pop();
console.log(booleansArray);