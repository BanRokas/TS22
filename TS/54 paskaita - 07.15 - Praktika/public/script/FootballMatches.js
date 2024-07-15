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
        const team1Score = document.createElement('span');
        team1Score.textContent = ((_a = this.team1goals) === null || _a === void 0 ? void 0 : _a.toString()) || 'yet to play';
        const team2Name = document.createElement('h3');
        team2Name.textContent = this.team2;
        const team2Score = document.createElement('span');
        team2Score.textContent = ((_b = this.team2goals) === null || _b === void 0 ? void 0 : _b.toString()) || 'yet to play';
        const matchDate = document.createElement('p');
        matchDate.textContent = this.dateOfMatch;
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
            console.log('ar galiu redaguot:', this.isBeingEdited);
        });
        cardDiv.append(team1Name, team1Score, matchDate, team2Name, team2Score, editButton);
        return cardDiv;
    }
}
