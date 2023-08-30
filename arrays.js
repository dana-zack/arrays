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

//Index Positions

//Index positions refer to the location of a specific element within an array
//Index positions always start with 0 and increases by 1 with each additional element within an array
//Therefore, the first element within an array is at index poisition 0
//The second element within an array is at index position 1
//The third element within an array is at index position 2
//And so on and so forth...
//I'll use my stringsArray variable above as an example:
//Nicole is index position 0
//Holly is index position 1
//Michie is index position 2
//Tommy is index position 3
//Christie is index position 4
