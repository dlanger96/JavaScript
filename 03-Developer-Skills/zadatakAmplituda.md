# Izračunavnaje amplitude temeljem dva očitavanja senzora

Dobivena su dva očitavanja, funkcija mora primati dva parametra!!

```javascript
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperaturesNight = [3, -2, -10, -1, "error", 9, 13, 19, 15, 14, 9, 5];

const allTemperatures = temperatures.concat(temperaturesNight);
console.log(allTemperatures);

function callTempAmplitude(temps, tempss) {
  const firstTemp = calcMaxMin(temps);
  const secoundTemp = calcMaxMin(tempss);

  return [firstTemp, secoundTemp];
}

function calcMaxMin(temperatur) {
  let max = temperatur[0];
  let min = temperatur[0];

  for (let i = 0; i < temperatur.length; i++) {
    const curTemp = temperatur[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`MAX temp = ${max}, MIN temp = ${min}`);
  return [max, min];
}

let amplitude = callTempAmplitude(temperatures, temperaturesNight);
let one = [];
let two = [];

function arrayLoop(arr, forFill) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    forFill.push(element);
  }
}

arrayLoop(amplitude[0], one);
arrayLoop(amplitude[1], two);
console.log(
  `Amplitude for First = ${one[0] - one[1]}, and Amplitude for Secound = ${
    two[0] - two[1]
  }`
);
```

Ako nije ekscplicitno zadano da se funkcija mora tako implementirati ovo je jednostavnije rješenje gdje se dobiva jedinstevno rješenje tako da sam samo spojio dva polja

```javascript
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperaturesNight = [3, -2, -10, -1, "error", 9, 13, 19, 15, 14, 9, 5];

const allTemperatures = temperatures.concat(temperaturesNight);
console.log(allTemperatures);

function callTempAmplitude(temps) {
  const firstTemp = calcMaxMin(temps);

  return firstTemp;
}

function calcMaxMin(temperatur) {
  let max = temperatur[0];
  let min = temperatur[0];

  for (let i = 0; i < temperatur.length; i++) {
    const curTemp = temperatur[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(`MAX temp = ${max}, MIN temp = ${min}`);
  return [max, min];
}

let amplitude = callTempAmplitude(allTemperatures);
amplitude = amplitude[0] - amplitude[1];
console.log(amplitude);
```
