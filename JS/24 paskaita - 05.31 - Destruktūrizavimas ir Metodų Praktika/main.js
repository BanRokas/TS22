let masyvasDes = ['labas', 24, undefined, [false, 5], 'zodis', 5, 6, 8];
console.log(masyvasDes);
// be destr
let el0 = masyvasDes[0];
let el1 = masyvasDes[1];
let el2 = masyvasDes[2] !== undefined ? masyvasDes[2] : 'default reikšmė';
let el3 = masyvasDes[4];
let elRest = masyvasDes.slice(5);

console.log(el0, el1, el2, el3, elRest);
// su dest
let [ed0, ed1, ed2 = 'default reikšmė', [ed3, ed4], ...edRest] = masyvasDes;
console.log(ed0, ed1, ed2, ed3, ed4, edRest);

let objektasDes = {
  vardas: "Kazys",
  amzius: 55,
  pavarges: true,
  batuDydis: 45,
  vairuotojoTeises: undefined,
  gyvenamojiVieta: {
    salis: "Lietuva",
    miestas: "Kaunas"
  },
  pomegiai: ['kartingai', 'krepšinis', 'kalnai', 'žygiai']
};
console.log(objektasDes);
// be destr
let objVardas = objektasDes.vardas;
let objMetai = objektasDes.amzius;
let objTeises = objektasDes.vairuotojoTeises !== undefined ? objektasDes.vairuotojoTeises : 'nežinom';
let objSalis = objektasDes.gyvenamojiVieta.salis;
let objPomegis1 = objektasDes.pomegiai[1];

console.log(objVardas, objMetai, objTeises, objSalis, objPomegis1);
// su destr
let { vardas, amzius:metai, vairuotojoTeises='nežinom', gyvenamojiVieta:{salis, ...restO}, pomegiai:{1:pomegis, ...restM}, ...restObj } = objektasDes;
console.log(vardas, metai, vairuotojoTeises, salis, pomegis, restObj, restO, restM);


//      PRAKTIKA
/*
  Parašyti ciklą, kuris atlieka Fizz Buzz testą nuo 1 iki 100. (for ir if)
    Fizz - jeigu skaičius yra 3 kartotinis/daliklis/dalijasi iš 3 be liekanos.
    Buzz - jeigu skaičius yra 5 kartotinis/daliklis/dalijasi iš 5 be liekanos.
    FizzBuzz - jeigu skaičius yra 3 ir 5 kartotinis/daliklis/dalijasi iš 3 ir 5 be liekanos.
    skaičius - kitais atvejais.
*/
console.groupCollapsed('fizzBuzz');
for(let i = 1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  } else if(i % 5 === 0){
    console.log('Buzz');
  } else if(i % 3 === 0){
    console.log('Fizz');
  } else {
    console.log(i);
  }
}
console.groupEnd();

/*
  Parašyti ciklą, kuris atrinktų ir į konsolę išspausdintų tik pirminius skaičius intervale nuo 2 iki 100. (for(for) ir if)
    Pirminis skaičius - dalinasi TIK iš savęs paties ir iš 1 be liekanos.
    pvz(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97)
*/
console.group('pirminiai');
console.time();
// iki 40000
// su sqrt default: 4.735107421875 ms
// su /2: 179.498046875 ms
// su break: 315.510986328125 ms
// be break: 3240.758056640625 ms
let pirminiuMasyvas = [];
for(let i = 2; i <= 40000; i++){
  let arPirminis = true;
  for(let j = 2; j <= Math.sqrt(i); j++){ // eis nuo 2 iki i 
    if(i % j === 0){ // dalins i iš j ir liekanos nėra, tai skaičius nėra pirminis
      // console.log(i, 'nėra pirminis');
      arPirminis = false;
      break;
    }
  }
  // tikrinant per pirminiu masyva (reikia pradėti nuo 3 turint masyve 2)
  // 32.260009765625 ms for of
  // 26.4970703125 ms for
  // 279.681884765625 ms forEach
  // 29.237060546875 ms some return ? true : false
  // 29.263916015625 ms every return ? false : true
  // pirminiuMasyvas.some(el => {
  //   if(i % el === 0){
  //     arPirminis = false;
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  if(arPirminis === true){
    // console.log(`${i} yra pirminis skaičius`);
    pirminiuMasyvas.push(i);
  }
  // else {
  //   console.log(`${i} nėra pirminis skaičius`);
  // }
}
console.timeEnd();
console.log(pirminiuMasyvas);
console.groupEnd();

