import MovieInfoModal from "./MovieInfoModal.js";

export default class MovieCard{
  constructor(props){
    this.props = props;
    // this.title = props.title;
    
    return this.render();
  }

  render(){
    const cardDiv = document.createElement('div');

    const thumbnail = document.createElement('img');
    thumbnail.setAttribute('src', this.props.photos.poster[0]);
    thumbnail.setAttribute('alt', `thumbail photo of movie: ${this.props.title}`);

    const imdbDiv = document.createElement('div');
    const imdbFillStar = document.createElement('i');
    imdbFillStar.classList.add('bi','bi-star-fill');
    const imdbScore = document.createElement('span');
    imdbScore.textContent = this.props.IMDB.totalScore;
    imdbDiv.append(imdbFillStar, imdbScore);
    
    const title = document.createElement('h3');
    title.textContent = this.props.title;

    const addToWatchlist = document.createElement('button');
    addToWatchlist.textContent = 'Watchlist';

    const trailerInfoDiv = document.createElement('div');
    const youtubeLink = document.createElement('a');
    youtubeLink.setAttribute('href', this.props.videos.trailers[0]);
    youtubeLink.setAttribute('target', '_blank');
    const playIcon = document.createElement('i');
    playIcon.classList.add('bi', 'bi-play-fill');
    const youtubeLinkText = document.createElement('span');
    youtubeLinkText.textContent = 'Trailer';
    youtubeLink.append(playIcon, youtubeLinkText);
    const infoBox = document.createElement('i');
    infoBox.classList.add('bi', 'bi-info-circle');
    trailerInfoDiv.append(youtubeLink, infoBox);

    infoBox.addEventListener('click', () => {
      // sukurti modala su naujos klases pagalba
      const modal = new MovieInfoModal(this.props);
      // ideti modala i ekrana (nesvarbu kur)
      document.body.appendChild(modal);
      // atvaizduoti modala
      modal.showModal();
    });

    cardDiv.append(thumbnail, imdbDiv, title, addToWatchlist, trailerInfoDiv);
    return cardDiv;
  }
}