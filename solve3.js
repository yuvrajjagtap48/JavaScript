// remove duplicate values from an array
let arr = [1, 2, 3, 4, 5, 1, 2, 3];
let uniqueArr = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
});
console.log(uniqueArr); 
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}


// remove positive values from an array
let arr2 = [1, -2, 3, -4, 5, -6];
let negativeArr = arr2.filter((value) => {
    return value < 0;
});
console.log(negativeArr);


// find factorial of a number using recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); 

// count characters in a string
function countCharacters(str) {
    let map = {};
    for (let i = 0; i < str.length; i++) {
        if (!map[str[i]]) {
            map[str[i]] = 1;
        }
        else {
            map[str[i]]++;
        }
    }
    return map;
}
console.log(countCharacters("yuuvvvraj"));


console.log(sum(5)(6));
console.log(sum(5,6));
function sum(a, b) {
    if (b) {
        return sum(a + b);
    }
    return a;
}


// merge two string alternatively
function mergeStrings(str1, str2) {
    let result = "";
    let i = 0;
    let j = 0;
    while (i < str1.length || j < str2.length) {
        if (i < str1.length) {
            result += str1[i];
            i++;
        }
        if (j < str2.length) {
            result += str2[j];
            j++;
        }
    }
    return result;
}