// var a = {
//     id : 1,
//     title : "meet"
// }

// var v = a;
// v.id = 100;
// console.log(v);  // {id : 100, title: 'meet'} because v is a reference to the same object as a, so when we change the id property of v, it also changes the id property of a.


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
//it will print { id: 2, title: 'greet', abc: 'a' } because the properties of object b will overwrite the properties of object a when we use the spread operator.


// function abc(){
//     return{
//         a : 1
//     }
// }
// console.log(abc());  // { a: 1 } because the function abc returns an object with a property a that has a value of 1.



// let arr = [1, 2, 3];
// arr[5] = 100;
// console.log(arr);
// console.log(arr.length); // it will print [ 1, 2, 3, <2 empty items>, 100 ] and 6 because when we assign a value to an index that is greater than the current length of the array, JavaScript creates empty slots for the indices in between. The length of the array is updated to reflect the highest index plus one, which is why it prints 6.


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
// print(10, 20, 30, 40); //it will print [ 20, 30, 40 ] because the rest parameter ...a collects all the remaining arguments passed to the function after the first argument b. In this case, b is assigned the value 10, and the rest of the arguments (20, 30, and 40) are collected into an array and assigned to a. 


// const obj1 = {};
// const obj2 = { name: "yuvraj" };
// const obj3 = { name: "shruti" };
// obj1[obj2] = {
//     name : "hello"
// };
// obj1[obj3] = {
//     name : "hii"
// };
// console.log(obj1[obj2]); // it will print { name: 'hii' } because when we use an object as a key in another object, JavaScript converts the key to a string. In this case, both obj2 and obj3 are converted to the same string "[object Object]", which means that they refer to the same key in obj1. Therefore, when we assign a value to obj1[obj2], it overwrites the previous value assigned to that key, resulting in { name: 'hii' } being printed when we access obj1[obj2].



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

// let x = 10;
// if(function f(){}){
//     x = x + typeof(f);
// }
// console.log(x); // 10function

// console.log(typeof abcd);
// console.log(abc); // it give error because abcd is not defined, and abc is also not defined. When we try to access a variable that has not been declared or assigned a value, it results in a ReferenceError. Therefore, the first console.log will print "undefined" because typeof returns "undefined" for undeclared variables, but the second console.log will throw a ReferenceError because abc is not defined.

// console.log(typeof abcd);
// let abcd;  // it give reference error because when we try to access a variable that has not been declared or assigned a value, it results in a ReferenceError. In this case, we are trying to access the variable abcd before it has been declared, which is why it throws a ReferenceError. Therefore, the console.log(typeof abcd) will not be executed, and the error will occur before it can print anything.


// const arr = [1, 2, 3];
// const list = arr.map((x,i) => <p key={1}>{x}</p> );
// console.log(list.length); // it will print 3 because the map() method creates a new array by applying the provided function to each element of the original array. In this case, the function takes two arguments: x (the current element) and i (the index of the current element). The function returns a JSX element <p key={1}>{x}</p> for each element in the array. Since there are three elements in the original array, the resulting list will have a length of 3.



// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;
// console.log(x == y); // false => false because when we compare two arrays using the equality operator (==), it checks for reference equality rather than value equality. Since x and y are different objects in memory, they are not considered equal, even though they contain the same elements. Therefore, the expression x == y evaluates to false.
// console.log(z == y); // true => true because z and y refer to the same array in memory. When we assign z = y, we are not creating a new array, but rather making z point to the same array that y points to. Therefore, when we compare z and y using the equality operator (==), it checks for reference equality and finds that they refer to the same object in memory, resulting in true being printed.
// console.log(z == x); // false => false because z and x refer to different arrays in memory. Even though they contain the same elements, they are different objects in memory. Therefore, when we compare z and x using the equality operator (==), it checks for reference equality and finds that they refer to different objects in memory, resulting in false being printed.
// console.log(x === y); // false
// console.log(z === y); // true


// const obj = {
//     pqr : 1,
//     abc : 2,
//     xyz : {
//         pqr : 3,
//         abc : 4
//     }
// }
// const {pqr, abc, xyz:{pqr:p}} = obj;
// console.log(pqr, abc,p);  // it will print 1 2 3 because we are using object destructuring to extract the values of pqr, abc, and p from the obj object. The variable pqr is assigned the value of obj.pqr, which is 1. The variable abc is assigned the value of obj.abc, which is 2. The variable p is assigned the value of obj.xyz.pqr, which is 3. Therefore, when we log pqr, abc, and p, it prints 1 2 3.


// let arr = [1, 2, 3, 4];
// const filterArr = arr.map((e) => e > 3);
// console.log(filterArr); // it will print [ false, false, false, true ] because the map() method creates a new array by applying the provided function to each element of the original array. In this case, the function checks if each element e is greater than 3. For the elements 1, 2, and 3, the condition is false, so they are mapped to false. For the element 4, the condition is true, so it is mapped to true. Therefore, the resulting array is [ false, false, false, true ].


// const [a,  , b] = [1, 2, 3];
// console.log(a, b); // it will print 1 3 because we are using array destructuring to extract the values of a and b from the array [1, 2, 3]. The variable a is assigned the value of the first element of the array, which is 1. The second element (2) is skipped by using an empty slot in the destructuring pattern. The variable b is assigned the value of the third element of the array, which is 3. Therefore, when we log a and b, it prints 1 3.

// const [a,  , b] = [1, 2, 3, 4, 5 , 6];
// console.log(a, b); // it will print 1 3 because we are using array destructuring to extract the values of a and b from the array [1, 2, 3, 4, 5, 6]. The variable a is assigned the value of the first element of the array, which is 1. The second element (2) is skipped by using an empty slot in the destructuring pattern. The variable b is assigned the value of the third element of the array, which is 3. The remaining elements (4, 5, and 6) are not assigned to any variables and are ignored. Therefore, when we log a and b, it prints 1 3.
// const {0: c, 2: d} = [1, 2, 3]; // array is objevt thats why we can use object destructuring to extract values from an array. In this case, we are using object destructuring to extract the values at index 0 and index 2 from the array [1, 2, 3]. The variable c is assigned the value of the first element of the array (index 0), which is 1. The variable d is assigned the value of the third element of the array (index 2), which is 3. Therefore, when we log c and d, it prints 1 3.
// console.log(c, d); // it will print 1 3 because we are using object destructuring to extract the values of c and d from the array [1, 2, 3]. The variable c is assigned the value of the first element of the array (index 0), which is 1. The variable d is assigned the value of the third element of the array (index 2), which is 3. Therefore, when we log c and d, it prints 1 3.

// function abc(){
//     console.log("hello");
// }
// const value = new abc();
// console.log(value); // it will print "hello" and then the instance of the abc function. When we use the new keyword to create an instance of a function, it executes the function and returns an object. In this case, the abc function logs "hello" to the console, and then the value variable holds the instance of the abc function, which is an object. Therefore, when we log value, it will show the instance of the abc function in the console.

// function abc(name){
//     this.name = name;
// }
// const value = new abc("yuvraj");
// console.log(value); // it will print abc { name: 'yuvraj' } because when we use the new keyword to create an instance of a function, it creates a new object and sets the this context to that object. In this case, the abc function assigns the name property of the new object to the value of the name parameter passed to the function. Therefore, when we log value, it shows the instance of the abc function with the name property set to "yuvraj".

// function abc(name){
//     const obj = { name };
//     return obj;
// }
// const value = abc("yuvraj");
// console.log(value); // it will print { name: 'yuvraj' } because the abc function creates an object with a property name that is assigned the value of the name parameter passed to the function. When we call abc("yuvraj"), it creates an object { name: "yuvraj" } and returns it. Therefore, when we log value, it prints { name: 'yuvraj' }.

// let a = 10;
// function abc(){
//     console.log(a);
//     let a = 20;
// }
// abc(); // it will give reference error because of the temporal dead zone (TDZ) in JavaScript. The variable a is declared using let inside the function abc, which means it is block-scoped and not hoisted to the top of the function. When we try to access a before its declaration, it results in a ReferenceError. Therefore, when we call abc(), it throws a ReferenceError because we are trying to access a before it has been initialized.


console.log(a);
console.log(b);
var a=b=200;  