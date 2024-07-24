import { useState } from "react";
import Skaiciuoti from "./components/Skaiciuoti";
import Header from "./components/Header";
import ListOfSomething from "./components/ListOfSomething";

const App = () => {
  const [skaicius, setSkaicius] = useState(0);
  const keistiSkaiciu = (kitimas) => {
    setSkaicius(skaicius+kitimas);
  }
  const [arPrisijunges, setArPrisijunges] = useState(false);
  const prisijungti = () => setArPrisijunges(true);
  const atsijungti = () => setArPrisijunges(false);

  const [vandenys, setVandenys] = useState([
    {
      id: "6ads4f9",
      pavadinimas: 'Tichė',
      reitingas: 9
    },{
      id: "a6s5d49",
      pavadinimas: 'Vytautas',
      reitingas: 7
    },{
      id: "9d8fs4g",
      pavadinimas: 'Borjomi',
      reitingas: 3
    },{
      id: "asd9f84",
      pavadinimas: 'Čiaupo',
      reitingas: 4
    }
  ]);

  return (
    <>
      <Header
        data={arPrisijunges}
        prijungtiF={prisijungti}
        atjungtiF={atsijungti}
      />
      <Skaiciuoti
        arPrisijunges={arPrisijunges}
        data={skaicius}
        dataChange={keistiSkaiciu}
      />
      <ListOfSomething
        data={vandenys}
      />
    </>
  );
}

export default App;
