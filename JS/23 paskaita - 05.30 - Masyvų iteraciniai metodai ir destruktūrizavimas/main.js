let zodziuMasyvas = ['suka', 'ciklą', 'per', 'visą', 'masyvą', 'ir', 'kiekvienos', 'iteracijos', 'metu', 'TIKTAI', 'atlieka', 'kažkokius', 'veiksmus', 'su', 'elementu'];
let skaiciuMasyvas = [5,4,981,981,98,15,1,681,61,6,-4,-115,51,-1,0,111,-99];

console.groupCollapsed('for each');
skaiciuMasyvas.forEach((skaicius, indeksas) => console.log(indeksas, skaicius*indeksas));
console.log('------------');
zodziuMasyvas.forEach(zodis => console.log(zodis));
console.groupEnd();

