// Higher-Order Functions => A function that takes another function as an argument or returns a function as a result.
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
