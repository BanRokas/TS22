// Enum
enum DegaluTipai{
  BENZINAS = 'benzinas',
  DYZELINAS = 'dyzelinas',
  DUJOS = 'dujos',
  ELEKTRA = 'elektra'
};
type KuroTipai = 'benzinas' | 'dyzelinas' | 'dujos' | 'elektra';

const manoMasinosDegalai = DegaluTipai.BENZINAS;
console.log(manoMasinosDegalai);
const manoMasinosKuras:KuroTipai = 'dyzelinas';
console.log(manoMasinosKuras);

// Union
  // ARBA
let kintamasis: number | string = 654;
kintamasis = 'stringui';
// ARBA number ARBA string masyvas, ne kažkoks mix'as
let masyvas: number[] | string[] = ['a','b','c']; 
// norint mixed masyvo
let mixMas: (number | string)[] = ['a',2,'c'];
  // IR
let objektas: { vardas:string } & { amzius:number } = {
  vardas: 'Petras',
  amzius: 54
};