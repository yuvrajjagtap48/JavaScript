// Higher-Order Functions => A function that takes another function as an argument or returns a function as a result.
// it take multiple functions as an argument and return a single function as a result. It is used to create a new function by combining multiple functions together.
function greet() {
   console.log("Hello");
}

function execute(fn) {
   fn();
}

execute(greet);



// | Method       | Purpose            |
// | ------------ | ------------------ |
// | map()        | transform          |
// | filter()     | filter data        |
// | reduce()     | accumulate         |
// | setTimeout() | callback execution |


