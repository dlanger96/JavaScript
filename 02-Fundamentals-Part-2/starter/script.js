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
*/

const calcAverage = (score1, score2, score3) => {
    let average = (score1 + score2 + score3) / 3;
    return average;
}
const dolphins = calcAverage(44,23,71);
const koalas = calcAverage(65,54,49);

console.log(`avgDolphins ${dolphins}, avgKoalas ${koalas}`);

function checkWinner(avgDolphins, avgKoalas) {
    const winDolphins = avgDolphins >= (2*avgKoalas);
    const winKoalas = avgKoalas >= (2*dolphins);

    if (winDolphins) {
        let result = `Dolphins WIN, Dolphins score ${avgDolphins} VS Koalas score ${avgKoalas}!!`;
         return result;
    }else if(winKoalas) {
        let result = `Koalas WIN, Dolphins score ${avgDolphins} VS Koalas score ${ avgKoalas}!!`;
         return result;
    }
    else {
        let result = `No winner`;
        return result;
    }
}

console.log(checkWinner(dolphins, koalas)); 
 