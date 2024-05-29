console.groupCollapsed('objektai');
let objektas = {
  pavadinimas: 'knyga',
  leidimoMetai: 2000,
  tirazuKiekis: 54,
  autorius: 'zmogus'
}
let objektoRaktai = Object.keys(objektas);
console.log(objektoRaktai);
console.log(objektas.autorius);
console.log(objektas['autorius']);
console.log('------');
for(let i = 0; i < objektoRaktai.length; i++){
  console.log(objektoRaktai[i]);
  console.log(objektas[objektoRaktai[i]]);
}
console.log('------');
for(let raktas in objektas){
  console.log(raktas);
  console.log(objektas[raktas]);
}
console.groupEnd();

console.group('masyvų metodai');

let masyvas0 = [1,2,3,4,5,6,7,8,9];
//              0 1 2 3 4 5 6 7 8
console.log(masyvas0);

masyvas0.fill(':)', 3, 7);
console.log(masyvas0);

masyvas0.reverse();
console.log(masyvas0);

let masyvasApsuktas = masyvas0.toReversed();
console.log(masyvasApsuktas);
console.log(masyvas0);

let skaiciuMasyvas = [1,51,16,98,981,16,1,6841,351,68,13,1,61,351,32,16,81,181,981,91,0];
console.log(skaiciuMasyvas);
let blogaiRikiuotasS = skaiciuMasyvas.toSorted();
console.log(blogaiRikiuotasS);
let geraiRikiuotasS = skaiciuMasyvas.toSorted((a,b)=>a-b);
console.log(geraiRikiuotasS);

let zodziuMasyvas = ['labas','ate','ąžuolas','ąsotis','burbulas','Kęstas','skęsti','žodis','žaizda','zylė','zyzė','zyze','ėdalas', 'ėb', 'edisonas', 'eb'];
let blogaiRikiuotasZ = zodziuMasyvas.toSorted();
console.log(blogaiRikiuotasZ);
let blogaiRikiuotas2Z = zodziuMasyvas.toSorted((a,b)=>a-b);
console.log(blogaiRikiuotas2Z);
let gerasRikiuotasZ = zodziuMasyvas.toSorted((a,b)=>a.localeCompare(b));
console.log(gerasRikiuotasZ);

console.groupEnd();