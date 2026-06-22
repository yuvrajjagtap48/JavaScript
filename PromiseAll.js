// Promise.all it take array of promises



const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 3000);
});

Promise.all([p1, p2])
    .then(results => {
        console.log(results); // ["Promise 1 resolved", "Promise 2 resolved"]
    })
    .catch(error => {
        console.log(error);
    });
