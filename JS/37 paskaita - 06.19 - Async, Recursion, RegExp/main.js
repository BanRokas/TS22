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


// Regex

const string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi, veritatis pariatur natus eos voluptates numquam aspernatur neque perspiciatis harum illo. Accusamus nostrum, possimus excePturi esse officiis ratione neque in blanditiis ex perferendis nemo nisi fugit tempore, laborum necessitatibus corrupti. Autem iusto tenetur suscipit dolore neque, ipsa quaerat animi provident.`;

const reg = /[A-Z]\w*/g;
const matched = string.match(reg);
console.log(matched);

const regPass = 
new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?#&])[A-Za-z0-9@$!%*#?&]{8,}$");
            // ^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$
console.log(regPass);
// console.log(regPass.test('TinkaMas123!'));
// console.log('TinkaMas123!'.match(regPass));
const checkPassword = (password) => {
  // console.log(password);
  // return password.match(regPass);
  return regPass.test(password);
}
console.log(checkPassword('silpnas'));
console.log(checkPassword('stiprus'));
console.log(checkPassword('keletasSimboliu'));
console.log(checkPassword('StrongPass1#'));

const password = "StrongPass1!";
const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (pattern.test(password)) {
  console.log("Password is valid.");
} else {
  console.log("Password is invalid.");
}