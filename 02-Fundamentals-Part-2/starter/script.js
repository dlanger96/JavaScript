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


// Coding challange
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
*/

// Array
const firend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael","Steven","Peter"];
console.log(friends);

const yearss = new Array(1991, 1984, 2008, 2020);
console.log(yearss);

console.log(friends[0],friends[2]);
console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = "Jay";
console.log(friends[2]);

const firstName = "Dominik"
const dominik = [firstName, "Langer", 2037 - 1996, "student", friends];

console.log(dominik);
console.log(dominik.length);

function calcAge(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const firstYear = `Prva godina: ${calcAge(years[0])}`;
console.log(firstYear);
console.log("---------");

let ages = [];
for (let index = 0; index < years.length; index++) {
    const element = calcAge(years[index]);
    console.log(element);
    ages[index] = element;
}

console.log(ages);
