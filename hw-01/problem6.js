'use strict'

function toCelsius(temp) {
    return ((temp - 32) * (5/9)) 
}

function toFahrenheit(temp) {
    return ((temp * (9/5)) + 32);
}

// C to F
console.log(toFahrenheit(34));
console.log(toFahrenheit(20));
console.log(toFahrenheit(15));

// F to C
console.log(toCelsius(81));
console.log(toCelsius(62));
console.log(toCelsius(44));
