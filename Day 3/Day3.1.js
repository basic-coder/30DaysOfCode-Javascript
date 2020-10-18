// 🤩🤩🤩🤩🤩🤩
// Functions in js

// function is a block of code designed to perform a particular task
// ex:-
// function add(a, b) {
//   return a + b;
// }
// to define a function use function keyword then write function name with parentheses ()
// In above Ex (a ,b) is a parameters of function
// the parameters(arguments) are the values received by the function when it is invoked 

// call function in js : - function_name(arguments)
// 🤩🤩🤩🤩🤩🤩
// Example:-
var add = add(5, 8);   
console.log(add);//output:- 13
function add(a, b) {
  return a + b;            
}


// 🤩🤩🤩🤩🤩🤩
// Function Return
// When JavaScript reaches a return statement then function will stop executing

// 🤩🤩🤩🤩🤩🤩
// Local Variables
function myFunc(){
    var c = 8;
    // code here can use c variable 
}
console.log(c);❌
// code here can not use c variable 

// Local variables can only be accessed from within the function