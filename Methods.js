// Sclice splice and split diffrence

// slice() → Copy 
// splice() → Change 
// split() → Divide 

// | Feature            | `slice()`             | `splice()`                    | `split()`                 |
// | ------------------ | --------------------- | ----------------------------- | ------------------------- |
// | Used On            | Array, String         | Array                         | String                    |
// | Purpose            | Copy/extract elements | Add, remove, replace elements | Convert string into array |
// | Modifies Original? | No                    | Yes                           | No                        |
// | Returns            | New array/string      | Removed elements              | New array                 |

// Slice()
const arr = [10, 20, 30, 40];
console.log(arr.slice(1, 3));
// output: [20, 30] => Because slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). In this case, we are slicing the array from index 1 to index 3 (not included), so the output is [20, 30].

// Splice()
const arr2 = [10, 20, 30, 40];
arr2.splice(1, 2);
console.log(arr2);
// output: [10, 40] => Because splice() method changes the original array by removing elements from it. In this case, we are removing 2 elements starting from index 1 (20 and 30), so the original array becomes [10, 40].

// Split()
const str = "JavaScript React Node";
console.log(str.split(" "));
// output: ["JavaScript", "React", "Node"]