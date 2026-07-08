// Redeclaration : Creating same variable again.
// Redeclaration is not allowed with let and const, but it is allowed with var. 

var a = 10;
var a = 20;
console.log(a);


// Reassignment : Assigning new value to the same variable.
// Reassignment is allowed with let and var, but not with const.

let name = "Yuvraj";
name = "Raj";
console.log(name);


// undefined : A variable that has been declared but has not been assigned a value.

// undeclared  : A variable that has not been declared using var, let, or const.