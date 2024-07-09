console.log('hello world');
// overdone assignment
let vardas:string = 'Rokas';
// good assignment
let vardas0 = 'Rokas';

// Arrays
// not Tuple, but string array
let asmuo = ['vardas', 'pavarde'];
// Tuples
let asmuo0: [string, string] = ['vardas', 'pavarde'];
let asmuo1: [string, string];
asmuo1 = ['vardas', 'pavarde'];
let trysPomegiai: [string, string, string] = ['1','2','3'];
// asmuo2 susideda iš: vardo, pavardės, amžiaus ir arAlkanas
let asmuo2: [string, string, number, boolean] = ['Rokas', 'Banaitis', 27, false];

// Array
// string'ų masyvas
let masina0: string[] = ['Fiat', 'Punto', 'mėlyna', 'benzinas'];
// string'ų masyvas
let masina00: Array<string> = ['Fiat', 'Punto', 'mėlyna', 'benzinas'];
// number masyvas arba string masyvas
let masina1: string[] | number[] = ['Fiat', 'Punto', 'mėlyna', 'benzinas'];
// masyvas susidedantis iš string ir/arba number
let masina2: (string | number)[] = ['Fiat', 'Punto', 'mėlyna', 'benzinas', 2002];
// tikrai nereikia atsiminti
let matrica: number[][] = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

// Objects
  // simple but not used
  let vartotojas = {
    email: '',
    username: '',
    isAdmin: false,
    creditCard: 64516159191
  }
// type
  // sukurimas
  type vartotojoTipas = {
    email: string,
    username: string,
    isAdmin?: boolean,
    creditCard: number | string
  };
  // panaudojimas
  let vartotojas0: vartotojoTipas = {
    email: 'a@a',
    username: 'kebab',
    creditCard: "651165"
  }
  vartotojas0.isAdmin = false;
// interface
  // sukurimas
  interface Auto{
    marke: string,
    modelis: string,
    metai: number,
    arNauja: boolean,
    kuras: "benzinas" | "dyzelis" | "elektra" | "hibridas"
  };
  // panaudojimas
  let automobilis: Auto = {
    marke: "Audi",
    modelis: "TT",
    metai: 2015,
    arNauja: false,
    kuras: "hibridas"
  };