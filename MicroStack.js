// MicroStack => A simplified model of JavaScript's execution context, including the call stack, event loop, and microtask queue.
// it has higest priority than the call stack 

console.log("Start");

setTimeout(() => {
   console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
   console.log("Promise");
});

console.log("End");


//output:
// Start
// End
// Promise
// Timeout