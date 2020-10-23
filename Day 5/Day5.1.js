// Arrays in JavaScript🚙🚙🚙🚙
// It is used to store multiple values in a single variable
// ex:-
var a = [1,2,3,4];

// Creating an Array in JS
// var arrayName = [value1, value2, value3];

// Array using new keyword
var a = new Array(1,2,3);

// Access the Elements 🚙🚙🚙🚙
// syntax:- arrayName[index];
// You access an array element using index number
// Array indexes start with 0.
console.log(a[0]);//output:-1


// Access the Full Array🚙🚙🚙🚙
console.log(a);//output:-[1, 2, 3]

// Properties and Methods of Array
// length:-returns the number of elements
//sort:- this method sorts arrays

console.log(a.length);//output:-3

var b = new Array(5,3,8,1,2,4);
console.log(b.sort());//output:-[1, 2, 3, 4, 5, 8]

// Adding Array Elements:-🚙🚙🚙🚙
// push() method is used to add new element in array
var arr = [5,3,8,1];
console.log(arr);//output:-[5, 3, 8, 1]
arr.push(9);
console.log(arr);//output:-[5, 3, 8, 1, 9]

// or use length Property to add new element
arr[arr.length] = 2;
console.log(arr);//output:- [5, 3, 8, 1, 9, 2]


// 🚙🚙🚙🚙
var cars = ["🚗", "🚓", "🚙", "🚕"];
console.log(cars[0]);//output:-🚗
console.log(cars[1]);//output:-🚓
console.log(cars[2]);//output:-🚙
console.log(cars[3]);//output:-🚕
