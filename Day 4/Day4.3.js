
// 💥💥💥💥
// concat():- it is to combine two strings
var a = "hello";
var b = "world";
console.log(a.concat(" ", b));//output:- hello world

// Extracting String💥

// There are 3 methods for extracting a String
// 💥slice(start, end)
// 💥substring(start, end)
// 💥substr(start, length)

//💥slice() :- this method extracts a part of a string ,returns the extracted part in a new string

var a = "abcdefgh";
var b = a.slice(2,5);
console.log(b);//output:-cde

//negative parameters
var a = "abcdefgh";
var b = a.slice(-5,-1);
console.log(b);//output:-defg

//only starting index
var a = "abcdefgh";
var b = a.slice(5);
console.log(b);//output:-fgh



//💥 substring():- similar to slice() method.but substring() cannot accept negative index

var a = "abcdefgh";
var b = a.substring(2,5);
console.log(b);//output:-cde


//💥substr():- similar to slice() similar to slice(), but second parameter specifies the length

var a = "abcdefgh";
var b = a.substr(1,3);
console.log(b);//output:-bcd

// 💥💥💥💥
//💥 replace():- It is use to replace value with another value

var a = "abcdefgh";
var b = a.replace("abc","xyz");
console.log(b);//output:-xyzdefgh

// note:-
//1. this method replaces only the first match
//2. method is case sensitive

var a = "abcdefgh";
var b = a.replace("ABC","xyz");
console.log(b);//output:-abcdefgh
var b = a.replace(/ABC/i,"xyz");
// To replace case insensitive use a regular expression with an /i flag 
console.log(b);//output:-xyzdefgh


// 💥💥💥💥
// toUpperCase():-it is used to convert string to upper case
// toLowerCase():- it is used to convert string to lower case
var str = "Hello World";
console.log(str.toUpperCase());//output:- HELLO WORLD
console.log(str.toLowerCase());//output:- hello world


// 💥💥💥💥
// trim():-  removes whitespace from both sides of a string
var str = "   Hello World   ";
console.log(str.trim());//output:-Hello World

// 💥💥💥💥
// charAt():- returns the character at a specified index 
var str = "Hello World";
console.log(str.charAt(1)); //output:- e
// charCodeAt() :-returns the unicode of the character at a specified index
console.log(str.charCodeAt(1));//output:-101


