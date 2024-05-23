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

