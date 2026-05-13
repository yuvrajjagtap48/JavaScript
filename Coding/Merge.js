// merge two arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [...arr1, ...arr2];

console.log(result);


// merge two functions
function hello() {
    console.log("Hello");
}
function world() {
    console.log("World");
}
function mergeFunctions() {
    hello();
    world();
}
mergeFunctions();


// merge two objects
let obj1 = { name: "Aman" };
let obj2 = { age: 22 };
let result1 = { ...obj1, ...obj2 };

console.log(result1);