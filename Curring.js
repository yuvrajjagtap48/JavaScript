// Currying =>  Converting a function with multiple arguments into nested single-argument functions.

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
