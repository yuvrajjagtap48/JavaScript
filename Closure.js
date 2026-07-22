function outer() {
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

const counter = outer();

counter(); 
counter(); 
counter(); 

// “Closure is a JavaScript feature where an inner function remembers variables from 
// its lexical scope even after the outer function has finished execution. 
// Closures are widely used for data hiding, callbacks, currying, and maintaining state.”


// It only works with let and const, not var. Because var is function scoped, 
// it does not create a new scope for each iteration of a loop, which can lead to unexpected behavior when used in closures.

// parent scope have access to child scope but child scope does not have access to parent scope.


