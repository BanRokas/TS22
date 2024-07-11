//      Interface vs Type
// 1
// interface
  interface pirmas{
    raktas: number,
    kitas: string,
    metodas: () => {}
  }
  // interface antras = number; // error
  // interface trecias { number }
// type
  type vienas = number;
  type du = string | 2;
  type trys = boolean;
  type keturi = {
    raktais: number | string,
    metodais: () => {}
  }
  type penki = string[];
  type sesi = (a:number, b:string) => string[];
  // ir taip toliau...
// 2
// interface
  interface Animal {
    name: string;
  }

  interface Bear extends Animal {
    honey: boolean;
  }
  // const bear = new Bear();
  // bear.name;
  // bear.honey;
// type
  type Animal0 = {
    name: string;
  }
  type AddHoney = { 
    honey: boolean;
  }
  type Bear0 = AddHoney & Animal0;
  // const bear0 = new Bear0();
  // bear0.name;
  // bear0.honey;
// 3
// interface
  interface LabasRytas{
    tekstas: string;
  }
  interface LabasRytas{
    vardas: string
  }
  const pasisveikinti:LabasRytas = {
    tekstas: 'Labas rytas',
    vardas: 'Rokas'
  };
// type
  type LabasVakaras = {
    tekstas: string
    vardas: string // grįžti ir papildai
  }
  // type LabasVakaras = {
  //   vardas: string
  // }
  const pasisveikinti0:LabasVakaras = {
    tekstas: 'Labas vakaras',
    vardas: 'Rokas'
  };
// 4
// type
  type StringOrNumber = {
    skaicius : number
  } | {
    tekstas: string
  }
  const kazkas0: StringOrNumber = {
    skaicius: 5
  }
  const kazkas01: StringOrNumber = {
    tekstas: 'labas'
  }
// interface
  // interface StringOrNumber1 {
  //   skaicius : number
  // } | {
  //   tekstas: string
  // }
  interface Stringas {
    tekstas: string
  }
  interface Numberis {
    skaicius: number
  }
  const kazkas: Stringas | Numberis = {
    tekstas: 'labas'
  }
  const kazkas1: Stringas | Numberis = {
    skaicius: 654
  };

//    Generics
let arg = true;
function identity(par: any): any {
  return par+'hihi';
}
console.log(typeof identity(arg));

function identity0<Type>(par: Type):Type{
  return par;
}
console.log(typeof identity0(arg));


interface TuriIlgi{
  length: number
  vardas: string
}
function genericMagic<T extends TuriIlgi>(par:T):T[]{
  console.log(par.length); // length reiksme
  console.log(par.vardas.length); // vardo ilgi
  return [par];
}
genericMagic({
  vardas: 'Rokas',
  length: 49411
});

function nonGeneric(par: number | string ): string | number{
  console.log(typeof par);
  if(typeof par === 'string'){
    return 'par';
  } else {
    return 654;
  }
}
nonGeneric('labas rytas');