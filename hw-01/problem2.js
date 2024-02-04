'use strict'

function sumOf(arr) {
    let sum = arr.reduce((accumulator, currentVal) => {
        return accumulator + currentVal
    }, 0)

    return sum
}

console.log(sumOf([1, 6, 3, 4]))
console.log(sumOf([50, 3, 8, 12]))
console.log(sumOf([77, 4, 40]))
