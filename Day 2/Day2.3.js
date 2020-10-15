// Data Types

// ⚡⚡⚡⚡⚡⚡⚡⚡⚡
// adding a number and a string
var a = 16 + "hello";
console.log(a);

// JavaScript will treat the number as a string

var a = 4 + 2 + "hello";
console.log(a);//output:- 6hello

var a = "hello" + 4 + 2;
console.log(a);//output:-hello42


// undefined
var x;
console.log(x); //output:-undefined


// ⚡⚡⚡⚡⚡⚡⚡⚡⚡
// JavaScript String

// You can use single or double quotes
var a = "hello";
console.log(a);
var b = 'hello';
console.log(b);


// ⚡⚡⚡⚡⚡⚡⚡⚡⚡
// JavaScript Numbers
// Numbers can be written with, or without decimals

var m = 4;
var n = 4.5;
console.log(m + "\n" + n);//use \n for new line


// ⚡⚡⚡⚡⚡⚡⚡⚡⚡
// JavaScript Booleans

var b = true;
var c = false;
console.log(b + "\n" + c);



// ⚡⚡⚡⚡⚡⚡⚡⚡⚡
// JavaScript Arrays
// JavaScript arrays are written with square brackets
// An array is a data structure that contains a group of elements
var marks = [12,45,54];
console.log(marks);

// Array indexes are zero-based
// first item is [0]

console.log(marks[0]);//output:-12
console.log(marks[1]);//output:-45


// ⚡⚡⚡⚡⚡⚡⚡⚡⚡
// JavaScript Objects
// objects are written with curly braces {}

// Object properties are written as name:value pairs, separated by commas

var a = {a:'hello',b:20,c:true};
console.log(a);
console.log(a.a);//used . to access values output:-hello
console.log(a.b);//output:-20