let masyvasDes = ['labas', 24, undefined, [false, 5], 'zodis', 5, 6, 8];
console.log(masyvasDes);
// be destr
let el0 = masyvasDes[0];
let el1 = masyvasDes[1];
let el2 = masyvasDes[2] !== undefined ? masyvasDes[2] : 'default reikšmė';
let el3 = masyvasDes[4];
let elRest = masyvasDes.slice(5);

console.log(el0, el1, el2, el3, elRest);
// su dest
let [ed0, ed1, ed2 = 'default reikšmė', [ed3, ed4], ...edRest] = masyvasDes;
console.log(ed0, ed1, ed2, ed3, ed4, edRest);

let objektasDes = {
  vardas: "Kazys",
  amzius: 55,
  pavarges: true,
  batuDydis: 45,
  vairuotojoTeises: undefined,
  gyvenamojiVieta: {
    salis: "Lietuva",
    miestas: "Kaunas"
  },
  pomegiai: ['kartingai', 'krepšinis', 'kalnai', 'žygiai']
};
console.log(objektasDes);
// be destr
let objVardas = objektasDes.vardas;
let objMetai = objektasDes.amzius;
let objTeises = objektasDes.vairuotojoTeises !== undefined ? objektasDes.vairuotojoTeises : 'nežinom';
let objSalis = objektasDes.gyvenamojiVieta.salis;
let objPomegis1 = objektasDes.pomegiai[1];

console.log(objVardas, objMetai, objTeises, objSalis, objPomegis1);
// su destr
let { vardas, amzius:metai, vairuotojoTeises='nežinom', gyvenamojiVieta:{salis, ...restO}, pomegiai:{1:pomegis, ...restM}, ...restObj } = objektasDes;
console.log(vardas, metai, vairuotojoTeises, salis, pomegis, restObj, restO, restM);