// access let
// let a = 10;
// function x(){
//     let a = 20;
// }
// console.log(a); // 10 because the variable a is declared in the global scope and is not affected by the function x. it overlaps the variable a declared in the function x. it not give any error because the variable a is declared in the function x and is not accessible outside of it.

// let a = 10;
// let a = 20;
// console.log(a); // error because the variable a is declared twice in the same scope. it is not allowed to declare a variable with the same name in the same scope. it will give an error because the variable a is declared twice in the same scope.

// let a = 10;
// function x(){
//     let a = 20;
//     console.log(a); // 20 because the variable a is declared in the function x and is accessible only within the function x. it overlaps the variable a declared in the global scope.
// }

var a = 10;
function x(){
    var a = 20;
}
console.log(a); // 10 because the variable a is declared in the global scope and is not affected by the function x. it overlaps the variable a declared in the function x. it not give any error because the variable a is declared in the function x and is not accessible outside of it.

// difference between let and const
// let a = 10;
// a = 20; // allowed because the variable a is declared with let and can be reassigned.
// console.log(a); // 20

// const a = 10;
// a = 20; // error because the variable a is declared with const and cannot be reassigned.
// console.log(a); // 10

