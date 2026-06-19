function SecondLargest(arr) {
    if (arr.length < 2) {
        return null; 
    }
    let first = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    return second === -Infinity ? null : second; // Return null if no second largest
}

// Example usage:
console.log(SecondLargest([3, 1, 4, 1, 5, 9]));
console.log(SecondLargest([1, 2, 3, 4, 5]));



