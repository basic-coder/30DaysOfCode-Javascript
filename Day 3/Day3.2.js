// JavaScript Objects🤍🤍
// An object is a collection of properties, and a 
// property is an association between a name (or key) and a value

// Objects are variables too. But objects can contain many values.
// syntax🤍🤍
// var object_name = {key:value , key:value}

var person = {name:"amit",age:18,gender:"male"};

// Accessing Properties
// object_name.property_name
// or
// object_name["property_name"]

// ex:-
console.log(person.name);
console.log(person.age);
console.log(person.gender);

ex:-
console.log(person["name"]);
console.log(person["age"]);
console.log(person["gender"]);


// object methods
var person = {
    name:"amit",
    age:18,
    gender:"male",
    allProperties: function(){
        return this.name + " " + this.age + " " + this.gender;
    }
}

console.log(person.allProperties());