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

Ispis temperature preko polja i pomoću stringa

```javascript
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const forcast = [];

function printForcast(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = `Day ${i + 1} expected temeprature = ${arr[i]} `;
    forcast.push(element);
  }

  return forcast.toString();
}

function forcastPrint(arr) {
  let element = "";
  for (let i = 0; i < arr.length; i++) {
    element += `...Day ${i + 1} expected temeprature = ${arr[i]}`;
  }

  return element + "...";
}

console.log(printForcast(data1));
console.log(forcastPrint(data2));
```

```javascript
Day 1 expected temeprature = 17 ,Day 2 expected temeprature = 21 ,Day 3 expected temeprature = 23
...Day 1 expected temeprature = 12...Day 2 expected temeprature = 5...Day 3 expected temeprature = -5...Day 4 expected temeprature = 0...Day 5 expected temeprature = 4...
```

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

# JavaScript + HTML + CSS

<strong> DOCUMENT OBJECT MODEL (DOM) manipulacija</strong>

JS nam omogućuje da dohvatimo elemente iz HTML-a

## Klase

Primjer jedne klase u HTML-u

```html
<p class="message">Start guessing...</p>
```

JavaScript, koristi .message jer se radi o klasi i moraš pretovrit u text

```javascript
document.querySelector(".message").textContent;
```

Ako je definiran broj

```javascript
document.querySelector(".guess").value = 23;
```

## Događaji

Pratim što se događa kada pritisnemo gumb, gumb je klasa "btn check", a input je klasa guess.
Odabirem taj element preko .querySelectora("koja klasa") i pratim što se događa preko .addEventListener("koja aktivnost se prati", function(što da napravim kada se ta aktivnost izvrši?))

```javascript
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
```

## CSS manipulacija

Želim postaviti zelenu pozadinu.
Prvo dohvatim cijeli "body", zatim definiram da se radi o stilu preko .style i zatim ono što želim izmijeniti a to je .backgroundColor i zatim postavim na željenu boju tipa zelenu = <span style="color:green">'#60b347'</span>.

Kod manipulacije uvijek se specificira <strong>STRING</strong>

```javascript
document.querySelector("body").style.backgroundColor = "#60b347";
```

Možemo odabrati samo jedan element, ali ako imamo više elemenata koji imaju isti naziv klase, moramo koristiti

```javascript
const btnsOpenModal = document.querySelectorAll(".show-modal");
```

```js
NodeList(3) [button.show-modal, button.show-modal, button.show-modal]
0: button.show-modal
1: button.show-modal
2: button.show-modal
```

Vidimo da se grupiraju kao polje, što znači da ih mogu izlistati i ispisati

```js
for (let i = 0; i < btnsOpenModal.length; i++) {
  const element = btnsOpenModal[i];
  console.log(element.textContent);
}
```

```js
NodeList(3) [button.show-modal, button.show-modal, button.show-modal]0: button.show-modal1: button.show-modal2: button.show-modallength: 3__proto__: NodeList
script.js:11 Show modal 1
script.js:11 Show modal 2
script.js:11 Show modal 3
```

Ako je neka klasa postaljena na hidden preko HTML-a ja ju preko JS-a mogu postaviti da je vidljiva.

Koristim

```js
.classList.remove("što želim maknuti");
```

Unutar HTML-a to izgleda ovako

```html
<div class="modal hidden"></div>
<div class="overlay hidden"></div>
```

Cijeli kod gdje se ista funkcionalnost definira nad 3 gumba

```js
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  const element = btnsOpenModal[i];
  element.addEventListener("click", function () {
    modal.classList.remove("hidden"); // maknuo sam hiiden iz naziva klase
    overlay.classList.remove("hidden");
  });
}
```

Mogao sam i direktno preko CSS-a, zato što je display postavljen na none

```js
modal.style.display = "block";
```

Dodavanje se izvršava na isti način

```js
btnCloseModal.addEventListener("click", function () {
  overlay.classList.add("hidden"); //dodajem klasi hidden
  modal.classList.add("hidden");
});
```

<strong>Ovako je bolje DRY</strong>

```js
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove("hidden"); // maknuo sam hiiden iz naziva klase
  overlay.classList.remove("hidden");
  //modal.style.display = 'block';
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  const element = btnsOpenModal[i];
  element.addEventListener("click", openModal);
}

const closeModal = function (ispis) {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
```

<strong>Zatvaranje na ESC samo ako je prozor otvoren</strong>

```js
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    // Zatvaranje na ESC samo ako je modal otovren
    closeModal();
  }
});
```
