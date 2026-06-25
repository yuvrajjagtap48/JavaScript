var x = 100;
{
    var x = 500;
}
let a = x;
{
    let x = 1000;
}
console.log(a); // output: 500 because var is function scoped and it is hoisted to the top of the function scope, so it will overwrite the previous value of x.


let arr = [1,2,3,4,5,6];
// arr = [];
// arr.length = 0;
arr.splice(0, arr.length);

console.log(arr);



// Scope Chaining =>  When JS cannot find a variable, it searches layer by layer upward.
// When a variable is not found in the current scope, JavaScript looks for it in the outer scope, 
// and so on, until it reaches the global scope. If the variable is not found in any scope, a ReferenceError is thrown.


// optional chaining =>  Optional chaining (?.) is used to safely access nested object properties, array elements, or methods. 
// If any part of the chain is null or undefined, JavaScript returns undefined instead of throwing an error.
// It uses the ?. operator.
const user = {
  name: "Yuvraj"
};
console.log(user.address.city); // This will throw an error because user.address is undefined.
console.log(user.address?.city); // This will return undefined instead of throwing an error, because of optional chaining.



// Scope defines the accessibility of variables in different parts of code.
// Lexical environment is the internal JavaScript engine structure that stores variables and references to outer environments for scope resolution.


// Block Scope =>  {   } => inside this block  => let and const are block scoped, var is not block scoped, it is function scoped.


// Shadowing =>  “Inner variable hides outer variable
var a = 10;
{
  let a = 20;
} 
console.log(a); // output : 10 because the inner variable a is block scoped and it is not accessible outside the block, so the outer variable a is used.  
