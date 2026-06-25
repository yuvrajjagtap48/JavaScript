// Currying =>  Converting a function with multiple arguments into nested single-argument functions.

function add(a) {
   return function(b) {
      return function(c) {
         return a + b + c;
      };
   };
}

console.log(add(1)(2)(3));

// Infinely curried function => A function that can be called with any number of arguments, and it will keep returning a new function until all arguments are provided.

function sum(a) {
   return function(b) {
      if (b !== undefined) {
         return sum(a + b);
      }
      return a;
   }
}
console.log(sum(1)(2)(3)());

// function composition =>  Combining multiple functions into one.

function double(x) {
   return x * 2;
}

function square(x) {
   return x * x;
}

const result = square(double(2));
console.log(result);
