import FootballMatches from "./FootballMatches.js";
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
    fetch(`http://localhost:3000/europosFutboloČempionatoRungtynės`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataObject)
    })
        .then(res => res.json())
        .then(data => {
        var _a;
        const matchCard = new FootballMatches(data).render();
        (_a = document.querySelector(`#matchesCards`)) === null || _a === void 0 ? void 0 : _a.appendChild(matchCard);
    });
    newFootballMatchForm.reset();
});
fetch(`http://localhost:3000/europosFutbolo%C4%8CempionatoRungtyn%C4%97s`)
    .then(res => res.json())
    .then((data) => {
    data.forEach(match => {
        var _a;
        const matchCard = new FootballMatches(match).render();
        (_a = document.querySelector(`#matchesCards`)) === null || _a === void 0 ? void 0 : _a.appendChild(matchCard);
    });
});
