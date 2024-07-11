"use strict";
const pasisveikinti = {
    tekstas: 'Labas rytas',
    vardas: 'Rokas'
};
const pasisveikinti0 = {
    tekstas: 'Labas vakaras',
    vardas: 'Rokas'
};
const kazkas0 = {
    skaicius: 5
};
const kazkas01 = {
    tekstas: 'labas'
};
const kazkas = {
    tekstas: 'labas'
};
const kazkas1 = {
    skaicius: 654
};
let arg = true;
function identity(par) {
    return par + 'hihi';
}
console.log(typeof identity(arg));
function identity0(par) {
    return par;
}
console.log(typeof identity0(arg));
function genericMagic(par) {
    console.log(par.length);
    console.log(par.vardas.length);
    return [par];
}
genericMagic({
    vardas: 'Rokas',
    length: 49411
});
function nonGeneric(par) {
    console.log(typeof par);
    if (typeof par === 'string') {
        return 'par';
    }
    else {
        return 654;
    }
}
nonGeneric('labas rytas');
