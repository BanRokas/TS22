import Calculator from "./modules/Calculator.js";

const calcInHTML = document.querySelector('div.calculator');

const calculator = new Calculator(calcInHTML);

console.log(calculator);


// calculator.calculator.children[1].querySelectorAll('[data-number]').forEach(el => el.addEventListener('click', () => calculator.addNumber(el.dataset.number)));
[...calculator.calculator.children[1].children].forEach(el => el.dataset.number && el.addEventListener('click', () => calculator.addNumber(el.dataset.number)));

calculator.calculator.children[1].querySelectorAll('[data-action]').forEach(el => el.addEventListener('click', () => calculator.addAction(el.dataset.action)));

calculator.calculator.children[1].querySelector('[data-calculate]').addEventListener('click', () => calculator.calculate());

calculator.calculator.children[1].querySelector('[data-delVisual]').addEventListener('click', () => calculator.delete('visual'));
calculator.calculator.children[1].querySelector('[data-delAll]').addEventListener('click', () => calculator.delete('all'));
calculator.calculator.children[1].querySelector('[data-delLast]').addEventListener('click', () => calculator.delete('last'));

calculator.calculator.children[1].querySelector('[data-sign]').addEventListener('click', () => calculator.toggleSign());