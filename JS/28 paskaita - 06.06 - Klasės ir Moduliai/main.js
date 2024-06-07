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

// CAO 15 Automobilis

class Car{
  constructor(brand, model, engine){
    this.brand = brand;
    this.model = model;
    this.engine = engine;
  }
  turnOn(){
    console.log('vrooom');
  }
}

const cars = [
  new Car('Volkswagen', 'Golf', 1.6),
  new Car('BMW', '8', 2)
];
console.log(cars[0]);
cars[0].turnOn();


// CAO 16 Bibliotekos Valdymo Sistema
class Book{
  constructor(title, author, year){
    this.id = Math.ceil(Math.random()*1000000000000).toString();
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary(){
    return `${this.title} by ${this.author} was published in ${this.year}.`;
  }
}

const books = [
  new Book('Harry Potter', 'J.K.Rowling', 1997),
  new Book('Harry Potter', 'J.K.Rowling', 1997),
  new Book('Harry Potter', 'J.K.Rowling', 1997),
  new Book('Harry Potter', 'J.K.Rowling', 1997),
  new Book('Lord of the Rings', 'J.R.R.Tolkien', 1954),
  new Book('Lord of the Rings', 'J.R.R.Tolkien', 1954),
  new Book('Lord of the Rings', 'J.R.R.Tolkien', 1954)
];

class Library{
  constructor(){
    this.borrowers = [{userName:'Jonas', borrowedBooks:[54,12]},{userName:'Ugnė', borrowedBooks:[54,12]}]; // [{userName:'Petras', borrowedBooks:[id, id, id]}]
    this.books = [];
  }
  addBook(book){
    this.books.push({ ...book, available: true });
  }
  listAvailableBooks(){
    return this.books;
  }
  lendBook(bookTitle, userName){
    // tikriname ar yra bent viena knyga su tokiu pavadinimu, kurią galime skolinti
    if(this.books.some(book => book.title === bookTitle && book.available === true)){
      console.log('rado');
      const bookIdToGive = this.books.find(book => book.title === bookTitle && book.available === true).id;
      console.log(bookIdToGive);
      // priskiriame knygos ID skolininkui
      if(this.borrowers.some(borrower => borrower.userName === userName)){
        console.log('vartotojas yra');
        // sukame ciklą per visus skolininkus ir jeigu tai yra tas skolininkas, jo skolintų knygų masyvą grąžiname papildytą, jeigu ne tas, grąžina nekeistą
        this.borrowers = this.borrowers.map(borrower => {
          if(borrower.userName === userName){
            return {
              userName: borrower.userName,
              borrowedBooks: [...borrower.borrowedBooks, bookIdToGive]
            }
          } else {
            return borrower;
          }
        });
      } else {
        console.log('vartotojo nera');
        this.borrowers = [...this.borrowers, { 
          userName: userName, borrowedBooks:[bookIdToGive]
        }];
      }
      // pakeičiame skolintos knygos availability
      const indexOfBookToChangeAvailability = this.books.findIndex(book => book.id === bookIdToGive);
      this.books[indexOfBookToChangeAvailability] = { ...this.books[indexOfBookToChangeAvailability], available: false };
    } else {
      console.log('Atsiprašome, šiuo metu neturime knygos ' + bookTitle + '.');
    }
  }
}

const library = new Library();
books.forEach(book => library.addBook(book));
console.log(library);
console.log(library.listAvailableBooks());
library.lendBook('Harry Potter', 'Petras');