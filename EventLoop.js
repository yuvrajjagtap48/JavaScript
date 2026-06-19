// Stack Algoruithm => LIFO (Last In First Out)

// Callback Stack => FIFO (First In First Out)

// Microtask Queue =>  Excute higher priority tasks => Promises, MutationObserver, queueMicrotask, async/await
// Callback Queue  =>  Excute lower priority tasks => setTimeout, setInterval, setImmediate, I/O, UI rendering


//          Call Stack
//              ↑
//          Event Loop
//         ↙         ↘
//Microtask Queue    Callback Queue



// “JavaScript executes code using an execution context and call stack. The call stack follows the LIFO algorithm.
// Asynchronous callbacks are stored in the callback queue, which follows the FIFO algorithm. 
// The event loop continuously checks the stack and moves queued callbacks into execution when the stack becomes empty.”



// Execution Context 👉 “Environment where JavaScript code runs.”
// type => 
// 1. Global Execution Context
// 2. Function Execution Context

// 2 phases of Execution Context
// 1. Memory Creation Phase => 	Memory allocated
// 2. Execution Phase =>	Code executes line by line


// urgent tasks 🚨 → Microtasks
// normal tasks 📋 → Macrotasks 
// Macrotask  => Normal-priority async tasks.What is a Microtask?
// Microtasks  => High-priority async tasks.