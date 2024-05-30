let zodziuMasyvas = ['suka', 'ciklą', 'per', 'visą', 'MaSyVą', 'ir', 'kiekvienos', 'iteracijos', 'metu', 'TIKTAI', 'atlieka', 'kažkokius', 'veikSMUs', 'su', 'elementu'];
let skaiciuMasyvas = [5,4,981,981,98,15,1,681,61,6,-4,-115,51,-1,0,111,-99];

console.groupCollapsed('for each');
skaiciuMasyvas.forEach((skaicius, indeksas) => console.log(indeksas, skaicius*indeksas));
console.log('------------');
zodziuMasyvas.forEach(zodis => console.log(zodis));
console.groupEnd();

let filtruotas = skaiciuMasyvas.filter(skaicius => {
  if(skaicius > 100){
    return skaicius;
  }
});
let filtruotasShorter = skaiciuMasyvas.filter(skaicius => skaicius > 100);
console.log(filtruotas, filtruotasShorter);

let mutuotasLong = zodziuMasyvas.map(zodis => {
  if(zodis.length > 3){
    return zodis[0].toUpperCase() + zodis.slice(1).toLowerCase() + " :)";
  } else {
    return zodis;
  }
});
let mutuotas = zodziuMasyvas.map(zodis => zodis.length > 3 ? zodis[0].toUpperCase() + zodis.slice(1).toLowerCase() + " :)" : zodis);
let mutuotasDifficult = zodziuMasyvas.map(zodis => {
  return {
    pavadinimas: zodis[0].toUpperCase() + zodis.slice(1).toLowerCase(),
    skaicius: Math.floor(Math.random()*99)
  }
}).filter(el => el.skaicius > 50);
console.log(mutuotasLong, mutuotas, mutuotasDifficult);

// ['suka', 'ciklą', 'per', 'visą', 'MaSyVą', 'ir', 'kiekvienos', 'iteracijos', 'metu', 'TIKTAI', 'atlieka', 'kažkokius', 'veikSMUs', 'su', 'elementu'];
let reduceintas = zodziuMasyvas.reduce((acc, curr)=> acc+' '+curr);
let reduceintas2 = zodziuMasyvas.reduce((acc, curr)=> {
  if(curr.length > 5){
    return acc+' '+'_'+curr.slice(1, -1)+'_';
  } else {
    return acc;
  }
}, '').trimStart()+'.';
console.log(reduceintas);
console.log(reduceintas2);
let reduceNr = skaiciuMasyvas.reduce((acc, curr) => curr !== 0 ? acc*curr : acc);
console.log(reduceNr);

let arBentVienasNeigiamas = skaiciuMasyvas.some((el, i) => {
  console.log(i, el);
  return el < 0;
});
let arVisiTeigiami = skaiciuMasyvas.every((el, i) => {
  console.log(i, el);
  return el > 0;
});