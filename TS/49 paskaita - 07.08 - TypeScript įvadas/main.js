"use strict";
console.log('Hello world!');
let vardas = 'Rokas';
let alkanas = false;
// let kazkas; // blogai, reikia nurodyti tipą
let kazkas;
kazkas = 'haha';
// kazkas = 65; // error, negalime priskirti kitokio tipo
let amzius; // galime priskirti kelis tipus
amzius = 654;
amzius = 'dvidešimt';
// amzius > 18 ? 'pilnametis' : 'nepilnametis'; // error, nes negalima string lyginti su number
if (typeof amzius === 'number') {
    amzius > 18 ? 'pilnametis' : 'nepilnametis';
}
const skaiciuotuvas = (sk1, sk2, veiksmas) => {
    switch (veiksmas) {
        case 'sudetis':
            return sk1 + sk2;
        case 'atimtis':
            return sk1 - sk2;
        case 'daugyba':
            return sk1 * sk2;
        case 'dalyba':
            if (sk2 === 0) {
                return 'Dalyba iš nulio negalima.';
            }
            return sk1 / sk2;
        default:
            return 'Veiksmas nurodytas neteisingas.';
    }
};
console.log(skaiciuotuvas(5, 0, 'dalyba'));
