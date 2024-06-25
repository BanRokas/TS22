export default class MovieInfoModal{
  constructor(props){
    this.props = props;

    return this.render();
  }
  render(){
    const modal = document.createElement('dialog');
    modal.classList.add('movieInfo');
    // modal position relative;
    // turn modal off button
    // position absolute; top -50; right: 0;
    // add event to button to remove modal | nebūtina jeigu darote, kad modalą uždarytų paspaudimas už jo ribų

    const mainModalDiv = document.createElement('div');

    const image = document.createElement('img');
    image.setAttribute('src', this.props.photos.poster[0]);
    image.setAttribute('alt', `thumbail photo of movie: ${this.props.title}`);
    
    const infoDiv = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = this.props.title;


    infoDiv.append(title);
    mainModalDiv.append(image, infoDiv);


    modal.append(mainModalDiv);
    return modal;
  }
}