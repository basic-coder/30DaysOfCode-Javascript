// String Methods🔸🔸🔸🔸

// 🔸Finding a String in a String
//🔸1:- indexof():-returns the index of first occurrence of a specified text in a string

var a = "abcdefg haijk";
var b = a.indexOf("def");
console.log(b);//output:- 3

//🔸2.lastIndexOf():-returns the index of the last occurrence of a specified text in a string
var a = "abcdefg hijkdef";
var b = a.lastIndexOf("def");
console.log(b);//output:- 12

// if value not found then the both Methods return -1
var b = a.lastIndexOf("nm");
console.log(b);//output:- -1


// 🔸indexof() and lastIndexOf() methods accept a second parameter as the starting position
var a = "abcdefg hijkadef";

console.log(a.indexOf("a"));//output:-0
console.log(a.indexOf("a",5));//output:-12


// 🔸search():-search string and return the position of the first occurrence
var a = "hello world";
console.log(a.search("wor"));//output:- 6