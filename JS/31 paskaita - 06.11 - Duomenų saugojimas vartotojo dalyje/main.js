// Cookies
// susikurti cookies
document.cookie = `name='value'`;
document.cookie = `vardas="Rokas"`;
document.cookie = `amzius=27`;
document.cookie = `masyvas=[1,2,'hello',true,false,'hihi']`;
document.cookie = `objektas={raktas:'reiksme', skaicius:5}`;
// document.cookie = `pasens='po kazkiek laiko';expires=${new Date('Tue Jun 11 2024 09:35:05')}`;

// pasiimti cookies
console.group('Cookies');
const sausainiai = document.cookie.split('; ');
console.log(sausainiai);
console.groupEnd();

// session/local Storage

sessionStorage.setItem("vardas", "Rokas");
sessionStorage.setItem("amzius", 27);

console.log(sessionStorage.getItem('vardas'));
console.log(sessionStorage.getItem('amzius'));
console.log(sessionStorage.getItem('amzius')*1);

localStorage.setItem("vardas", "Rokas");
localStorage.setItem("pavarde", "Banaitis");
localStorage.setItem("amzius", 27);
localStorage.setItem("alkanas", true);
console.log(localStorage.getItem('vardas'));
console.log(localStorage.getItem('pavarde'));
console.log(localStorage.getItem('amzius'));
console.log(localStorage.getItem('alkanas'));

const asmuo = {
  vardas: "Rokas",
  pavarde: "Banaitis",
  amzius: 27,
  alkanas: true
};

localStorage.setItem("asmuo", asmuo);
console.log(localStorage.getItem('asmuo'));
