type MaistoFormosDuomenys = {
  pavadinimas: string,
  reitingas: number,
  nuotrauka: string
}

export default class FoodCard{
  pavadinimas:string;
  reitingas:number;
  nuotrauka:string;
  constructor(props: MaistoFormosDuomenys){
    this.pavadinimas = props.pavadinimas;
    this.reitingas = props.reitingas;
    this.nuotrauka = props.nuotrauka;
  }
  render(): HTMLDivElement{
    const card: HTMLDivElement = document.createElement('div');
    card.classList.add('foodCard');

    const heading = document.createElement('h3');
    heading.textContent = this.pavadinimas;

    const rating = document.createElement('span');
    rating.textContent = this.reitingas.toString();

    const image = document.createElement('img');
    image.setAttribute('src', this.nuotrauka);
    image.setAttribute('alt', this.pavadinimas);

    card.append(heading, rating, image);
    return card;
  }
}