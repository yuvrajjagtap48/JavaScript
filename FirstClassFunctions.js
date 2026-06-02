//JavaScript functions are called first-class functions because they can be assigned to variables, passed as arguments, and returned from other functions.

//store function in a variable
const greet = function() {
   console.log("Hello");
};
greet();


//pass as argument
function sayHi() {
   console.log("Hi");
}
function execute(fn) {
   fn();
}
execute(sayHi);


//return function
function outer() {
   return function() {
      console.log("Inside");
   };
}
const result = outer();
result();