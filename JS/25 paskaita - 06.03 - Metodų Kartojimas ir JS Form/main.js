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

// FORM
document
  .querySelector('#testForm')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    // BLOGAI, nes eiliškumas gali lengvai pakisti
    // const vardas = event.target[0].value;
    // const nuotrauka = event.target[1].value;
    // const dob = event.target[2].value;
    // const amzius = event.target[3].valueAsNumber;
    // console.log(vardas, nuotrauka, dob, amzius);

    // nėra gerai, nes vis per naują kreiptis į dokumentą nėra gerai
    // const vardas = document.querySelector('#userName').value;
    // const nuotrauka = document.querySelector('#userPhoto').value;
    // const dob = document.querySelector('#userDOB').value;
    // const amzius = document.querySelector('#userAge').valueAsNumber;
    // console.log(vardas, nuotrauka, dob, amzius);

    // geras :)
    // const vardas = event.target.elements.userName.value;
    // const nuotrauka = event.target.elements.userPhoto.value;
    // const dob = event.target.elements.userDOB.value;
    // const amzius = event.target.elements.userAge.valueAsNumber;
    // const lytis = event.target.elements.userSex.value;
    // const batai = [];
    // event.target.elements.userBoots.forEach(el => el.checked && batai.push(el.value));
    // // jeigu select neturi multiple atributo, su juo elgiamės kaip su radio input. Jeigu turi multiple atributą, elgiamės kaip su checkbox, bet vietoj forEach naudoti for of
    // const muzika = event.target.elements.userMusicTaste.value;
    // console.log(vardas, nuotrauka, dob, amzius, lytis, batai, muzika);
    const ete = event.target.elements; // trumpinti event.target.elements (galima ir aukščiau esančiam)
    // viską turėti objekte
    const formosReiksmes = {
      vardas: ete.userName.value,
      nuotrauka: ete.userPhoto.value,
      dob: ete.userDOB.value,
      amzius: ete.userAge.valueAsNumber,
      lytis: ete.userSex.value,
      batai: [],
      muzika: ete.userMusicTaste.value
    }
    ete.userBoots.forEach(el => el.checked && formosReiksmes.batai.push(el.value));
    console.log(formosReiksmes);

    // nesiūlau destruktūrizuoti
    // const { userName:vardas, userPhoto, userDOB, userAge, userSex, userMusicTaste:muzika } = ete;
    // console.log(vardas, userDOB, userAge, muzika, userPhoto, userSex);
  });