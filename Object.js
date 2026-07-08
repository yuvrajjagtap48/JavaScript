// Object => A collection of key-value pairs.
// const user = {
//    name: "Alex",
//    age: 22,
//    isStudent: true
// };

function fn(){
   return {name : "Alex"};
}
console.log(fn());
// Accessing Values
// Dot Notation
// console.log(user.name);

// Bracket Notation
// console.log(user["age"]);



// Prototype => A prototype is an object from which other objects inherit properties and methods. 
// JavaScript uses prototypes to implement inheritance and share methods efficiently between objects.
// Every JavaScript object has a hidden connection to another object called: 👉 Prototype
function Person() {}
console.log(Person.prototype);

// Why prototype exists? To share methods efficiently.Instead of copying methods into every object,JS keeps one shared copy.

// Prototype Chain =>  When JS cannot find a property, it searches upward through prototypes.

// prototype👉 Exists on functions.Used when creating objects with new.
// __proto__👉 Exists on objects.Points to actual prototype object.

// Inheritance =>  When an object can access properties and methods of another object through the prototype chain.
// Constructor function =>  A function used to create objects with the new keyword, setting up the prototype chain for inheritance.


// Object Destructuring => Object destructuring allows extracting properties from an object and storing them directly into variables.
const user = {
   name: "Yuvraj",
   city: "Pune"
};
const {name, city} = user;
console.log(name);
console.log(city);


// Print Array
const number = [1, 2, 3, 4, 5];
function printArray(arr){
   for(let i = 0; i < arr.length; i++){
      console.log(arr[i]);
   }
}
printArray(number);

// array inside object
const users = [
   {name : "Yuvraj", city: "Pune"},
   {name : "omkar", city : "pune"},
   {name : "Amit", city : "pune"}
];
function printUsers(users){
   for(let i = 0; i < users.length; i++){
      const {name, city} = users[i];
      console.log(name, city);
   }
}