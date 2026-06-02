const arr = [1, 2, 3, 4];

const output = function binary(arr){
    return arr.map(num => num.toString(2));
}

const output2 = arr.map(num => num.toString(2));


console.log(output(arr));
console.log(output2);