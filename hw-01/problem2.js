'use strict'

function sumOf(arr) {
    let sum = arr.reduce((accumulator, currentVal) => {
        return accumulator + currentVal
    }, 0)
    console.log(sum)
}

sumOf([1, 6, 3, 4])
sumOf([12, 6, 8, 5, 6, 3])
sumOf([77, 1, 20])
