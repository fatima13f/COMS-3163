'use strict'

function divisible(num) {
    if((num % 10) == 0){
        return true;
    }
    else 
        return false;
}

console.log(divisible(30))
console.log(divisible(2))
console.log(divisible(105))