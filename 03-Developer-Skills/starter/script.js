// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = 23;

if (x === 23) {
  console.log(x);
}

console.log("-------");
*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperaturesNight = [3, -2, -10, -1, "error", 9, 13, 19, 15, 14, 9, 5];

const allTemperatures = temperatures.concat(temperaturesNight);
console.log(allTemperatures);
const greska = Number(temperatures);

function callTempAmplitude(temp1, temp2) {
  const firstTemp = calcMaxMin(temp1);
  const secoundTemp = calcMaxMin(temp2);

  return [firstTemp, secoundTemp];

  // let max = temps[0];
  // let min = temps[0];

  // for (let i = 0; i < temps.length; i++) {
  //   const curTemp = temps[i];
  //   if (typeof curTemp !== "number") continue;

  //   if (curTemp > max) max = curTemp;
  //   if (curTemp < min) min = curTemp;
  // }
  // console.log(`MAX temp = ${max}, MIN temp = ${min}`);
  // return [max, min];
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

// amplitude = amplitude[0] - amplitude[1];
