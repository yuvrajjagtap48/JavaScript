const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});

// await can only be used inside an async function
async function handlePromise() {
    console.log("Before promise");
    // Js Engine was waiting for promise to resolved
    const val = await p;
    console.log("After promise");
    console.log(val);
}
handlePromise();

// program will wait for promise to resolved and then it will execute the next line of code
// while waiting function will not allocated memory no one go to call stack

// when program start function come to callstack when it see await it will suspend(it not block function) the function and 
// free up memory and then it will execute other code if there is any and when promise get resolved
// then it will come back to call stack and execute the remaining code of function. it start from where it left  

// const API_URL = "https://jsonplaceholder.typicode.com/posts/1";
// async function handlePromise() {
//     const data = await fetch(API_URL);
//     const response = await data.json();
//     console.log(response);
// }
// handlePromise();

//fetch() => it give you Response object and has body which is readble stream and to read that stream we use json() and this json() also a promise



// Error handling with async/await
const API_URL = "https://jsonplaceholder.typicode.com/posts/1";
async function handlePromise() {
    try {
        const data = await fetch(API_URL);
        const response = await data.json();
        console.log(response);
    } 
    catch (err) {
        console.error("Error fetching data:", err);
    }
}
handlePromise();