console.log('prieš fetch');

fetch(`https://randomuser.me/api/`)
  .then(response => {
    // console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data);
    // console.log(data.results[0]);
    // console.log(data.results[0].dob.age);
    const user = data.results[0];
    console.log(user);
    console.log(user.dob.age);
    console.log(user.name.first);
    console.log(user.location.timezone.description);

    // būt gerai šitai talpinti atskiroje klasėje
    const divEl = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = user.name.first;
    divEl.appendChild(h4);
    document.querySelector('#randomUser').appendChild(divEl);
  });

console.log('po fetch');

const fetchISS = () => fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    const divEl = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = `ISS location: ${data.latitude.toFixed(3)}/${data.longitude.toFixed(3)}`;
    divEl.appendChild(h4);
    document.querySelector('#ISS').innerHTML = '';
    document.querySelector('#ISS').appendChild(divEl);
  });

setInterval(fetchISS, 1000);

// kaip fetch su POST metodu
fetch(`URL`, {
  method: "POST",
  headers:{
    "Content-Type":"application/json"
  },
  body: JSON.stringify(data)
}).then(res => console.log(res)) // then nebūtinas, čia tam kad pažiūrėt response info
.catch(err => console.log(err)) // nebūtina