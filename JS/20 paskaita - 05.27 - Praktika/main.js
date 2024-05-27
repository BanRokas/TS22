//    Kintamieji
/*
  String, Number, Boolean, Array ir Object

  let / var / const pavadinimas = data;
*/

console.groupCollapsed('objektai');
let objektas = {
  vardas: "Rokas",
  amzius: 20,
  ugis: 180,
  svoris: 100,
  turiVaiku: false
};
console.log(objektas.vardas);
console.log(objektas.amzius);

let masyvasObjekte = {
  vardas: "Rokas",
  amzius: 20,
  ugis: 180,
  svoris: 100,
  turiVaiku: false,
  pomegiai: ['žaisti žaidimus', 'žiūrėti filmus', 'sportuoti', 'miegoti']
};
console.log(masyvasObjekte.pomegiai);
console.log(masyvasObjekte.pomegiai.length);
console.log(masyvasObjekte.pomegiai[0]);

let objektasObjekte = {
  vardas: "Rokas",
  amzius: 20,
  ugis: 180,
  svoris: 100,
  turiVaiku: false,
  gyvenamojiVieta: {
    salis: 'Lietuva',
    miestas: 'Kaunas',
    gatve: 'Mindaugo pr.',
    namoNumeris: 54,
    butoNumeris: 21
  }
};
console.log(objektasObjekte);
console.log(objektasObjekte.gyvenamojiVieta); // {}
console.log(objektasObjekte.gyvenamojiVieta.salis); // Lietuva
console.log(objektasObjekte.gyvenamojiVieta.miestas); // Kaunas
console.groupEnd();

console.groupCollapsed('masyvai');
let masyvas = ['obuolys', 'vyšnia', 'kriaušė', 'agurkas', 'pomidoras', 'ananasas'];
console.log(masyvas);
console.log(masyvas[0]);
console.log(masyvas[2]);
console.log(masyvas[5]);
console.log(masyvas[masyvas.length - 1]);
let masyvaiMasyve = [
  [11, 12, 13],
  [21, 22, 23],
  [31, 32, 33]
]; // rečiausias atvejis
console.log(masyvaiMasyve);
console.log(masyvaiMasyve[0]); // [11,12,13]
console.log(masyvaiMasyve[0][0]); // 11
console.log(masyvaiMasyve[0][2]); // 13
console.log(masyvaiMasyve[1][1]); // 22
console.log(masyvaiMasyve[2][2]); // 33
let objektaiMasyve = [
  {
    vardas:"Rokas1",
    pavarde:"Ban1",
    amzius: 11,
    pavarges: true
  }, {
    vardas:"Rokas2",
    pavarde:"Ban2",
    amzius: 12,
    pavarges: false
  }, {
    vardas:"Rokas3",
    pavarde:"Ban3",
    amzius: 13,
    pavarges: true
  }
];
console.log(objektaiMasyve); // [{},{},{}]
console.log(objektaiMasyve[0]); // {}
console.log(objektaiMasyve[0].amzius); // 11
console.log(objektaiMasyve[1].pavarde); // Ban2
console.groupEnd();

// Sąlygos
/*
  if(salyga0){
    kodas vykdomas jeigu salyga0 yra tiesa
  } else if(salyga1){
    kodas vykdomas jeigu salyga0 yra melas ir salyga1 yra tiesa
  } else if(salyga2){
  } else if(salyga3){
  } else {
    kodas vykdomas TIK tuomet jeigu visos prieš tai buvusios sąlygos buvo melas
  }
*/
console.groupCollapsed('sąlygos');
let vartotojas = {
  username: '',
  role: 'admin'
};
console.log('if');
if(vartotojas.role === 'user'){
  console.log('matys įprastus prisijungusio vartotojo dalykus');
} else if(vartotojas.role === 'admin'){
  console.log('matys admino panelę');
} else {
  console.log('Vartotojas neprisijungęs');
}
console.log('switch');
switch(vartotojas.role){
  case 'admin':
    console.log('matys admino panelę');
    break;
  case 'user':
    console.log('matys įprastus prisijungusio vartotojo dalykus');
    break;
  default:
    console.log('Vartotojas neprisijungęs');
}
console.groupEnd();

// Ciklai
console.groupCollapsed('ciklai');

for(let i = 0; i < 5; i+=2){
  console.log(i);
}

for(let i = 0; i < masyvas.length; i++){
  console.log(masyvas[i]);
  // if(masyvas[i] === 'kriaušė'){
  //   console.log('^ fui');
  // }
}
console.log('------------');
for(let vaisiusArbaDarzove of masyvas){
  console.log(vaisiusArbaDarzove);
  // if(vaisiusArbaDarzove === 'kriaušė'){
  //   console.log('^ fui');
  // }
}
console.log('------------');
for(let i = 0; i < objektaiMasyve.length; i++){
  // console.log("Vartotojo vardas yra " + objektaiMasyve[i].vardas + " " + objektaiMasyve[i].pavarde + ", jam yra " + objektaiMasyve[i].amzius + " metų.");
  console.log(`Vartotojo vardas yra ${objektaiMasyve[i].vardas} ${objektaiMasyve[i].pavarde}, jam yra ${objektaiMasyve[i].amzius} metų.`);
}

console.groupEnd();

// Funkcijos

// įprasta vardinė funkcija
function atimtis0(sk1, sk2){
  return sk1-sk2;
}

// įprasta bevardė funkcija
(function (sk1, sk2){
  return sk1 - sk2;
})

// įprasta bevardė funkcija prilyginta kintamajam
let atimtis1 = function(sk1, sk2){
  return sk1 - sk2;
};

// arrow funkcija
(sk1, sk2) => {
  return sk1-sk2;
}

// arrow funkcija prilyginta kintamajam
let atimtis2 = (sk1, sk2) => {
  return sk1-sk2;
}

// arrow funkcija sutrumpinta
// galima trumpinti TIK TUOMET jeigu funkcijos viduje yra VIENAS veiksmas
let atimtis2Short = (sk1, sk2) => sk1 - sk2;

(sk1, sk2) => Math.floor(((sk1+sk2)*5+3)/13);

(sk1, sk2) => {
  let suma = sk1+sk2;
  return Math.floor(((suma)*5+3)/13);
}


for(let i = 0; i < 10; i++){
  console.log('veiksmai 1');
  for(let j = 0; j <= 5; j++){ // j vyks 5 kartus kiekvieną kartą kai vyks i
    console.log("i:"+i, "j:"+j);
  }
  console.log('veiksmai 2');
}