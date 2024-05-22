// prilyginimai
console.groupCollapsed('Prilyginimai');

let kintamasis = 'rytas';
console.log(kintamasis);
kintamasis = 10;
console.log(kintamasis); // 10
kintamasis++;
console.log(kintamasis); // 11
kintamasis+=5; // lygiai tas pats kaip ir kintamasis = kintamasis + 5;
console.log(kintamasis); // 16
kintamasis--;
console.log(kintamasis); // 15
kintamasis-=12;
console.log(kintamasis); // 3

console.groupEnd();

// palyginimai
console.groupCollapsed('palyginimai');

console.log('5 > 5', 5 > 5); // false
console.log('5 < 5', 5 < 5); // false
console.log('5 > 3', 5 > 3); // true
console.log('5 < 3', 5 < 3); // false
console.log('', 5 >= 5); // true
console.log('', 5 <= 5); // true
console.log('', 5 >= 3); // true
console.log('', 5 <= 3); // false
console.log('', 5 == 5); // true
console.log('', 5 == '5'); // true
console.log('', 5 === '5'); // false
console.log('', 5 != 5); // false
console.log('', 5 != '5'); // false
console.log('', 5 !== '5'); // true

console.groupEnd();

console.groupCollapsed('loginiai');

console.log('', true && true); // true
console.log('', false && true); // false
console.log('', true && false); // false
console.log('', false && false); // false

console.log('', false || false); // false
console.log('', true || false); // true
console.log('', false || true); // true
console.log('', true || true); // true

// console.log('', 5 >! 3); // negalima
// console.log('', 5 !> 3); // negalima
// console.log('', !5 > 3); // negalima
console.log('', !(5 > 3)); // false
console.log('', !true); // false
console.log('', !false); // true

console.groupEnd();

console.groupCollapsed('tipai');

console.log(typeof 5);
console.log(typeof '5');
console.log(typeof 'tekstas');
console.log(typeof true);

console.groupEnd();

// let amzius = 17;
// console.log('kodas prieš sąlygą');
// if(amzius >= 18){
//   console.log('Asmuo yra pilnametis.');
// } else {
//   console.log('Asmuo nėra pilnametis.');
// }
// console.log('kodas už sąlygos');

// let amzius = prompt('Koks tavo amžius?');
// if(amzius < 18){
//   console.log('Asmuo nėra pilnametis');
// } else if(amzius >= 65){
//   console.log('Asmuo yra pensininkas');
// } else if(amzius < 30){
//   console.log('Jaunas pilnametis');
// } else if(amzius >= 30){
//   console.log('Pagyvenes pilnametis');
// } else {
//   console.log('Neteisinga įvestis');
// }

// truthy falsy
// if(kintamasis){
//   console.log('truthy');
// } else {
//   console.log('falsy');
// }