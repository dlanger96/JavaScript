"use strict";
/*
let hasDriversLicence = false;
let passtest = true;

if (passtest) {
    hasDriversLicence = true;
}

hasDriversLicence == true ? console.log("I can drive!!") : console.log("STOP!!");

*/
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