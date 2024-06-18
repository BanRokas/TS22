export default class DeleteConfirmationModal{
  constructor(card, id){
    this.card = card;
    this.id = id;
    return this.render();
  }
  render(){
    const dialog = document.createElement('dialog');

    const par = document.createElement('p');
    par.textContent = `Ar tikrai norite trinti šitą žaidimo kortelę?`;

    const yesButton = document.createElement('button');
    yesButton.textContent = 'Taip';
    yesButton.addEventListener('click', () => {
      dialog.remove();
      this.card.remove();
      fetch(`http://localhost:3000/videoGames/${this.id}`, {
        method: "DELETE"
      });
    });

    const noButton = document.createElement('button');
    noButton.textContent = 'Ne';
    noButton.addEventListener('click', () => {
      dialog.remove();
    });

    dialog.append(par, yesButton, noButton);
    return dialog;
  }
}