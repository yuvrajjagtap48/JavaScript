
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// const nums  = [1, 2, 3, 4, 5];
// const result = nums.filter((num) => num > 3);
// console.log(result);


// function isOdd(num){
//     return num % 2 ;
// }
// const output = nums.filter(isOdd);

// const output = nums.filter((x) => {
//     return x % 2 ;
// });
// console.log(output);


// find first name the people with age less than 30
const users = [
    {firstName: 'John', lastName: 'Doe', age: 30},
    {firstName: 'Jane', lastName: 'Smith', age: 25},
    {firstName: 'Emily', lastName: 'Johnson', age: 35},
    {firstName: 'Michael', lastName: 'Brown', age: 30},
    {firstName: 'Sarah', lastName: 'Davis', age: 25}
];

const output = users.filter((x) => x.age <= 30).map((x) => x.firstName);
console.log(output);