var x = 100;
{
    var x = 500;
}
let a = x;
{
    let x = 1000;
}
console.log(a); // output: 500 because var is function scoped and it is hoisted to the top of the function scope, so it will overwrite the previous value of x.


let arr = [1,2,3,4,5,6];
// arr = [];
// arr.length = 0;
arr.splice(0, arr.length);

console.log(arr);