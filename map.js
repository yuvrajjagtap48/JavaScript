// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// const nums = [1, 2, 3, 4, 5];
// const result = nums.map(x => x * 2);
// console.log(result);



// find list with full name
const users = [
    {firstName: 'John', lastName: 'Doe', age: 30},
    {firstName: 'Jane', lastName: 'Smith', age: 25},
    {firstName: 'Emily', lastName: 'Johnson', age: 35}
];

const fullNames = users.map(x => x.firstName + " " + x.lastName);
console.log(fullNames);


// using normal function
const fullNames2 = users.map(function(x) {
    return x.firstName + " " + x.lastName;
});
console.log(fullNames2);