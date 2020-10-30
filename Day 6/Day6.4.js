// For Loop🎇🎇
// For Loop is to run the same code over and over again
// syntax:-
// for ( initialization; condition; increment ) {
//     statements;
// }

// ex:-
for(var i = 0; i < 5; i++){
  console.log("Hello World");
}
/*output:-
Hello World
Hello World
Hello World
Hello World
Hello World
*/

for(var i = 0; i < 5; i++){
  console.log(i);
}

/*output:-
0
1
2
3
4
4
*/

// For In Loop🎇🎇
// It is used to access the properties of an object
var Person = {name:"mike", gender:"male", age:19};
var a;
for (a in Person) {
console.log(Person[a]);
}
/*output:-
  mike
  male
  19
*/

// For Of Loop🎇🎇
// It is used to access the values of an iterable objects
var cars = ["🚗", "🚓", "🚙", "🚕"];
var a;
for (a of cars) {
console.log(a);
}
/*output:-
🚗
🚓
🚙
🚕
*/