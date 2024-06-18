export default class EditGameCardModal {
  constructor(id, name, photo, description, releaseDate, developer, platform, genres, checked, editFunc) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.description = description;
    this.releaseDate = releaseDate;
    this.developer = developer;
    this.platform = platform;
    this.genres = genres;
    this.checked = checked;
    this.editFunc = editFunc;

    return this.render();
  }
  render() {
    const dialogEl = document.createElement('dialog');

    const heading = document.createElement('h3');
    heading.textContent = `Edit game`;

    const form = document.createElement('form');

    // Function to create a div with a label and input/textarea/select
    function createDivElement(labelText, inputElement, labelFor) {
      const div = document.createElement('div');
      const label = document.createElement('label');
      label.textContent = labelText;
      label.setAttribute('for', labelFor);
      div.appendChild(label);
      div.appendChild(inputElement);
      return div;
    }

    // Name field
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'nameModal');
    nameInput.setAttribute('id', 'nameModal');
    nameInput.setAttribute('value', this.name);
    form.appendChild(createDivElement('Pavadinimas', nameInput, 'nameModal'));

    // Photo field
    const photoInput = document.createElement('input');
    photoInput.setAttribute('type', 'url');
    photoInput.setAttribute('name', 'photoModal');
    photoInput.setAttribute('id', 'photoModal');
    photoInput.setAttribute('value', this.photo);
    form.appendChild(createDivElement('Nuotrauka', photoInput, 'photoModal'));

    // Description field
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.setAttribute('name', 'descriptionModal');
    descriptionTextarea.setAttribute('id', 'descriptionModal');
    descriptionTextarea.textContent = this.description;
    form.appendChild(createDivElement('Aprašymas', descriptionTextarea, 'descriptionModal'));

    // Release Date field
    const releaseDateInput = document.createElement('input');
    releaseDateInput.setAttribute('type', 'date');
    releaseDateInput.setAttribute('name', 'releaseDateModal');
    releaseDateInput.setAttribute('id', 'releaseDateModal');
    releaseDateInput.setAttribute('value', this.releaseDate);
    form.appendChild(createDivElement('Leidimo data', releaseDateInput, 'releaseDateModal'));

    // Developer field
    const developerInput = document.createElement('input');
    developerInput.setAttribute('type', 'text');
    developerInput.setAttribute('name', 'developerModal');
    developerInput.setAttribute('id', 'developerModal');
    developerInput.setAttribute('value', this.developer);
    form.appendChild(createDivElement('Kūrėjas', developerInput, 'developerModal'));

    // Platform field
    const platformSelect = document.createElement('select');
    platformSelect.setAttribute('name', 'platformModal');
    platformSelect.setAttribute('id', 'platformModal');
    platformSelect.setAttribute('value', this.platform);
    const platforms = ['PC', 'XBox', 'PS', 'Switch'];
    platforms.forEach(function (platform) {
      const option = document.createElement('option');
      option.setAttribute('value', platform);
      option.textContent = platform;
      platformSelect.appendChild(option);
    });
    form.appendChild(createDivElement('Platforma', platformSelect, 'platformModal'));

    // Genres field
    const genresInput = document.createElement('input');
    genresInput.setAttribute('type', 'text');
    genresInput.setAttribute('name', 'genresModal');
    genresInput.setAttribute('id', 'genresModal');
    genresInput.setAttribute('placeholder', 'Zanras1, zanras2, zanras3, ...');
    genresInput.setAttribute('value', this.genres.join(', '));
    form.appendChild(createDivElement('Žanrai', genresInput, 'genresModal'));

    // Submit button
    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'Redaguoti žaidimą');
    form.appendChild(submitInput);

    form.addEventListener('submit', e => {
      e.preventDefault();
      console.dir(e.target.parentElement.parentElement);
      
      const ete = e.target.elements;
      // e.target.parentElement.parentElement.childNodes[0].textContent = ete.nameModal.value;
      const editedCard = {
        name: ete.nameModal.value,
        photo: ete.photoModal.value,
        description: ete.descriptionModal.value,
        releaseDate: ete.releaseDateModal.value,
        developer: ete.developerModal.value,
        platform: ete.platformModal.value,
        genres: ete.genresModal.value?.split(', '),
        checked: this.checked
      };
      console.log(editedCard);
      fetch(`http://localhost:3000/videoGames/${this.id}`, {
        method: "PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(editedCard)
      });

      // window.location.reload();
      this.editFunc(editedCard);

      dialogEl.remove();
    });

    const exitButton = document.createElement('button');
    exitButton.textContent = `Cancel Editing`;
    exitButton.addEventListener('click', () => {
      dialogEl.remove();
    });

    dialogEl.append(heading, form, exitButton);
    return dialogEl;
  }
}