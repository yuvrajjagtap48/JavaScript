// normal function
function greet() {
  console.log("Hello");
}

// arrow function
const greet = () => {
  console.log("Hello");
};


// Differences between normal functions and arrow functions in JavaScript:
// | Feature               | Normal Function                           | Arrow Function                                          |
// | this behavior         | has its own this                          | does NOT have its own this takes this from parent scope |
// | arguments object      | has its own arguments object              | Arrow function does NOT have its own arguments object   |
// |  Constructor function | used as a constructor with the new keyword| Arrow function cannot be used as a constructor and will throw an error if used with new keyword |
// | Methods               | can be used as a method in an object      | Arrow function cannot be used as a method in an object because it does not have its own this    |



// | Feature                 | Normal Function  | Arrow Function   |
// | Has own `this`?         | ✅ Yes           | ❌ No           |
// | Can use `new` keyword?  | ✅ Yes           | ❌ No           |
// | Has `arguments` object? | ✅ Yes           | ❌ No           |
// | Best for methods?       | ✅ Yes           | ❌ Usually No   |
// | Short syntax?           | ❌ Bigger        | ✅ Smaller      |
// | Hoisting                | ✅ Yes           | ❌ Depends      |


// When to Use Arrow Function ✅
// Callbacks
// Short functions
// Array methods
// React components/hooks
// setTimeout

// When NOT to Use Arrow Function ❌
// Object methods
// Constructors
// Event handlers needing this
