function isSorted(arr) {
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] > arr[j]) {
            return false;
        }
        i++;
        j++;
    }
    return true;
}

console.log(isSorted([1,2,3,4,5]));
console.log(isSorted([1,3,2,4,5]));