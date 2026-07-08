// Lexical scope  =>  Where code is physically written

console.log(x);
var x = 10;

// output: undefined
// it only work with var for let and const will throw a ReferenceError
// “Hoisting is JavaScript’s default behavior of moving declarations to the top during memory creation phase.”

// by defalut variable and hoisted 

// Temporally Dead Zone (TDZ)
// TDZ is the time between variable hoisting and initialization.
// During this time, the variable is in a "dead zone" and cannot be accessed. If you try to access it, you will get a ReferenceError.
// TDZ only applies to let and const, not var.

// Why JS created TDZ?   =>   To avoid accidental bugs.


// Function hoisting
hello();
function hello() {
   console.log("Hi");
}
// Works perfectly. Because full function is hoisted.


// Arrow Function/Function Expression
hello();

let hello = function() {
   console.log("Hi");
}
// Arrow Function not work properly with hoisting
// Give ReferenceError: Cannot access 'hello' before initialization Because only variable declaration is hoisted, not function assignment.



