// gauname visus duomenis
fetch(`http://localhost:3000/krepsinioKomandos`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

// gauname vieną specifinį duomenį
fetch(`http://localhost:3000/krepsinioKomandos/1`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

// // papildome vienu nauju duomenimi
// const komanda = {
//   id : Date.now().toString(), // Math.random()*+floor/ceil
//   pavadinimas: 'Kažkur kažkokie',
//   salis: 'Lenkija',
//   biudzetas: 20,
//   cempionoTitulas: false
// };
// fetch(`http://localhost:3000/krepsinioKomandos`, {
//   method: "POST",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body: JSON.stringify(komanda)
// });

// // papildome naujais duomenimis
// const komandos = [
//   {
//     id : Date.now().toString(), // Math.random()*+floor/ceil
//     pavadinimas: 'Kažkur kažkokie0',
//     salis: 'Lenkija',
//     biudzetas: 20,
//     cempionoTitulas: false,
//   },{
//     id : Date.now().toString()+1, // Math.random()*+floor/ceil
//     pavadinimas: 'Kažkur kažkokie1',
//     salis: 'Lenkija',
//     biudzetas: 20,
//     cempionoTitulas: false,
//   },{
//     id : Date.now().toString()+2, // Math.random()*+floor/ceil
//     pavadinimas: 'Kažkur kažkokie2',
//     salis: 'Lenkija',
//     biudzetas: 20,
//     cempionoTitulas: false,
//   },{
//     id : Date.now().toString()+3, // Math.random()*+floor/ceil
//     pavadinimas: 'Kažkur kažkokie3',
//     salis: 'Lenkija',
//     biudzetas: 20,
//     cempionoTitulas: false,
//   },{
//     id : Date.now().toString()+4, // Math.random()*+floor/ceil
//     pavadinimas: 'Kažkur kažkokie4',
//     salis: 'Lenkija',
//     biudzetas: 20,
//     cempionoTitulas: false,
//   }
// ];
// komandos.forEach(komanda => {
//   fetch(`http://localhost:3000/krepsinioKomandos`,{
//     method: "POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body: JSON.stringify(komanda)
//   });
// });

// trinti vieną duomenį
// fetch(`http://localhost:3000/krepsinioKomandos/4841198`,{
//   method: "DELETE"
// });

// trinti daugelį duomenų
// const trintiMasyvas = ["1718267175491","17182671754911","17182671754912","17182671754913","17182671754914"];
// trintiMasyvas.forEach(id => {
//   fetch(`http://localhost:3000/krepsinioKomandos/${id}`,{
//     method: "DELETE"
//   });
// });

// norint redaguoti su PATCH
fetch(`http://localhost:3000/krepsinioKomandos/1`,{
  method: "PATCH",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify({
    id:'654654654654', // id neliečiamas - nekeis duomens
    biudzetas: 10500000,
    dob: 1944
  })
});

const rytas = {
  id:'2',
  pavadinimas: "Lietuvos Rytas",
  biudzetas: 3500000,
  cempionoTitulas: false,
  salis: "Lietuva"
}
// norint redaguoti su PUT
fetch(`http://localhost:3000/krepsinioKomandos/2`,{
  method: "PUT",
  headers:{
    "Content-Type":"application/json"
  },
  // body: JSON.stringify({
  //   id:'654654654654', // id neliečiamas - nekeis duomens
  //   pavadinimas: "Rytas",
  //   biudzetas: 5000000,
  //   cempionoTitulas: true,
  //   salis: "Lietuva"
  // })
  body: JSON.stringify({
    ...rytas,
    pavadinimas: "Rytas",
    biudzetas: 5000000,
    cempionoTitulas: true,
  })
});