import FootballMatches from "./FootballMatches.js";

type FormDataObject = {
  id?: string,
  team1: string,
  team2: string,
  dateOfMatch: string,
  team1goals?: number,
  team2goals?: number,
  [key: string]: string | number | boolean
};

// read form
const newFootballMatchForm = document.querySelector('#newFootballMatch') as HTMLFormElement;
newFootballMatchForm.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();
  
  const formData = new FormData(newFootballMatchForm);
  const formDataObject = {} as FormDataObject;

  formData.forEach((value, key) => {
    if(key === 'team1goals' || key === 'team2goals'){
      if(value !== ''){
        formDataObject[key] = Number(value);
      }
    } else {
      formDataObject[key] = value as string;
    }
  });

  console.log(formDataObject);

});

// fetch and display
fetch(`http://localhost:3000/europosFutbolo%C4%8CempionatoRungtyn%C4%97s`)
  .then(res => res.json())
  .then((data: FormDataObject[]) => {
    data.forEach(match => {
      const matchCard: HTMLDivElement = new FootballMatches(match).render();
      document.querySelector(`#matchesCards`)?.appendChild(matchCard);
    });
  });