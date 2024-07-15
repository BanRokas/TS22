type FormDataObject = {
  id?: string,
  team1: string,
  team2: string,
  dateOfMatch: string,
  team1goals?: number,
  team2goals?: number,
  [key: string]: string | number | boolean
};

export default class FootballMatches{
  id: string | undefined;
  team1: string;
  team2: string;
  dateOfMatch: string;
  team1goals: number | undefined;
  team2goals: number | undefined;
  isBeingEdited: boolean;
  constructor(props:FormDataObject){
    this.id = props.id;
    this.team1 = props.team1;
    this.team2 = props.team2;
    this.dateOfMatch = props.dateOfMatch;
    this.team1goals = props.team1goals;
    this.team2goals = props.team2goals;
    this.isBeingEdited = false;
  }
  render(){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('footballCard');

    const team1Name = document.createElement('h3');
    team1Name.textContent = this.team1;
    team1Name.addEventListener("click", () => this.changeStuff(team1Name, "text", "team1"));

    const team1Score = document.createElement('span');
    team1Score.textContent = this.team1goals?.toString() || 'yet to play';
    team1Score.addEventListener("click", () => this.changeStuff(team1Score, "number", "team1goals"));

    const team2Name = document.createElement('h3');
    team2Name.textContent = this.team2;
    team2Name.addEventListener("click", () => this.changeStuff(team2Name, "text", "team2"));

    const team2Score = document.createElement('span');
    team2Score.textContent = this.team2goals?.toString() || 'yet to play';
    team2Score.addEventListener("click", () => this.changeStuff(team2Score, "number", "team2goals"));

    const matchDate = document.createElement('p');
    matchDate.textContent = this.dateOfMatch;
    matchDate.addEventListener("click", () => this.changeStuff(matchDate, "date", "dateOfMatch"));

    const editButton = document.createElement('button');
    editButton.textContent = 'click to edit card';
    editButton.addEventListener('click', () => {
      if(editButton.textContent === 'click to edit card'){
        this.isBeingEdited = true;
        editButton.textContent = 'click to stop editing card';
      } else {
        this.isBeingEdited = false;
        editButton.textContent = 'click to edit card';
      }
      // console.log('ar galiu redaguot:', this.isBeingEdited);
    });

    cardDiv.append(team1Name, team1Score, matchDate, team2Name, team2Score, editButton);
    return cardDiv;
  }
  changeStuff(element:Element, type: 'number' | 'text' | 'date', keyName: string){
    if(this.isBeingEdited){
      const elementAsInput = document.createElement('input');
      elementAsInput.type = type;
      elementAsInput.value = element.textContent || '';
      element.parentElement?.replaceChild(elementAsInput, element);
      elementAsInput.focus();

      elementAsInput.addEventListener('blur', () => {
        element.textContent = elementAsInput.value;
        elementAsInput.parentElement?.replaceChild(element, elementAsInput);
        fetch(`http://localhost:3000/europosFutbolo%C4%8CempionatoRungtyn%C4%97s/${this.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            [keyName]: type === 'number' ? elementAsInput.valueAsNumber : elementAsInput.value
          })
        })
      });
    }
  }
}