import DeleteConfirmationModal from "./DeleteConfirmationModal.js";
import EditGameCardModal from "./EditGameCardModal.js";

export default class GameCard{
  constructor({ id, name, photo, description, releaseDate, developer, platform, genres, checked }){
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.description = description;
    // this.extraInfo = [releaseDate,developer,platform,genres];
    this.releaseDate = releaseDate;
    this.developer = developer;
    this.platform = platform;
    this.genres = genres;
    this.checked = checked;

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
    const br4 = document.createElement('br');

    // Delete
    const delButton = document.createElement('button');
    delButton.textContent = 'Trinti';
    delButton.addEventListener('click', () => {
      console.log('bandome trinti');
      
      // REIKIA confirmation
      // kuriamas naujas modalas, kuris po to ištirnamas
      const confirmModalEl = new DeleteConfirmationModal(cardDiv, this.id);
      document.body.appendChild(confirmModalEl);
      confirmModalEl.showModal();

      // šitas būdas negerai, nes dedasi daugelis event'ų tiem patiem mygtukam
      // reikėtų naikinti mygtukams uždėtas funkcijas su kiekvienu iškvietimu
      // document
      //   .querySelector('#deleteConfirmation')
      //   .showModal();
      // document
      //   .querySelector('#deleteCancel')
      //   .addEventListener('click', e => {
      //     e.target.parentElement.close();
      //   });
      // document
      //   .querySelector('#deleteConfirm')
      //   .addEventListener('click', e => {
      //     e.target.parentElement.close();
      //     console.log(this.id);
      //     console.log('hello? triname?');
      //     cardDiv.remove();
      //     fetch(`http://localhost:3000/videoGames/${this.id}`, {
      //       method: "DELETE"
      //     });
      //   });
    });

    // miniUpdate
    const statusButton = document.createElement('button');
    statusButton.textContent = this.checked ? 'keisti į ne' : 'keisti į taip';
    statusButton.addEventListener('click', () => {
      // ekrane
      this.checked = !this.checked;
      statusButton.textContent = this.checked ? 'keisti į ne' : 'keisti į taip';
      // duomenyse
      fetch(`http://localhost:3000/videoGames/${this.id}`,{
        method: "PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({ checked: this.checked })
      });
    });

    // edit
    const editButton = document.createElement('button');
    editButton.textContent = 'Redaguoti';
    editButton.addEventListener('click', () => {
      const editFormModalEl = new EditGameCardModal(this.id, this.name, this.photo, this.description, this.releaseDate, this.developer, this.platform, this.genres, this.checked, stupidFunction);
      cardDiv.appendChild(editFormModalEl);
      editFormModalEl.showModal();
    });

    const stupidFunction = (editedStuff) => {
      heading.textContent = editedStuff.name;
      image.src = editedStuff.photo;
      par.textContent = editedStuff.description;
      span1.textContent = `Leidimo data: ${editedStuff.releaseDate}`;
      span2.textContent = `Kūrėjas: ${editedStuff.developer}`;
      span3.textContent = `Platforma: ${editedStuff.platform}`;
      span4.textContent = `Žanrai: ${editedStuff.genre ? editedStuff.genre.join(' | ') : ''}`;
    }

    cardDiv.append(heading, image, par, span1, br1, span2, br2, span3, br3, span4, br4, delButton, statusButton, editButton);
    return cardDiv;
  }
}