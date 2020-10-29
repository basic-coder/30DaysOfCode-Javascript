// Array Methods⭕⭕
// toString() :- it is used to convert array into string (comma separated);


var cars = ["🚗", "🚓", "🚙", "🚕"];
console.log(cars.toString());//output:- 🚗,🚓,🚙,🚕


// join() method :- it is used to joins all array elements into a string
console.log(cars.join("-"));//output:- 🚗-🚓-🚙-🚕

// pop() :- used to removes the last element from an array
console.log(cars.pop());//output:- 🚕
console.log(cars);//output:- ["🚗", "🚓", "🚙"]

//push() :- used to add a new element at the end to an array
cars.push("🚐");
console.log(cars);//output:- ["🚗", "🚓", "🚙", "🚐"]


// shift() :- used to removes the first element from an array 
console.log(cars.shift());//output:- 🚗
console.log(cars);//output:- ["🚓", "🚙", "🚐"]

// unshift() :- used to removes the first element from an array 
cars.unshift("🚕");
console.log(cars);//output:- ["🚕", "🚓", "🚙", "🚐"]

// delete operator :- used to delete element
delete cars[0];
console.log(cars);//output:- [empty, "🚓", "🚙", "🚐"]

// Use pop() or shift() instead.



var cars = ["🚗", "🚓", "🚙", "🚕"];
// splice():- used to add new items to an array
cars.splice(1, 1 ,"🚚","🚛");
console.log(cars);//output:- ["🚗", "🚚", "🚛", "🚙", "🚕"]

/* splice(position of new element,
how many elements should be removed,
 new elements to be added)*/

//Using splice() to Remove Elements
// syntax:-splice(index, number of items)
cars.splice(1,1);
console.log(cars);//output:- ["🚗", "🚛", "🚙", "🚕"]



// slice():- it is used to slice out a piece of an array into a new array.
var newCars = cars.slice(0,2);
console.log(newCars);//output:- ["🚗", "🚛"]

// concat() used for merging  two array
var a = ["🚗", "🚛"];
var b = ["🚛", "🚙", "🚕"];
var c = a.concat(b);
console.log(c); //output:- ["🚗", "🚛", "🚛", "🚙", "🚕"]