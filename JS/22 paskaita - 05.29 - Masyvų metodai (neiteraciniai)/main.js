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