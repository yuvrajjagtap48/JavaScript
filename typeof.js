console.log(typeof(NaN)); // "number"
console.log(typeof(null)); // "object"
console.log(typeof(undefined)); // "undefined"
console.log(typeof([])); // "object"
console.log(typeof({})); // "object"
console.log(typeof(function(){})); // "function"
console.log(typeof(true)); // "boolean"
console.log(typeof(false)); // "boolean"
console.log(typeof(Symbol("sym"))); // "symbol"


// console.log(NaN === NaN); // it will print false because NaN (Not-a-Number) is a special value in JavaScript that represents an undefined or unrepresentable value, such as the result of dividing zero by zero. According to the IEEE 754 standard, which JavaScript follows, NaN is not equal to any value, including itself. Therefore, the expression NaN === NaN evaluates to false.

// console.log([]==[]);  //it will memory address of both arrays is different, so it will print false because in JavaScript, when we compare two arrays using the equality operator (==), it checks for reference equality rather than value equality. Since both arrays are different objects in memory, they are not considered equal, even if they contain the same elements. Therefore, the expression [] == [] evaluates to false.
// console.log([]===[]); // it will also print false for the same reason as above. The strict equality operator (===) also checks for reference equality when comparing objects, including arrays. Since both arrays are different objects in memory, they are not considered equal, and the expression [] === [] evaluates to false.
// console.log([] == ![]); // [] => true : it is truthy value 
// console.log({} == {}) // output: false because both are different objects in memory
// console.log({} === {}) // output: false because both are different objects in memory

// console.log({} + []); // 
// console.log(false == []); // => false == "" => 0 == 0
// console.log(false == ![]); // => false == false => 0 == 0
// console.log(NaN == NaN);  // NaN => NaN => false 

// console.log("yuvraj" - 100); // output: NaN because we cannot perform subtraction operation on string and number
// console.log("yuvraj" + 100); // output: "yuvraj100"
// console.log("2" > "10") // output: true because when we compare two strings using the greater than operator (>), JavaScript compares them lexicographically (based on their Unicode values). In this case, the first character of "2" has a higher Unicode value than the first character of "1" in "10", so "2" is considered greater than "10", resulting in true being printed.

//console.log(1 + "2" + 3); // it will print "123" because when we use the + operator with a string and a number, JavaScript converts the number to a string and concatenates them. In this case, 1 is converted to "1", and then "1" is concatenated with "2" to form "12". Finally, "12" is concatenated with 3 (which is converted to "3") to form "123".

//console.log(a == undefined); // it will print true because when we compare a variable that has not been declared or assigned a value to undefined using the equality operator (==), JavaScript treats it as if it were undefined. Since a has not been declared or assigned a value, it is considered undefined, and therefore the expression a == undefined evaluates to true.
//console.log(a === undefined);// it will print false because the strict equality operator (===) checks for both value and type equality. Since a has not been declared or assigned a value, it is considered undefined, but it is not the same as the primitive value undefined. Therefore, the expression a === undefined evaluates to false.

//console.log([1,2] == [1,2])// it will print false because when we compare two arrays using the equality operator (==), it checks for reference equality rather than value equality. Since both arrays are different objects in memory, they are not considered equal, even if they contain the same elements. Therefore, the expression [1,2] == [1,2] evaluates to false.

// console.log(Math.max()); // -Infinity
// console.log(Math.min()); // Infinity
// console.log(!undefined); // true
// console.log(!!undefined); // false
// console.log(!!!undefined); // true
// console.log(!null); // true
// console.log(!!null); // false
// console.log(!!!null); // true
