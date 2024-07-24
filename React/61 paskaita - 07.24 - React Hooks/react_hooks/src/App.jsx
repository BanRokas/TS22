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

  const [formInputPavadinimas, setFormInputPavadinimas] = useState('');
  const [formInputReitingas, setFormInputReitingas] = useState('');
  const formosSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      id: Date.now().toString(),
      pavadinimas: formInputPavadinimas,
      reitingas: formInputReitingas
    };
    console.log(formValues);
    pridetiVandeny(formValues);
    setFormInputPavadinimas('');
    setFormInputReitingas('');
  }

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
  const pridetiVandeny = (naujasVanduo) => {
    setVandenys([...vandenys, naujasVanduo]);
  }
  const isimtiVandeny = (id) => {
    setVandenys(vandenys.filter(el => el.id !== id));
  }

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
        formInputPavadinimas={formInputPavadinimas}
        formInputReitingas={formInputReitingas}
        setFormInputPavadinimas={setFormInputPavadinimas}
        setFormInputReitingas={setFormInputReitingas}
        data={vandenys}
        formosSubmit={formosSubmit}
        isimtiVandeny={isimtiVandeny}
      />
    </>
  );
}

export default App;
