const Hero = ({ title, subtitle, color:colour }) => {

  // const stiliausObj = {
  //   backgroundColor: color === 'toks' ? 'red' : 'blue'
  // }
  // const backgroundColor = colour;
  // const color = 'red';

  return (
    // <div style={{ backgroundColor: color }}>
    // <div style={stiliausObj}>
    // <div style={{ backgroundColor, color }}>
    <div className={colour === 'raudona'?'redBg':'blueBg'}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
 
export default Hero;