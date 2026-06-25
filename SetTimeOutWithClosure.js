for(var i = 1; i <= 3; i++) {

  function close(x) {
    setTimeout(() => {
      console.log(x);
    }, 1000);
  }

  close(i);
}


// x stores seperately for each iteration of the loop, so it will print 1, 2, and 3 after 1 second. 

// Auto Counter with closure and setInterval
// function outer() {
//     let count = 0;
//     function inner() {
//         return setInterval(() => {
//             count++;
//             console.log(count);
//         }, 1000);
//     }
//     return inner;
// }

// const counter = outer();       // gets inner function
// const intervalId = counter();  // starts interval

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Counter stopped");
// }, 5000);