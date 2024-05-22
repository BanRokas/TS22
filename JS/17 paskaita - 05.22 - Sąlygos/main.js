console.group('Prilyginimai');

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