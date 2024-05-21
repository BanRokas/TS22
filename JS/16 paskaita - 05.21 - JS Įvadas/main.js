console.groupCollapsed("pirma grupė");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.log("Kitas failas");
console.groupEnd();

document.querySelector("#list").addEventListener("click", () => { console.log("paspaudei"); });

console.groupCollapsed("antra grupė");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.log("Kitas failas2");
console.groupEnd();

// window.alert('Error or smthin');
// window.prompt('Koks tavo vardas?');

// Kintamieji
console.groupCollapsed('kintamieji');
var sunsVardas = "Reksas";
let arAlkanas = true;
const mano_DOB = 1996;

let skaicius = 5;
let kitasSkaicius = 56.4;
let skaicius2 = -6;
let sk0 = 555/5*2+3;
let sk1 = skaicius2 * -5;
let randomSkaicius = Math.random(); // grąžina random skaičių nuo 0 iki 1
console.log(skaicius);
console.log(sk0);
console.log(sk1);
console.log(randomSkaicius);

let zodis0 = 'Labas';
let zodis1 = "Daugiau nei vienas žodis, viename kintamajame";
let raide = 'a';
let backtick = `kairiajame viršutiniame klaviatūros kampe`;
let neSkaicius = '45';
let neBoolean = "false";
// let kabuciuKlaida = "cituoju kažką:"citata""; negalima/klaida
let kabuciuFix0 = 'cituoju kažką: "citata"';
let kabuciuFix1 = "cituoju kažką: 'citata'";
let kabuciuFix2 = `cituoju kažką: 'citata'`;
console.log(raide);
console.log(neSkaicius);

let tiesa = true;
let melas = false;
console.groupEnd();

// Aritmetika
console.group('aritmetika');
let number0 = 5;
let number1 = 23;
let notNumber = '54';
let text = 'Hello World!';
let notFalse = true;

console.log('5 + 23 =', number0 + number1); // 28
console.log('5 - 23 =', number0 - number1); // -18
console.log('5 * 23 =', number0 * number1); // 115
console.log('5 / 23 =', number0 / number1); // 0.217...
console.log('23 ** 5 =', number1 ** number0); // 6436343
console.log('23**(1/5) =', number1 ** (1/number0)); // 1.872...
console.log('23 % 5 =', number1 % number0); // 3

console.log('', text + text); // 'Hello World!Hello World!'
console.log('', text - text); // NaN

console.log('', text + number0); // 'Hello World!5'
console.log('', number0 + text); // '5Hello World!'
console.log('', text - number0); // NaN
console.log('', number0 - text); // NaN
console.log('', text * number0); // NaN

console.log('', notNumber + number0); // '545'
console.log('', notNumber - number0); // 49
console.log('', notNumber * number0); // 270
console.log('', number0 / notNumber); // 0.0925...

console.groupEnd();