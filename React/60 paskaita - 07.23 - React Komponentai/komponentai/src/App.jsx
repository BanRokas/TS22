import Komponentas from "./components/Komponentas";
import StaciakampiuKonteineris from "./components/StaciakampiuKonteineris";
import KomponentaiIteruojant from "./components/KomponentaiIteruojant";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Hero 
        title = 'Labas rytas'
        subtitle = 'Reikia išgerti kavos/arbatos'
        color = 'raudona'
      />
      <Komponentas />
      <StaciakampiuKonteineris />
      <KomponentaiIteruojant />
    </>
  );
}

export default App;