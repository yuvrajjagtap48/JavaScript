// const nums = [1,2,3,4];
// const even = nums.filter(n => n%2===0);
// output: [2,4]

// const nums = [2,4,6];
// nums.find(n => n>3);
// output: 4

// const nums = [1,2,3];
// const data = nums.reduce((a,b)=>a+b,0);
// output: 6


// const arr = [1,2,3,4,5];
// arr.map((data) => {
//     return data > 2; 
// });
// output: [false, false, true, true, true]  => Because inside map() we are returning a boolean value, so the output is an array of boolean values.
// const arr = [1,2,3,4,5];
// arr.filter((data) => {
//     return data > 2;
// });
// output: [3,4,5]  => Because inside filter() we are returning a boolean value, so the output is an array of elements that satisfy the condition.



// let users = {
//     name : "John",
//     age : 30,
//     city : "New York"
// }
// option chaining
// console.log(users?.name?.age); // output: undefined => Because the property "age" does not exist on the object "users", so the optional chaining operator returns undefined instead of throwing an error.
// console.log(users?.name); // output: "John" => Because the property "name" exists on the object "users", so the optional chaining operator returns the value of the property "name".
// console.log(users?.age?.city); // output: undefined => Because the property "city" does not exist on the object "users", so the optional chaining operator returns undefined instead of throwing an error



// it not accessable because it is in the local scope of function y() and not accessible outside of it. 
// function x(){
//     function y(){
//         let z = 10;
//         console.log("Hello");
//     }
//     console.log(y());
// }
// x();

