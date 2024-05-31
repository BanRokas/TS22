let masyvasDes = ['labas', 24, undefined, false, 5, 'zodis', 5, 6, 8];
console.log(masyvasDes);
// be destr
let el0 = masyvasDes[0];
let el1 = masyvasDes[1];
let el2 = masyvasDes[2] !== undefined ? masyvasDes[2] : 'default reikšmė';
let el3 = masyvasDes[4];
let elRest = masyvasDes.slice(5);

console.log(el0, el1, el2, el3, elRest);
// su dest
let [ed0, ed1, ed2 = 'default reikšmė', , ed3, ...edRest] = masyvasDes;
console.log(ed0, ed1, ed2, ed3, edRest);