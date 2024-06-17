export default class GameCard{
  constructor({id, name, photo, description, releaseDate, developer, platform, genres}){
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.description = description;
    // this.extraInfo = [releaseDate,developer,platform,genres];
    this.releaseDate = releaseDate;
    this.developer = developer;
    this.platform = platform;
    this.genres = genres;
    return this.render();
  }
  render(){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('gameCard');

    const heading = document.createElement('h3');
    heading.textContent = this.name;

    const image = document.createElement('img');
    image.setAttribute('src', this.photo);
    image.setAttribute('alt', `${this.name} thumbnail`);

    const par = document.createElement('p');
    par.textContent = this.description;

    const span1 = document.createElement('span');
    span1.textContent = `Leidimo data: ${this.releaseDate}`;
    const span2 = document.createElement('span');
    span2.textContent = `Kūrėjas: ${this.developer}`;
    const span3 = document.createElement('span');
    span3.textContent = `Platforma: ${this.platform}`;
    const span4 = document.createElement('span');
    span4.textContent = `Žanrai: ${this.genres.join(' | ')}`;
    const br1 = document.createElement('br');
    const br2 = document.createElement('br');
    const br3 = document.createElement('br');

    cardDiv.append(heading, image, par, span1, br1, span2, br2, span3, br3, span4);
    return cardDiv;
  }
}