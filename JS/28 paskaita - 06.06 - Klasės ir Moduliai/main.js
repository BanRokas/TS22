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