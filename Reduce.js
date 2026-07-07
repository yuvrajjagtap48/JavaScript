// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// const nums = [1, 2, 3, 4];
// const result = nums.reduce((total, num) => {
//   return total + num;
// }, 0);
// console.log(result);

// const arr = [5, 10, 15];

// function findSum(arr) {
//   let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));


// const output = arr.reduce(function(accumulator, currentValue) {
//   accumulator =  accumulator + currentValue;
//   return accumulator;
// }, 0);

// console.log(output);



// const output2 = arr.reduce(function(acc, curr){
//     if(curr > arr){
//         acc = curr;
//     }
//     return acc;
// }, 0);

// console.log(output2);


//find how many peopele have same age
const users = [
    {firstName: 'John', lastName: 'Doe', age: 30},
    {firstName: 'Jane', lastName: 'Smith', age: 25},
    {firstName: 'Emily', lastName: 'Johnson', age: 35},
    {firstName: 'Michael', lastName: 'Brown', age: 30},
    {firstName: 'Sarah', lastName: 'Davis', age: 25}
];

// const output = users.reduce(function(acc, curr){
//     if(acc[curr.age]){
//         acc[curr.age] = acc[curr.age] + 1;
//     } 
//     else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});

// console.log(output);


//find people firstname with age less than 30
const output2 = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(output2);