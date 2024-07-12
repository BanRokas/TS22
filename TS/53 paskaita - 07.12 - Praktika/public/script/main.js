"use strict";
const sec1 = document.querySelector('#basicDom');
!sec1 && console.warn('sec1 kintamasis yra null/undefine or w/e');
const par1 = document.createElement('p');
par1.textContent = 'Hello World!';
sec1 === null || sec1 === void 0 ? void 0 : sec1.appendChild(par1);
const img1 = document.createElement('img');
img1.setAttribute('src', 'https://m.media-amazon.com/images/I/714M217UvaL.jpg');
img1.setAttribute('alt', 'paveiksliuko mini aprašymas');
img1.classList.add('mediumImage');
sec1 === null || sec1 === void 0 ? void 0 : sec1.appendChild(img1);
const button1 = document.createElement('button');
button1.textContent = 'Click me';
button1.classList.add('eventButton');
button1.addEventListener('click', ((e) => {
    console.log(e);
}));
sec1 === null || sec1 === void 0 ? void 0 : sec1.appendChild(button1);
const form1 = document.querySelector('#foodForm');
form1 === null || form1 === void 0 ? void 0 : form1.addEventListener('submit', (e) => {
    e.preventDefault();
    const pavadinimoInput = document.querySelector('#foodForm #name');
    const reitingoInput = document.querySelector('#foodForm #rating');
    const nuotraukosInput = document.querySelector('#foodForm #photo');
    const formosDuomenys = {
        pavadinimas: pavadinimoInput.value,
        reitingas: reitingoInput.valueAsNumber,
        nuotrauka: nuotraukosInput.value
    };
    console.log(formosDuomenys);
});
