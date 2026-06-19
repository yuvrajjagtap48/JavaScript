// Rest Parameter : Rest parameters use the ... syntax to collect multiple function arguments into a single array.
function demo(...nums) {
  console.log(nums);
}

demo(1, 2, 3);




// Spread Operator =>  Expand values.
const nums = [1,2,3];
console.log(...nums);

// | Feature   | Spread Operator                 | Rest Parameters     |
// | Purpose   | Expand values                   | Collect values      |
// | Used in   | Arrays, objects, function calls | Function parameters |
// | Result    | Individual values               | Array               |
// | Direction | One → Many                      | Many → One          |

// “Spread operator expands iterable values into individual elements, while rest parameters collect multiple arguments into a single array.”