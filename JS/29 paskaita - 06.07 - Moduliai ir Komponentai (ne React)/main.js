import Par from "./moduliai/Paragraph.js";
import Card from "./moduliai/Card.js";
import rnmto, { randomColor as rc, sudetis as plus } from "./moduliai/helperFunc.js";

const divOutput = document.querySelector('#komponentuPvz');

// const par = document.createElement('p');
// par.textContent = 'Labas rytas';
// const par0 = document.createElement('p');
// par0.textContent = 'Pietų metas kada?';
// const par1 = document.createElement('p');
// par1.textContent = 'Mama, noriu miegot :(';

const par = new Par('Labas rytas');
const par0 = new Par('Pietų metas kada?');
const par1 = new Par('Mama, noriu miegot :(');

divOutput.appendChild(par);
divOutput.appendChild(par0);
divOutput.appendChild(par1);

console.log(rc());
console.log(plus(5, 4));
console.log(rnmto(999));

// const cardDiv0 = new Card('title','url', 'alt', 'par');
const cardDiv0 = new Card({
  title: 'Senbernaras',
  image: {
    url: 'https://a-z-animals.com/media/2023/05/shutterstock-131725145-huge-licensed-scaled.jpg',
    alt: 'a goodiest boi'
  },
  paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maiores accusamus, deserunt adipisci esse vero libero. Dicta est quibusdam eius?'
});
const cardDiv1 = new Card({
  title: 'Senbernaras2',
  image: {
    url: 'https://a-z-animals.com/media/2023/05/shutterstock-131725145-huge-licensed-scaled.jpg',
    alt: 'a goodiest boi'
  },
  paragraph: 'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Explicabo maiores accusamus, deserunt adipisci esse vero libero. Dicta est quibusdam eius?'
});
console.log(cardDiv0);

const cardsSection = document.querySelector('#cards');
cardsSection.append(cardDiv0, cardDiv1);