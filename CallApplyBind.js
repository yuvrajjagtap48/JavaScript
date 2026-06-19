const person1 = {
    name: "Yuvraj"
};

const person2 = {
    name: "Omkar"
};

function greet(city) {
    console.log(this.name + " from " + city);
}

// Call => It calls the function immediately with the given this value and arguments provided individually.
greet.call(person1, "Mumbai");

// Apply => It calls the function immediately with the given this value and arguments provided as an array (or an array-like object).
greet.apply(person2, ["Pune"]);


// Bind => It returns a new function, that when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
const newFunc = greet.bind(person1, "Delhi");
newFunc();



// every() => Checks if all elements satisfy condition.
const marks = [80, 90, 70, 40];
const result = marks.every(mark => mark > 50);
console.log(result);

// some() => Checks if at least one element satisfies condition.
const someResult = marks.some(mark => mark > 50);
console.log(someResult);