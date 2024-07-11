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