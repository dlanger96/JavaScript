"use strict";
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

function calcAge(birthYear) {
    const currentYear = Number(new Date().getFullYear()); 
    return currentYear - birthYear;
    
}



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age
    if (retirement > 0) {
        console.log("Sir")       
        return retirement;
    } else {
        return -1;
    }
    
}

console.log(yearsUntilRetirement(1996, "Dominik"));
console.log(yearsUntilRetirement(1950, "Zdenko"));


 