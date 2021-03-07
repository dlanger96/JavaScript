"use strict";
/*
let hasDriversLicence = false;
let passtest = true;

if (passtest) {
    hasDriversLicence = true;
}

hasDriversLicence == true ? console.log("I can drive!!") : console.log("STOP!!");


// 033 Funkcije
function logger(){
    console.log("My name is Dominik");
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juce with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuic = fruitProcessor(5, 0);
console.log(appleJuic);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);


function calcAge1(birthYear) {
    //const currentYear = Number(new Date().getFullYear());
    return 2037 - birthYear;
}

console.log(calcAge1(1996));

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1996);

console.log(age2)
*/
// arrow function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`
}
console.log(yearsUntilRetirement(1991, "Dominik"));
console.log(yearsUntilRetirement(1980, "Bob"));
