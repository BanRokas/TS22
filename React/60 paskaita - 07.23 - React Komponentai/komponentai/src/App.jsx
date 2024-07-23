import Komponentas from "./components/Komponentas";
import Staciakampis from "./components/Staciakampis";

const App = () => {
  return (
    <>
      <Komponentas />
      <div
        id='random'
        className="staciakampiuKonteineris"
      >
        <Staciakampis 
          bgColor='red'
          plotis={200}
          aukstis={50}
        />
        <Staciakampis 
          bgColor='orange'
          plotis={333}
          aukstis={111}
        />
        <Staciakampis 
          bgColor='blue'
          plotis={100}
          aukstis={200}
        />
      </div>
    </>
  );
}

export default App;