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