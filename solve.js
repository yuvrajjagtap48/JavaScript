// // var a = {
// //     id : 1,
// //     title : "meet"
// // }

// // var v = a;
// // v.id = 100;
// // console.log(v);


// var a = {
//     id : 1,
//     title : "meet",
//     abc : "a"
// }
// var b = {
//     id : 2,
//     title : "greet"
// }
// var c = {
//     ...a,
//     ...b
// }
// console.log(c);
// //it will print { id: 2, title: 'greet', abc: 'a' } because the properties of object b will overwrite the properties of object a when we use the spread operator.
// console.log({} + []);


// function abc(){
//     return{
//         a : 1
//     }
// }
// console.log(abc());



// let arr = [1, 2, 3];
// arr[5] = 100;
// console.log(arr);
// console.log(arr.length);
// // it will print [ 1, 2, 3, <2 empty items>, 100 ] and 6 because when we assign a value to an index that is greater than the current length of the array, JavaScript creates empty slots for the indices in between. The length of the array is updated to reflect the highest index plus one, which is why it prints 6.


//console.log(0.1 + 0.2 === 0.3); // it will print false because of the way floating-point numbers are represented in JavaScript. The result of 0.1 + 0.2 is not exactly 0.3 due to precision issues, and therefore the comparison returns false.


// const obj = {
//     a : 1,
//     b : 2,
// }
// // convert object to string
// const str = JSON.stringify(obj);
// console.log(str); 
// //conver object to array
// const arr = Object.entries(obj);
// console.log(arr); 
// // convert array to object
// const newObj = Object.fromEntries(arr);
// console.log(newObj); 
// // convert string to object
// const parsedObj = JSON.parse(str);
// console.log(parsedObj); 
// // toString method
// console.log(obj.toString());


// var a = [1, 2, 3];
// function print(b , ...a){
//     console.log(a);
// }
// print(10, 20, 30, 40);
// it will print [ 20, 30, 40 ] because the rest parameter ...a collects all the remaining arguments passed to the function after the first argument b. In this case, b is assigned the value 10, and the rest of the arguments (20, 30, and 40) are collected into an array and assigned to a. Therefore, when we log a, it prints [ 20, 30, 40 ].


// const obj1 = {};
// const obj2 = { name: "yuvraj" };
// const obj3 = { name: "shruti" };
// obj1[obj2] = {
//     name : "hello"
// };
// obj1[obj3] = {
//     name : "hii"
// };
// console.log(obj1[obj2]);
// it will print { name: 'hii' } because when we use an object as a key in another object, JavaScript converts the key to a string. In this case, both obj2 and obj3 are converted to the same string "[object Object]", which means that they refer to the same key in obj1. Therefore, when we assign a value to obj1[obj2], it overwrites the previous value assigned to that key, resulting in { name: 'hii' } being printed when we access obj1[obj2].


// console.log([]==[]);  //it will memory address of both arrays is different, so it will print false because in JavaScript, when we compare two arrays using the equality operator (==), it checks for reference equality rather than value equality. Since both arrays are different objects in memory, they are not considered equal, even if they contain the same elements. Therefore, the expression [] == [] evaluates to false.
// console.log([]===[]); // it will also print false for the same reason as above. The strict equality operator (===) also checks for reference equality when comparing objects, including arrays. Since both arrays are different objects in memory, they are not considered equal, and the expression [] === [] evaluates to false.


// if([] == true){
//     console.log("hello");
// }
// else{
//     console.log("hii");
// }
//[] is a truthy value in JavaScript, which means that it will evaluate to true in a boolean context. Therefore, the code will print "hello" because the condition in the if statement is true.
//[] == true will evaluate to true because when we compare an array (which is an object) to a boolean value, JavaScript will attempt to convert the array to a primitive value. In this case, the array [] is converted to an empty string "" when compared to true. Since an empty string is falsy, the comparison [] == true evaluates to false, and the else block will be executed, printing "hii".


// let obj = {
//     a : {
//         b : undefined
//     }
// }
// console.log(obj.a?.b?.c?.d??"hello");
// it will print "hello" because the optional chaining operator (?.) allows us to safely access nested properties of an object without causing an error if any of the properties in the chain are undefined or null. In this case, obj.a is defined, but obj.a.b is undefined. When we try to access obj.a.b.c, it will return undefined instead of throwing an error. The nullish coalescing operator (??) then checks if the result of the optional chaining is null or undefined, and since it is undefined, it returns "hello" as the default value.


// var abc = 125;
// if(function f(){}){
//     abc = abc + typeof f;
// }
// console.log(abc);
// it will print 125function because the function declaration inside the if statement is hoisted to the top of the block scope. However, since the function is not assigned to a variable, it does not create a new variable in the scope. Therefore, when we check the type of f using typeof, it returns "function". The expression abc + typeof f concatenates the value of abc (which is 125) with the string "function", resulting in "125function" being printed.
// 125undefined because the function declaration inside the if statement is hoisted to the top of the block scope, but it does not create a new variable in the scope. Therefore, when we check the type of f using typeof, it returns "undefined". The expression abc + typeof f concatenates the value of abc (which is 125) with the string "undefined", resulting in "125undefined" being printed.


//console.log(1 + "2" + 3); // it will print "123" because when we use the + operator with a string and a number, JavaScript converts the number to a string and concatenates them. In this case, 1 is converted to "1", and then "1" is concatenated with "2" to form "12". Finally, "12" is concatenated with 3 (which is converted to "3") to form "123".

//console.log(a == undefined); // it will print true because when we compare a variable that has not been declared or assigned a value to undefined using the equality operator (==), JavaScript treats it as if it were undefined. Since a has not been declared or assigned a value, it is considered undefined, and therefore the expression a == undefined evaluates to true.
//console.log(a === undefined);// it will print false because the strict equality operator (===) checks for both value and type equality. Since a has not been declared or assigned a value, it is considered undefined, but it is not the same as the primitive value undefined. Therefore, the expression a === undefined evaluates to false.

//console.log([1,2] == [1,2])// it will print false because when we compare two arrays using the equality operator (==), it checks for reference equality rather than value equality. Since both arrays are different objects in memory, they are not considered equal, even if they contain the same elements. Therefore, the expression [1,2] == [1,2] evaluates to false.


// const arr = [1, 2, 3];
// const list = arr.map((x,i) => <p key={1}>{x}</p> );
// console.log(list.length);


console.log(Math.max()); // -Infinity
console.log(!!undefined); // false
console.log(!!!undefined); // true
console.log(!!null); // false
console.log(!!!null); // true
