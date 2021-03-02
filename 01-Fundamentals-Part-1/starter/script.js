/*
let js = "Amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
let first = "Marko";
let newFirstName = "Srecko";
let first_name = "Stevan";
console.log(firstName);
console.log(first);
console.log(newFirstName);
// tipovi
let isIsland = false;
let population = 4;
let countryName = "Croatia";

console.log(isIsland);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof countryName);
console.log(`"Ime zemlje je ${countryName}, a broj stanovnika iznosi ${population}"`);


let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Dominik");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);



let age = 30;
age = 31;

const birthYear = 1991;

var job = "Programm er";
console.log(`Godina rođenja ${typeof birthYear}  Posoa ${typeof job}`);

let ja = "marko";
console.log(ja);

console.log(typeof ja);

const now = 2021
const ageJonas = now - 1991;
const ageSarah = now - 2001;
console.log(`Jonas is ${ageJonas} years old, and Sarah is ${ageSarah} years old`);
console.log("2 na treću je:", 2 ** 3); // potenciranje 

const firstName = "Jonas";
const lastName = "Marković";
console.log(`Ime je: ${firstName}, a prezime je: ${lastName}`);

let x = 10 + 5;
x += 10; // jednako kao i x = x + 10;
x *= 4; // jednako kao i x = x * 4;
x++; // x = x + 1;
x--; // x = x -1;
console.log(x);

// Usporedbe

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019)


const now = 2021
const ageJonas = now - 1991;
const ageSarah = now - 2001;
console.log(now - 1991 > now - 2019) 

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const mark = "Mark";
const john = "John";

const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn **2;
let markHigherBMI;

if (bmiMark > bmiJohn) {
    markHigherBMI = true;
    console.log("Mark has higher BMI than John", markHigherBMI);
}
else{
    markHigherBMI = false;
    console.log("John has higher BMI than Mark");
}
 

console.log(`Mark BMI= ${bmiMark}, and John BMI= ${bmiJohn}`)


const firstName = "Dominik";
const job = "Student";
const birthYear = 1996;
const year = 2037;

const dominik = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
console.log(dominik);

const dominikNEW = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(dominikNEW);

console.log(`Regular string`);
console.log(`String
New String
New Line`);


const age = 15;
 
if (age >= 18) {
    console.log("Sarah can start driving licence 😊");
}
else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 🤣`);
}

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
     century = 20;
}
else {
    century = 21;
}
console.log(`You were born in ${century} century`);
*/

// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(24), 24);

// Type Coercion
console.log("I am " + 24 + " years old.");
console.log("I am " + "24" + " years old."); // Isto, ali ovdje nije potrebno uopće da koristim String()
console.log("23" - "10" - "3"); // Prepoznaje da se radi o brojevima, ali samo ako je MINUS
console.log("23" + "10" + "3"); // Ovdje nije taj slučaj i ispis izgleda 23103


let n = "1" + 1;
n = n - 1;
console.log(n);

