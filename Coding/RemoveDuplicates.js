function remove(arr) {
    let x = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[x]) {
            x++;
            arr[x] = arr[i];
        }
    }
    return arr.slice(0, x + 1);
}
let arr = [1, 1, 2, 2, 3, 4, 4];
console.log(remove(arr)); 