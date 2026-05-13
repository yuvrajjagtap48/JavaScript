// function separate(arr){
//     let i = 0, j = 0;
//     while(j < arr.length){
//         if(isNaN(arr[j])){
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             i++;
//         }
//         j++;
//     }
//     return arr;
// }

function separate(arr){
    let n = " ";
    let ch = " ";
    for(let i = 0; i < arr.length; i++){
        if(ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z'){
            ch += arr[i];
        }
        else if(n >= '0' && n <= '9'){
            n += arr[i];
        }
    }
    return ch + n;
}
// Example usage:
console.log(separate(['a', '1', 'b', '2', 'c', '3']));