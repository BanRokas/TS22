export default class MovieCard{
  constructor(props){
    this.props = props;
    // this.title = props.title;
    
    return this.render();
  }

  render(){
    const cardDiv = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = this.props.title;



    cardDiv.append(title);
    return cardDiv;
  }
}