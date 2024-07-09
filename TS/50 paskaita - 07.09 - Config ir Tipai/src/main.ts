console.log('hello world');
// overdone assignment
let vardas:string = 'Rokas';
// good assignment
let vardas0 = 'Rokas';

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