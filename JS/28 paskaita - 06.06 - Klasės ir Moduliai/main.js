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


class MovieTheater{
  constructor(rows, seatsPerRow){
    this.rows = rows;
    this.seatsPerRow = seatsPerRow;
    // this.seats = new Array(this.rows).fill(new Array(this.seatsPerRow).fill(false));
    this.seats = Array.from({ length: this.rows }, () => Array(this.seatsPerRow).fill(false));
    // this.seats = [];
    // while(this.rows--){
    //   this.seats.push(new Array(this.seatsPerRow).fill(false));
    // }
  }
  bookSeat(row, seat){
    if(this.seats[row-1][seat-1] === false){ // vieta laisva
      this.seats[row-1][seat-1] = true;
      console.log('Vieta 3:2 jums užrezervuota :)');
    } else { // vieta užimta
      console.log('Vieta 3:2 jau yra užrezervuota :(\nPrašome pasirinkti kitą vietą.');
    }
  }
}

const teatras = new MovieTheater(5, 3);
teatras.bookSeat(3,2);


/* 
  3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus ir savybes.
    3.1) Sukurkite papildomą savybę "coordinates" ir priskirkite jam "x" ir "y" reikšmes.
    3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).
  5) UI
*/

class PointDiv{
  constructor(point){
    this.point = point;
    return this.render();
  }
  
  smile(){
    console.log('smile :)');
  }
  render(){
    // console.log(this.point);
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const text1 = document.createTextNode('(x; y)');
    p1.appendChild(text1);
    const p2 = document.createElement('p');
    const text2 = document.createTextNode(this.point.coordinates);
    p2.appendChild(text2);
    div.append(p1, p2);
    div.addEventListener('click', () => this.smile());
    return div;
  }
}
class Option{
  constructor(point){
    this.point = point;
    return this.render();
  }
  render(){
    const option = document.createElement('option');
    const text = document.createTextNode(this.point.coordinates);
    option.setAttribute('value', [this.point.x, this.point.y]);
    option.appendChild(text);
    return option;
  }
}
class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.coordinates = `(${this.x}; ${this.y})`;
  }
  distance(point){
    return Math.hypot(this.x + point.x, this.y + point.y);
  }
}
const addOptions = (point) => {
  const option1 = new Option(point);
  const option2 = new Option(point);

  document.querySelector('form#atstumuSkaiciavimas select#pointA').appendChild(option1);
  document.querySelector('form#atstumuSkaiciavimas select#pointB').appendChild(option2);
}

const points = [
  new Point(0, 0),
  new Point(0, 3),
  new Point(4, 0),
  new Point(9, 5),
  new Point(12, 4),
  new Point(8, 3)
];

points.forEach(point => {
  const pointElement = new PointDiv(point);
  // console.log(point);

  document.querySelector('#taskai').appendChild(pointElement);

  addOptions(point);
});

document
  .querySelector('form#kurtiTaska')
  .addEventListener('submit', e => {
    e.preventDefault();
    const x = e.target.elements.coordX.valueAsNumber;
    const y = e.target.elements.coordY.valueAsNumber;

    const point = new Point(x, y);
    const pointElement = new PointDiv(point);
    document.querySelector('#taskai').appendChild(pointElement);
    points.push(point);

    addOptions(point);

    e.target.reset();
  });

document
  .querySelector('form#atstumuSkaiciavimas')
  .addEventListener('submit', e => {
    e.preventDefault();
    const pointA = e.target.elements.pointA.value.split(',');
    const pointB = e.target.elements.pointB.value.split(',');
    // console.log(pointA, pointB);
    const distance = Math.hypot(
      pointA[0] - pointB[0],
      pointA[1] - pointB[1]
    ).toFixed(2);
    // console.log(distance);

    const p = document.createElement('p');
    // const text = document.createTextNode(
    //   `Distance between Point in position (${pointA}) and Point in position (${pointB}) is ${distance}.`
    // );
    const span = document.createElement('span');
    span.classList.add('evil');
    const text0 = document.createTextNode(
      `Point A (${pointA[0]};${pointA[1]})__________`
    );
    const text1 = document.createTextNode(
      `distance:${distance}`
    );
    const text2 = document.createTextNode(
      `__________(${pointB[0]};${pointB[1]}) Point B`
    );
    span.appendChild(text1);
    p.append(text0, span, text2);
    document.querySelector('#atstumai').appendChild(p);

    e.target.reset();
  });