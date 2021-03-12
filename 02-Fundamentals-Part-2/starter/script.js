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
for (let rep = 0; rep < years.length; rep++) {
    const element = calcAge(years[rep]);
    console.log(element);
    ages[rep] = element;
}

console.log(ages);


// Array Methods

const friends = ["Michael","Steven","Peter"];
const newLenght = friends.push("Jay"); // Dodavanje na kraj
console.log(friends);
console.log(newLenght);

friends.unshift("John");
console.log(friends); // Dodavanej na pocetak

//Brisanje elemenata

friends.pop(); //Izbacuje zadnji element
const poped = friends.pop();
console.log(poped);
console.log(friends);

friends.shift(); // Izbacuje prvi element
console.log(friends);

console.log(friends.repOf("Steven")); // vraća indeks tog elementa

console.log(friends.includes("Steven")); // Ako posotji, vraća boolean vriednost

friends.push(23);
console.log(friends.includes("23")) // Neće ga pronaći jer je striktno pretraživanje

if (friends.includes("Peter")) { 
    console.log(`You have a friend called Peter`);
} else {
    friends.push("Peter")
}
console.log(friends);

 
// Coding Challange #2
 
const bills = [125, 555, 44]
let tip = 0;
const tips = [];
const total = [];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        tip = 0.15 * bill;
        tips.push(tip);
        total.push(tip + bill)
        console.log("15%")
        return tip;
    }else {
        tip = 0.20 * bill;
        tips.push(tip);
        total.push(tip + bill)
        console.log("20%")
        return tip;
    }
}

for (let rep = 0; rep < bills.length; rep++) {
    const element = calcTip(bills[rep]);
    console.log(`Račun broj ${rep}: Iznosi = ${bills[rep]}, napojnica iznosi: ${element}, a ukupno ${total[rep]}`);
}

console.log(`Napojnice ${tips}`);
console.log(`types ${total}`);



// Objekti

const dominik = {
    firstName: "Dominik",
    lastName: "Langer",
    age: 25,
    job: "student",
    friends: ["Michael", "Peter", "Stevan"]
};

console.log(dominik.firstName, dominik.lastName);
console.log(dominik["lastName"]);

const nameKey = "Name";

console.log(dominik["first" + nameKey]);
console.log(dominik["last" + nameKey]);

const interestedIn = prompt("What do you want to know about me? firstName, lastName, age, job or friends")

if (dominik[interestedIn]) {
    console.log( `Odabrao si (${interestedIn}): ${dominik[interestedIn]}`);
} else {
    console.log("Wring request!");
}

dominik.location = "Portugal";
dominik["twitter"] = "@dominik-langer";
console.log(dominik);

console.log(`${dominik["firstName"]} has ${dominik["friends"].length} friends, and his best friend is called ${dominik["friends"][0]}`);





const dominik = {
    firstName: "Dominik",
    lastName: "Langer",
    birthYear: 1996,
    job: "student",
    friends: ["Michael", "Peter", "Stevan"],
    hasDriversLicence: true,

    // calcAge: function(birthYear){ // Dodana je metoda za izracunavanje godina
    //     return 2037 - birthYear
    // }

    // calcAge : function(){
    //     return 2037 - this.birthYear;
    // }

    calcAge : function (){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    
    getSummery : function(){
        if (this.hasDriversLicence) {
            return `${this.firstName} is a ${this.calcAge} old ${this.job}, and he has a driver's licence`;
        } else {
            return `${this.firstName} is a ${this.calcAge} old ${this.job}, and he hasn't driver's licence`;
        }
    },
    

    getSummary : function(){
        return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriversLicence ? "a" : "no"} driver's licence`;
    }
};
console.log(dominik.calcAge());
console.log(dominik["getSummary"]());
console.log(dominik["age"]);
console.log(dominik.age);



const mark = {
    fullNameM : "Mark Miller",
    massM : 78,
    heightM : 1.69,

    calcBMI: function() {
        this.bmiM = this.massM / (this.heightM ** 2);
        return this.bmiM;
    }
};

const john ={
    fullNameJ: "John Smith",
    massJ: 92,
    heightJ: 1.95,

    calcBMI: function() {
        this.bmiJ = this.massJ / (this.heightJ ** 2);
        return this.bmiJ;
    }
};

if (mark["calcBMI"]() > john["calcBMI"]()) {
    console.log(`${mark["fullNameM"]} has a highrt BMI (${mark["bmiM"]}) than ${john["fullNameJ"]} who has BMI (${john["bmiJ"]})`);
} else {
    console.log(`${john["fullNameJ"]} has a higher BMI (${john["bmiJ"]}) than Mark BMI ${mark["bmiM"]}`);
}



for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
   
}



const dominik = ["Dominik", "Langer", 2037 - 1996, "student", ["Micahel", "Peter", "Steven"]];
const types = [];

for (let i = 0; i < dominik.length; i++) {
    const element = typeof dominik[i];
    //console.log(element);
    //types[i] = element;
    types.push(element);
    

}
console.log(types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    const element = 2037 - years[i];
    ages.push(element);
}

console.log(ages);


for (let i = 0; i < dominik.length; i++) {

    if (typeof dominik[i] !== "string") continue; // AKo nije string neće se obavit
        
    const element = typeof dominik[i];
    console.log(element);
    

}



const dominik = ["Dominik", "Langer", 2037 - 1996, "student", ["Micahel", "Peter", "Steven"]];

const broj = dominik.length -1;

for (let manji = broj; manji >= 0; manji--) {
    const element = dominik[manji];
    console.log(element);
    
}

for (let exercies = 1; exercies < 4; exercies++) {
    console.log(`-----Starting exercise ${exercies}-----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
        
    }
   
}



// console.log("FOR LOOP")
// for (let rep = 0; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

console.log("While LOOP")
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) +1;
//console.log(dice);

while (dice !== 6)
{
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
    dice === 6 ? console.log("Ide van", dice) : console.log("Dalje");
}
console.log(`OUT WITH ${dice}`);

*/

// Coding Challange #4

const bills = [22,295,176,440,37,105,10,1100,86,52];
let tip = 0;
const tips = [];
const totals = [];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        tip = 0.15 * bill;
        tips.push(tip);
        totals.push(tip + bill)
        console.log("15%")
        return tip;
    }else {
        tip = 0.20 * bill;
        tips.push(tip);
        totals.push(tip + bill)
        console.log("20%")
        return tip;
    }
}

for (let i = 0; i < bills.length; i++) {
    const element = bills[i];
    calcTip(element);
}

console.log(tips);
console.log(totals);



function calcAverage(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum += element; 
    }
    sum = sum / (arr.length);
    return sum;
}

console.log(calcAverage(totals));
