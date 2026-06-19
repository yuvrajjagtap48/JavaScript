function rotate(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

function reverse(nums, i, j) {
    let i = 0, j = nums.length - 1;
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
}
// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr); // Output: [5, 6, 7, 1, 2, 3, 4]