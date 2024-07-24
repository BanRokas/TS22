import { useState } from "react";
import Skaiciuoti from "./components/Skaiciuoti";
import Header from "./components/Header";

const App = () => {
  const [skaicius, setSkaicius] = useState(0);
  const keistiSkaiciu = (kitimas) => {
    setSkaicius(skaicius+kitimas);
  }
  const [arPrisijunges, setArPrisijunges] = useState(false);
  const prisijungti = () => setArPrisijunges(true);
  const atsijungti = () => setArPrisijunges(false);

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
    </>
  );
}

export default App;
