const asmuo0 = {
  vardas: "Rokas",
  pavarde: "Banaitis",
  amzius: 27,
  arMiega: false
};
const asmuo1 = {
  vardas: "Petras",
  pavarde: "Petraitis",
  amzius: 30,
  arMiega: true
};
console.log(asmuo0, asmuo1);

class Asmuo{
  #vardas; #pavarde;
  constructor(vardas, pavarde, amzius){
    this.#vardas = vardas;
    this.#pavarde = pavarde;
    this.amzius = amzius;
    this.pilnasVardas = this.#vardas + ' ' + this.#pavarde;
    this.arMiega = false;
    this.dob = new Date().getFullYear() - this.amzius;
    this.incialai = `${this.#vardas[0]}.${this.#pavarde[0]}.`;
  }
  pasisveikinaSu(vardas){
    return `${this.#vardas} sveikinasi su ${vardas}`;
  }
  getVardas(){
    return this.#vardas;
  }
  setVardas(naujasVardas){
    this.#vardas = naujasVardas;
  }
  static helloWorld(par1){
    return `Hello world with parameter: ${par1}`;
  }
}
const asmuo2 = new Asmuo('Jonas', 'Jonaitis', 32);
const asmuo3 = new Asmuo('Kazys', 'Kazaitis', 50);
console.log(asmuo2, asmuo3);
console.log(asmuo2.pasisveikinaSu('Onute'));
// console.log(asmuo2.#vardas);
console.log(asmuo2.getVardas());
console.log(asmuo3.pasisveikinaSu('Ieva'));
// console.log(asmuo3.pasisveikinaSu(asmuo2.#vardas));
console.log(asmuo3.pasisveikinaSu(asmuo2.getVardas()));

class Knyga{
  // constructor(pavadinimas, autorius, leidimoMetai){
  //   this.pavadinimas = pavadinimas;
  //   this.autorius = autorius;
  //   this.leidimoMetai = leidimoMetai;
  // }
  // constructor(knygosObjektas){
  //   this.pavadinimas = knygosObjektas.pavadinimas;
  //   this.autorius = knygosObjektas.autorius;
  //   this.leidimoMetai = knygosObjektas.leidimoMetai;
  // }
  constructor({ pavadinimas, autorius, leidimoMetai }){
    this.pavadinimas = pavadinimas;
    this.autorius = autorius;
    this.leidimoMetai = leidimoMetai;
    // this.knygosAmzius = new Date().getFullYear() - this.leidimoMetai;
  }
  getKnygosAmzius(){
    return new Date().getFullYear() - this.leidimoMetai;
  }
}

// const knyga0 = new Knyga('Harry Potter', 'J.K.Rowling', 1997);
// const knyga1 = new Knyga('Lord of the Rings', 'J.R.R.Tolkien', 1954);

// const knygos = [
//   new Knyga('Harry Potter', 'J.K.Rowling', 1997),
//   new Knyga('Lord of the Rings', 'J.R.R.Tolkien', 1954)
// ];

// const knyga0 = new Knyga(knyguSaugykla[0]);
// console.log(knyga0);

// const knygos = [
//   new Knyga(knyguSaugykla[0]),
//   new Knyga(knyguSaugykla[1])
// ];
// console.log(knygos[0]);
// console.log(knygos[1]);

const knygos = knyguSaugykla.map(el => new Knyga(el));
console.log(knygos);