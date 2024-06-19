// set timeout
// setTimeout(
//   () => {
//     setTimeout(
//       () => {
        
//       }, 1000
//     )
//   }, 1000
// );

// Promise (resolve)
// function pazadukas(){
//   return new Promise((resolve) => {
//     setTimeout( () => {
//       resolve('Grąžinau kažkokią info');
//     }, 1000); // valanda būtų 3_600_000
//   });
// }
// console.log(pazadukas());
// pazadukas().then(response => console.log(response));
// console.log('labas rytas');

// Promise (resolve, reject)
const fancyPazadas = (time, data) => {
  return new Promise((resolve, reject)=>{
    if(typeof(time) !== 'number'){
      reject(`Error: ${time} must be a number.`);
    } else if(time < 0 || time > 10000){
      reject(`Error: ${time} must be positive number and lower than 10000.`);
    } else {
      setTimeout(() => {
        resolve(`${data} with some changes.`);
      }, time);
    }
  });
}
// fancyPazadas(5000, 'duomenys')
//   .then(response => console.log('all good', response))
//   .catch(error => console.log('beda', error))
//   .finally(() => console.log('finally vykdosi visais atvejais.'));

(async () =>{
  try {
    const atsakymas = await fancyPazadas(5000, 'duomenys');
    console.log(atsakymas);
  } catch(error) {
    console.log('beda', error);
  } finally {
    console.log('finally vykdosi visais atvejais.');
  }
})();


// Recursion
const grazinkSkaiciu = (sk, iteration) => {
  const randomSkaicius = Math.ceil(Math.random()*sk)*2;
  iteration++;
  if(randomSkaicius > 1_000){
    return { // 1
      skaicius: randomSkaicius,
      iteracija: iteration
    }
  } else {
    return grazinkSkaiciu(randomSkaicius, iteration); // 2
  }
}

console.log(grazinkSkaiciu(5, 1));