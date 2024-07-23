const Heading = ({ text, size }) => {
  // if(size === 3){
  //   return(
  //     <h3>{text}</h3>
  //   )
  // } else if(size === 2){
  //   return(
  //     <h2>{text}</h2>
  //   )
  // }
  return(
    size === 3 ?
    <h3>{text}</h3>
    : size === 2 ?
    <h2>{text}</h2>
    : <></>
  )
}
 
export default Heading;