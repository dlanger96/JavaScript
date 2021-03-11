# JavaScript
 My trip with JavaScript.


 ### Arrays
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


## Objekti

Kreiranje

```javascript
const dominik = {
    firstName: "Dominik",
    lastName: "Langer",
    age: 25,
    job: "student",
    friends: ["Michael", "Peter", "Stevan"]
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
const interestedIn = prompt("What do you want to know about me? firstName, lastName, age, job or friends")

console.log( `Odabrao si (${interestedIn}): ${dominik[interestedIn]}`);
```
