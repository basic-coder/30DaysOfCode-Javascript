// Strings👋👋
// string is zero or more characters written single or double quotes

// ex:-
var a = "Hello ";
var b = "World";


// length property
console.log(a.length);//length of a string is 6 bcz is also consider space

// String Concatenation 
var c = a + b;
console.log(c);//output:- Hello World


// var i = ""Hello world""; ❌

var i = '"Hello world"';
console.log(i);//output:-"Hello world"

// or use 👇
// Escape Character
// \"
// ex:-
    var e = "\"Hello world\"";
    console.log(e);//output:-"Hello world"

    // \n -	New Line
    // \b -	Backspace
    // \t -	Horizontal Tabulator
    // \v -	Vertical Tabulator
    // \r -	Carriage Return
    // \f -	Form Feed


// Strings Can be Objects
// defined as objects with the keyword new
var a = "abc";
var b = new String("abc");

console.log(typeof(a));//return string
console.log(typeof(b));//return object

console.log(a==b);//return true bcz value are same
console.log(a===b);//return false bcz type are diffrent

// Objects cannot be compared
var x = new String("abc");             
var y = new String("abc");
console.log(x==b);//return false bcz x and y are different objects
