// Comparison and Logical Operators😎😎
// Comparison and Logical operators returns true or false
// == :-	equal to 😎
var a = 4,b = 8;
console.log(a==b);//output:- false

// === :-equal value and equal type😎
var c = 5;
var d = '5';
console.log(c==d);//ouput:- true
console.log(c===d);//output:-false

// != :- not equal😎
console.log(c!=d);//output:- false
// !==	not equal value or not equal type😎
console.log(c!==d);//output:- true

// > :- greater than😎
// < :- less than😎
console.log(a > b)//output:-false
console.log(a < b)//output:-true

// >= :- greater than or equal to😎
// <= :- greater than or equal to😎
console.log(a >= b)//output:-false
var f = 5; g = 5;
console.log(f <= g)//output:-true


// Logical Operators:- used to determine the logic between variables
// && :- and
// || :- or
// ! :- not

var a = 4,b = 8;
console.log(a < b && b > 7);//output:- true
console.log(a > b || b > 7);//output:- true

// Ternary Operator
//syntax:- 
// variable_name = (condition) ? statement1:statement2;
// if the condition is true:- statement1 run 
// if the condition is false:- statement2 run 
var value = 4;
var x = (value < 5) ? "value is less than 5":"value is greater than 5";
console.log(x);//output:-value is less than 5


