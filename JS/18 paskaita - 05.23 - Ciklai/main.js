let blogasObjektas = {
  transportoPriemone0: 'dviratis',
  transportoPriemone1: 'automobilis',
  transportoPriemone2: 'lėktuvas'
}
let blogasMasyvas = ['Fiat', 2003, 'mėlyna', true];
let objektas = {
  marke: 'Fiat',
  pagaminimoMetai: 2003,
  kebuloSpalva: 'mėlyna',
  galiojantisTA: true
};
let masyvas = ['dviratis', 'automobilis', 'lėktuvas', 'traukinys', 'riedlentė', 'arklys', 'riedučiai', 'motociklas'];

console.log(masyvas);
console.log(masyvas[4]); // riedlentė
console.log(masyvas[0]); // dviratis
console.log(masyvas[-1]); // undefined (neegzistuoja)
console.log(masyvas[8]); // undefined (neegzistuoja (bent jau kolkas))

console.log(objektas);
console.log(objektas.marke); // fiat
console.log(objektas.pagaminimoMetai); // 2003
console.log(objektas.chichiChacha); // undefined (neegzistuoja (bent jau kolkas))

//        Ciklai
console.groupCollapsed('be ciklų');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.groupEnd();

// for
console.groupCollapsed('su for');
for(let i = 1; i < 10; i++){
  console.log(i);
}
console.groupEnd();

// while
console.groupCollapsed('su while stupid');
let whileIteration = 1;
while(whileIteration < 10){
  console.log(whileIteration);
  whileIteration++;
}
console.groupEnd();
console.groupCollapsed('su while decent');
let random = 0;
while(random < 8){
  random = Math.random()*9;
  console.log(random);
}
console.groupEnd();

//      for praktika
console.groupCollapsed('for praktika');
// sukamas ciklas nuo 0 iki 20 kas 3
for(let i = 0; i < 20; i+=3){
  console.log(i);
}
console.log('----------');
// sukamas ciklas nuo -10 iki 30 kas 8
for(let i = -10; i < 30; i+=8){
  console.log(i);
}
console.log('----------');
// sukamas ciklas nuo 10 iki 0 kas 1
for(let i = 10; i >= 0; i--){
  console.log(i);  
}
console.log('----------');
// sukamas ciklas nuo 0 iki 15 kas 1; spausdinti tik lyginius skaičius
for(let i = 0; i <= 15; i++){
  if(i !== 0 && i % 2 === 0){
    console.log(i);
  }
}
console.groupEnd();

console.group('for ciklai su masyvais');
// console.log(masyvas[0]);
// console.log(masyvas[1]);
// console.log(masyvas[2]);
// console.log(masyvas[3]);
// console.log(masyvas[4]);
// console.log(masyvas[5]);
// console.log(masyvas[6]);
// console.log(masyvas[7]);
for(let i = 0; i < masyvas.length; i++){
  console.log(masyvas[i]);
}
console.groupEnd();

let fancyMasyvas = [
  {
    vardas: "Rokas",
    amzius: 27
  },{
    vardas: "Rokas1",
    amzius: 272
  },{
    vardas: "Rokas2",
    amzius: 274
  },{
    vardas: "Rokas3",
    amzius: 257
  },{
    vardas: "Rokas4",
    amzius: 2411
  },{
    vardas: "Rokas5",
    amzius: 327
  }
];

for(let i = 0; i <= fancyMasyvas.length - 1; i++){
  console.log(fancyMasyvas[i].vardas);
}