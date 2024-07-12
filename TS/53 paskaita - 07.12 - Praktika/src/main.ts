const sec1: HTMLElement | null = document.querySelector('#basicDom');
!sec1 && console.warn('sec1 kintamasis yra null/undefine or w/e');
console.log(sec1);

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

