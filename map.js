// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const nums = [1, 2, 3, 4, 5];
const result = nums.map(x => x * 2);
console.log(result);



// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const nums1 = [1, 2, 3, 4, 5];
const result1 = nums1.filter((num) => num > 3);
console.log(result1);


// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const nums2 = [1, 2, 3, 4];
const result2 = nums2.reduce((total, num) => {
  return total + num;
}, 0);
console.log(result2);