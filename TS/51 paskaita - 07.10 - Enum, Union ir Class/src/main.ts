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
console.log(kintamasis);
// ARBA number ARBA string masyvas, ne kažkoks mix'as
let masyvas: number[] | string[] = ['a','b','c']; 
console.log(masyvas);
// norint mixed masyvo
let mixMas: (number | string)[] = ['a',2,'c'];
console.log(mixMas);
// IR
let objektas: { vardas:string } & { amzius:number } = {
  vardas: 'Petras',
  amzius: 54
};
console.log(objektas);