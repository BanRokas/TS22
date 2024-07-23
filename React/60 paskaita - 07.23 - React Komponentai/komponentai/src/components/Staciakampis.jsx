const Staciakampis = ({ bgColor, plotis, aukstis }) => {
  const stylesAndStuff = {
    backgroundColor: bgColor,
    width: plotis,
    height: aukstis
  };
  return (
    <div 
      style={stylesAndStuff}
    ></div>
  );
}
 
export default Staciakampis;