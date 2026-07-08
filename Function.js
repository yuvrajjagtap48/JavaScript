// Function declaration =>  A function defined using the function keyword.
function greet() {
   return "Hello!";
}

// Anonymous function =>  A function without a name, often used as an argument to other functions or assigned to a variable.
const greet = function() {
   return "Hello!";
};

// Named function =>  A function with a name, which can be used for recursion or debugging.
function greet() {
   return "Hello!";
}

// Function expression =>  A function defined as part of an expression, often assigned to a variable.
const greet = function() {
   return "Hello!";
};

// Arrow function =>  A concise syntax for writing functions using the => syntax.
const greet = () => "Hello!";
// Lambda function => means it is a arrow function


// Factory function =>  A factory function is a regular function that creates and returns new objects, helping reduce code duplication and improve reusability
function createCar(brand) {
   return {
      brand
   };
}
const car = createCar("BMW");   // we can create multiple car objects with different brands
const car2 = createCar("Audi");
const car3 = createCar("Mercedes");
console.log(car.brand);
// without factory function
const car1 = {
   brand: "BMW"
};
const car2 = {
   brand: "Audi"
};
const car3 = {
   brand: "Mercedes"
};



// Currying =>  Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking one argument.
function add(a) {
   return function(b) {
      return function(c) {
         return a + b + c;
      };
   };
}

console.log(add(1)(2)(3));



// function composition =>  Combining multiple functions into one.

function double(x) {
   return x * 2;
}

function square(x) {
   return x * x;
}

const result = square(double(2));
console.log(result);


// pure functions=>  Functions that always produce the same output for the same input and have no side effects.

function pureAdd(a, b) {
   return a + b;
}
// Impure function example
let total = 0;
function add(num) {
   total += num;
   return total;
}



