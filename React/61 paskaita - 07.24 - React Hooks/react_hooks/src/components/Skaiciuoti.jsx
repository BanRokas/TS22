const Skaiciuoti = ({ data, dataChange, arPrisijunges }) => {

  // let skaicius = 0;
  // const [skaicius, setSkaicius] = useState(0);
  // const bendras = useState(0); // bendras = [0, functionToEdit]
  // const skaicius = bendras[0];
  // const setSkaicius = bendras[1];
  // console.log('komponento vidus');
  // const mazinti = () => {
  //   // skaicius--;
  //   setSkaicius(skaicius-1);
  //   // console.log(skaicius);
  // }
  // const didinti = () => {
  //   // skaicius++;
  //   setSkaicius(skaicius+1);
  //   // console.log(skaicius);
  // }
  // const keistiSkaiciu = (kitimas) => {
  //   setSkaicius(skaicius+kitimas);
  // }

  return (
    <>
      {/* <button onClick={() => setSkaicius(skaicius+1)}>Didinti</button><br /> */}
      {
        arPrisijunges ? 
        <>
          <button onClick={() => dataChange(1)}>Didinti</button><br />
          <button onClick={() => dataChange(-1)}>Mažinti</button>
        </> :
        <p>Reikia prisijungti norint keisti skaičių.</p>
      }
      <div>Skaičius yra: {data}</div>
    </>
  );
}
 
export default Skaiciuoti;