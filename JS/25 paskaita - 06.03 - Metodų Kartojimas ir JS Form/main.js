// ciklai
let arr = [1,561,61,9681,6,16,135,168,16,1,1,351,2.1,3561,350];

for(let i = 0; i < 11; i++){

}
// su for sąlyga reikia akcentuoti 2 dalykus. 1) Ar pirmosios iteracijos sąlyga yra tiesa. 2) Ar skaitiklio kitimas artina sąlygą prie melo.

// Dažniausiai pasikartojantis
let masyvas = [3, 7, 3, 1, 12, 4, 12, 5, 12, 1,1, 1, 3];

const findMostFrequent = arr => {
  console.log(arr);
  // raktas - duomuo, kurio kartojimą skaičiuojame; reikšmė - pasikartojimų kiekis.
  let kartojimasis = {};
  let daugiausiaiKartu = 0;
  let dazniausiai = [];

  for(let i = 0; i < arr.length; i++){
    // console.log("iteracija:", i+1);
    // console.log("reiksmė:", arr[i]);
    // console.log("objektas", kartojimasis);
    kartojimasis[arr[i]] = ( kartojimasis[arr[i]] || 0 ) + 1;
    // console.log('daugiausiaiKartu pries',daugiausiaiKartu);
    // console.log('dazniausiai pries',dazniausiai);
    if(daugiausiaiKartu < kartojimasis[arr[i]]){
      daugiausiaiKartu = kartojimasis[arr[i]]; // kiek kartų kartojasi
      dazniausiai = []; // kas toks kartojasi
      dazniausiai[0] = arr[i]; // kas toks kartojasi
    } else if(daugiausiaiKartu === kartojimasis[arr[i]]){
      dazniausiai = [...dazniausiai, arr[i]];
    }
    // console.log('daugiausiaiKartu po',daugiausiaiKartu);
    // console.log('dazniausiai po',dazniausiai);
    // console.log("objektas po:", kartojimasis);
    // console.log("--------------------");
  }

  return dazniausiai;
}

console.log(findMostFrequent(masyvas));