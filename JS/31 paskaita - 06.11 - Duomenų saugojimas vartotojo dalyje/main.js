import TodoApp from "./modules/TodoApp.js";

console.groupCollapsed('Cookies');
// Cookies
// susikurti cookies
document.cookie = `name='value'`;
document.cookie = `vardas="Rokas"`;
document.cookie = `amzius=27`;
document.cookie = `masyvas=[1,2,'hello',true,false,'hihi']`;
document.cookie = `objektas={raktas:'reiksme', skaicius:5}`;
// document.cookie = `pasens='po kazkiek laiko';expires=${new Date('Tue Jun 11 2024 09:35:05')}`;

// pasiimti cookies
const sausainiai = document.cookie.split('; ');
console.log(sausainiai);
console.groupEnd();

console.groupCollapsed('Local / Session Storage');
// session/local Storage
sessionStorage.setItem("vardas", "Rokas");
sessionStorage.setItem("amzius", 27);

console.log(sessionStorage.getItem('vardas'));
console.log(sessionStorage.getItem('amzius'));
console.log(sessionStorage.getItem('amzius')*1);
console.log('----------');
localStorage.setItem("vardas", "Rokas");
localStorage.setItem("pavarde", "Banaitis");
localStorage.setItem("amzius", 27);
localStorage.setItem("alkanas", true);
console.log(localStorage.getItem('vardas'));
console.log(localStorage.getItem('pavarde'));
console.log(localStorage.getItem('amzius'));
console.log(localStorage.getItem('alkanas'));
// console.log(localStorage.key(0));
console.log('----------');
for(let i = 0; i < localStorage.length; i++){
  console.log(localStorage.key(i));
  console.log(localStorage.getItem(localStorage.key(i)));
}
console.log('----------');
console.log(localStorage);
localStorage.removeItem('pavarde');
console.log(localStorage);
// localStorage.clear();
console.log(localStorage);
console.log('----------');
const asmuo = {
  vardas: "Rokas",
  pavarde: "Banaitis",
  amzius: 27,
  alkanas: true
};

// localStorage.setItem("asmuo", `{
//   vardas: "Rokas",
//   pavarde: "Banaitis",
//   amzius: 27,
//   alkanas: true
// }`);
// const kasTai = localStorage.getItem('asmuo');
// console.log(kasTai);
// console.log(kasTai.vardas);

localStorage.setItem('asmuo', JSON.stringify(asmuo));
console.log(JSON.parse(localStorage.getItem('asmuo')).amzius);

const asmenys = [
  {
    vardas: "Rokas",
    pavarde: "Banaitis",
    amzius: 27,
    alkanas: true
  },{
    vardas: "Rokas0",
    pavarde: "Banaitis0",
    amzius: 270,
    alkanas: false
  },{
    vardas: "Rokas1",
    pavarde: "Banaitis1",
    amzius: 21,
    alkanas: false
  },{
    vardas: "Rokas2",
    pavarde: "Banaitis2",
    amzius: 220,
    alkanas: true
  }
];
localStorage.setItem('asmenys', JSON.stringify(asmenys));
const grazintiAsmenys = JSON.parse(localStorage.getItem('asmenys'));
console.log(grazintiAsmenys);
console.groupEnd();

// to do
const todo = new TodoApp(document.querySelector('#toDo'));
console.log(todo);