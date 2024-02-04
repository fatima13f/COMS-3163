'use strict'

function Multipy(arr) {
    let result = 1
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result
}

console.log(Multipy([1, 2, 3, 4]))
console.log(Multipy([50, 3, 8, 12]))
console.log(Multipy([77, 4, 40]))