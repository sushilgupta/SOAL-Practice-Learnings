//Collection of arrays..
let emp = ["Sushil", "Gupta", 29];
//console.log(emp);

//storing value to a new variable from existing arrays
let myArray = ['Sushil', 'Guru'];
let newArray = myArray[1];

//Pushing data into an existing Array
let myArray1 = ['Sushil', 'Guru'];
myArray1.push('Kadir');

//Removing last data from Array using .pop()
var myArray2 = [["Sushil", 29], ["Guru", 26]];
var popMyArray2 = myArray2.pop();

//Removing first data from Array using .shift()
var myArray3 = [["Guru", "Nath"], ["Kadir", "Hussain"]];
var shifyMyArray3 = myArray3.shift();

//Removing first data from Array using .shift() and adding data to the start using .unshift();
var myArray5 = [["Guru", "Nath"], ["Kadir", "Hussain"]];
var myArray5.shift();
var myArray5.unshift(["Manisha", "Jha"]);

