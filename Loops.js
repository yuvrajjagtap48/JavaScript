// for...of => iterates over values of iterable objects, it is used to iterate over values of iterable objects like arrays and strings
const fruits = ["Apple", "Mango", "Banana"];

for(let fruit of fruits) {
    console.log(fruit);
}


// for...in => iterates over property names or indexes. it is used to iterate over keys or property names, mainly in objects.
const user = {
    name: "Yuvraj",
    city: "Pune"
};

for(let key in user) {
    console.log(key);
}