// Kintamieji
let zodis = 'zodis kažkoks';
const raideA = 'A';
const raideB = "B";
const raideC = `B`;

let skaicius = 654;
const suma = 654+666;
const skirtumas = suma-skaicius;

let tiesa = true;
const melas = false;

// Duomenų struktūros
const asmuo = {
  vardas: "Rokas",
  pavarde: "Banaitis",
  amzius: 27,
  alkanas: true,
  hobiai: ['dviraičiai', 'žaidimai'],
  hobiaiIssamiai: [
    {
      pavadinimas: 'Dviračiai',
      paaiskinimas: 'Važinėti dviračiais',
      kiekLaikoUzsiema: '5 metai'
    }
  ],
  darboviete:{
    imone:'',
    adresas:'',
    uzdarbis: 654,
  }
};
const asmenys = [
  {
    vardas: "Rokas",
    pavarde: "Banaitis",
    amzius: 27,
    alkanas: true
  },{
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 10,
    alkanas: false
  },{
    vardas: "Petras",
    pavarde: "Petraitis",
    amzius: 60,
    alkanas: true
  }
];

// Operatoriai
5 == '5' // true
5 === '5' // false
skaicius = skaicius + 10; // long
skaicius += 10; // short

// Sąlygos
if(true){
  // vyksta
} else {
  // nevyksta
}

// Ciklai


// Funkcijos
function funcVardas(index){
  const abc = ['a','b','c'];
  console.log(abc[index]);
}
funcVardas(1);
const funcVardas0 = function(){
  console.log('bevarde simple', abc);
}
const funcVardas1 = () => {
  console.log('bevarde arrow');
}
const funcVardas2 = (par1, par2) => {
  return par1 + par2;
}
const funcAts = funcVardas2(5, 6);
console.log(funcAts);
console.log(funcVardas2(2, 1));

// Metodai
Math.random(); // duomens tipo metodas (statinis)
'tekstas'.slice(); // duomens metodas (prototipinis)

// Forma
// document
//   .querySelector('formSelector')
//   .addEventListener('submit', e => {
//     // neleidžiame numatytojo
//     e.preventDefault();
//     // susirenkame reikšmes
//     const formosReiksmes = {
//       pirmaReiksme: document.querySelector('formisInputoSelector').value,
//       antraReiksme: e.target.elements.inputNameOrId.value
//     }
//     // arba
//     const formosReiksmesWillNeedUpdate = new FormData(e.target);
//     formosReiksmesWillNeedUpdate = formosReiksmesWillNeedUpdate.map((value, key) => { 
//       return { [key]: value}
//     });
//   });

// DOM

// Klasės
class KlasesVardas{
  constructor(pilnasVardas){
    this.vardas = pilnasVardas.slice(0, pilnasVardas.indexOf(' '));
    this.pavarde = pilnasVardas.slice(pilnasVardas.indexOf(' ')+1);
  }
  sveikinasiSu(vardas){
    return this.vardas + ' sako labas ' + vardas;
  }
  static statinisMetodas(sk){
    return 'kazkas nesusije su konstruktoriumi'.repeat(sk);
  }
}
const klasesTest = new KlasesVardas('Petras Petrauskas');
const klasesTest0 = new KlasesVardas('As Kas');
console.log(klasesTest, klasesTest0);
console.log(klasesTest.sveikinasiSu('Rokas'));
console.log(KlasesVardas.statinisMetodas(5));