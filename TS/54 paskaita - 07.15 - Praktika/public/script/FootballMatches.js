export default class FootballMatches {
    constructor(props) {
        this.id = props.id;
        this.team1 = props.team1;
        this.team2 = props.team2;
        this.dateOfMatch = props.dateOfMatch;
        this.team1goals = props.team1goals;
        this.team2goals = props.team2goals;
        this.isBeingEdited = false;
    }
    render() {
        var _a, _b;
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('footballCard');
        const team1Name = document.createElement('h3');
        team1Name.textContent = this.team1;
        team1Name.addEventListener("click", () => this.changeStuff(team1Name, "text", "team1"));
        const team1Score = document.createElement('span');
        team1Score.textContent = ((_a = this.team1goals) === null || _a === void 0 ? void 0 : _a.toString()) || 'yet to play';
        team1Score.addEventListener("click", () => this.changeStuff(team1Score, "number", "team1goals"));
        const team2Name = document.createElement('h3');
        team2Name.textContent = this.team2;
        team2Name.addEventListener("click", () => this.changeStuff(team2Name, "text", "team2"));
        const team2Score = document.createElement('span');
        team2Score.textContent = ((_b = this.team2goals) === null || _b === void 0 ? void 0 : _b.toString()) || 'yet to play';
        team2Score.addEventListener("click", () => this.changeStuff(team2Score, "number", "team2goals"));
        const matchDate = document.createElement('p');
        matchDate.textContent = this.dateOfMatch;
        matchDate.addEventListener("click", () => this.changeStuff(matchDate, "date", "dateOfMatch"));
        const editButton = document.createElement('button');
        editButton.textContent = 'click to edit card';
        editButton.addEventListener('click', () => {
            if (editButton.textContent === 'click to edit card') {
                this.isBeingEdited = true;
                editButton.textContent = 'click to stop editing card';
            }
            else {
                this.isBeingEdited = false;
                editButton.textContent = 'click to edit card';
            }
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete this card';
        deleteButton.addEventListener('click', () => {
            fetch(`http://localhost:3000/europosFutboloČempionatoRungtynės/${this.id}`, {
                method: "DELETE"
            });
            cardDiv.remove();
        });
        cardDiv.append(team1Name, team1Score, matchDate, team2Name, team2Score, editButton, deleteButton);
        return cardDiv;
    }
    changeStuff(element, type, keyName) {
        var _a;
        if (this.isBeingEdited) {
            if (type !== 'number' || (type === 'number' && new Date(this.dateOfMatch) < new Date())) {
                const elementAsInput = document.createElement('input');
                elementAsInput.type = type;
                elementAsInput.value = element.textContent || '';
                (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.replaceChild(elementAsInput, element);
                elementAsInput.focus();
                elementAsInput.addEventListener('blur', () => {
                    var _a;
                    if (type === 'date') {
                        this.dateOfMatch = elementAsInput.value;
                    }
                    element.textContent = elementAsInput.value;
                    (_a = elementAsInput.parentElement) === null || _a === void 0 ? void 0 : _a.replaceChild(element, elementAsInput);
                    fetch(`http://localhost:3000/europosFutbolo%C4%8CempionatoRungtyn%C4%97s/${this.id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            [keyName]: type === 'number' ? elementAsInput.valueAsNumber : elementAsInput.value
                        })
                    });
                });
            }
        }
    }
}
