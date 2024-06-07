import Par from "./moduliai/Paragraph.js";
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