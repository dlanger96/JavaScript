# JavaScript

My trip with JavaScript.

## Arrays

```javascript
const array = [];
const aray2 = new Array();
```

## Arrays Methods

Dodavanje na kraj

```javascript
varijabla.push("NoviZapis");
```

Dodavanje na početak

```javascript
varijabla.unshift("NoviZapis");
```

Brisanje elementa koji je na kraju

```javascript
varijabla.pop();
```

Brisanje elementa koji je na početku

```javascript
varijabla.shift();
```

Dohvaćanje indeksa

```javascript
varijabla.indexOf(elemnt);
```

Vraćanje boolean vrijednosti ako je element unutar polja
STRIKTNO PRETRAŽIVANJE ===

```javascript
varijabla.includes(element);
```

---

**_Spajanje dva polja_**

```javascript
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperaturesNight = [3, -2, -10, -1, "error", 9, 13, 19, 15, 14, 9, 5];

const allTemperatures = temperatures.concat(temperaturesNight);
console.log(allTemperatures);
```

---

## Objekti

Kreiranje

Pazi na firstName: !!!!!

```javascript
const dominik = {
  firstName: "Dominik",
  lastName: "Langer",
  age: 25,
  job: "student",
  friends: ["Michael", "Peter", "Stevan"],
};
```

Ispis

Ispis koriteći .

```javascript
console.log(dominik.firstName);
```

Ispis preko []
Lakše ga je implementirati, korisnik mora samo upisati string koji ga zanima

```javascript
const name = "Name";
console.log(dominik["first" + name]);
console.log(dominik["last" + name]);
console.log(dominik["age"]);
```

Uzimam input od korisnika

```javascript
const interestedIn = prompt(
  "What do you want to know about me? firstName, lastName, age, job or friends"
);

console.log(`Odabrao si (${interestedIn}): ${dominik[interestedIn]}`);
```

Dodavanje metode

```javascript
const dominik = {
    firstName: "Dominik",
    lastName: "Langer",
    age: 25,
    job: "student",
    friends: ["Michael", "Peter", "Stevan"]

    calcAge : function (){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary : function(){
        return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriversLicence ? "a" : "no"} driver's licence`;
    }
};
```

Ako ima vozačku dozvolu onda će string sadržavati a, ako nema onda će biti no

```javascript
${this.hasDriversLicence ? "a" : "no"}
```

Unutar metode calcAge postavlja se i novo svojstvo na tom objektu koji se zove age. Nakon što se metoda izvrši tek se tada dodjeljuje string tom svojstvu.

```javascript
console.log(dominik.calcAge());
console.log(dominik["getSummary"]());
console.log(dominik["age"]);
```

Rezultat

```
41
Dominik is a 41 old student, and he has a driver's licence
41
```
