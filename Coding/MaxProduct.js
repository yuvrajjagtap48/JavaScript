function maxProduct(nums) {
    let i = 0;
    let j = 0;
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] > i) {
            j = i;
            i = nums[k];
        } 
        else if (nums[k] > j) {
            j = nums[k];
        }
    }
    return (i - 1) * (j - 1);
}

// Example usage:
console.log(maxProduct([3,4,5,2]));
console.log(maxProduct([1,5,4,5]));