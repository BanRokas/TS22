import FoodCard from "./FoodCard.js";

// basics
const sec1: HTMLElement | null = document.querySelector('#basicDom');
!sec1 && console.warn('sec1 kintamasis yra null/undefined or w/e');
// console.log(sec1);

const par1: HTMLParagraphElement = document.createElement('p');
par1.textContent = 'Hello World!';
sec1?.appendChild(par1);

const img1: HTMLImageElement = document.createElement('img');
img1.setAttribute('src','https://m.media-amazon.com/images/I/714M217UvaL.jpg');
img1.setAttribute('alt', 'paveiksliuko mini aprašymas');
img1.classList.add('mediumImage');
sec1?.appendChild(img1);

const button1: HTMLButtonElement = document.createElement('button');
button1.textContent = 'Click me';
button1.classList.add('eventButton');
button1.addEventListener('click', ((e: MouseEvent) => {
  console.log(e);
}));
sec1?.appendChild(button1);

// section 2
type MaistoFormosDuomenys = {
  pavadinimas: string,
  reitingas: number,
  nuotrauka: string
}
// form
const form1: HTMLFormElement | null = document.querySelector('#foodForm');
form1?.addEventListener('submit', ( e: SubmitEvent ) => {
  e.preventDefault();

  const pavadinimoInput = document.querySelector('#foodForm #name') as HTMLInputElement;
  const reitingoInput = document.querySelector('#foodForm #rating') as HTMLInputElement;
  const nuotraukosInput = document.querySelector('#foodForm #photo') as HTMLInputElement;

  const formosDuomenys: MaistoFormosDuomenys = {
    pavadinimas: pavadinimoInput.value,
    reitingas: reitingoInput.valueAsNumber,
    nuotrauka: nuotraukosInput.value
  }
  console.log(formosDuomenys);
  const foodCardDiv = new FoodCard(formosDuomenys).render();

  document.querySelector('#output')?.appendChild(foodCardDiv);
});