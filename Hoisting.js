console.log(x);
var x = 10;

// output: undefined




console.log([] == ![]); // [] => true : it is truthy value 
console.log([] == []); // [] => false :  it is truthy value but both are different objects in memory

console.log({} == {}) // output: false because both are different objects in memory
console.log({} === {}) // output: false because both are different objects in memory


console.log("yuvraj" - 100); // output: NaN because we cannot perform subtraction operation on string and number
console.log("yuvraj" + 100); // output: "yuvraj100"


