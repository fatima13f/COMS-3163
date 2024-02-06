'use strict'

function removeNeg(arr) {
    return arr.filter(n => n > 0);
}

console.log(removeNeg([1, -2, 3, -4]))
console.log(removeNeg([-50, -3, 8, 12]))
console.log(removeNeg([77, 4,- 40]))