"use strict";
const newFootballMatchForm = document.querySelector('#newFootballMatch');
newFootballMatchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(newFootballMatchForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
        if (key === 'team1goals' || key === 'team2goals') {
            if (value !== '') {
                formDataObject[key] = Number(value);
            }
        }
        else {
            formDataObject[key] = value;
        }
    });
    console.log(formDataObject);
});
fetch(`http://localhost:3000/europosFutbolo%C4%8CempionatoRungtyn%C4%97s`)
    .then(res => res.json())
    .then(data => {
    console.log(data);
});
