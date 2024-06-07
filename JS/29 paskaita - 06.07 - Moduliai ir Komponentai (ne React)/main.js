import Paragraph from "./moduliai/Paragraph.js";
import { randomColor, sudetis } from "./moduliai/helperFunc.js";

const divOutput = document.querySelector('#komponentuPvz');

// const par = document.createElement('p');
// par.textContent = 'Labas rytas';
// const par0 = document.createElement('p');
// par0.textContent = 'Pietų metas kada?';
// const par1 = document.createElement('p');
// par1.textContent = 'Mama, noriu miegot :(';

const par = new Paragraph('Labas rytas');
const par0 = new Paragraph('Pietų metas kada?');
const par1 = new Paragraph('Mama, noriu miegot :(');

divOutput.appendChild(par);
divOutput.appendChild(par0);
divOutput.appendChild(par1);

console.log(randomColor());
console.log(sudetis(5, 4));