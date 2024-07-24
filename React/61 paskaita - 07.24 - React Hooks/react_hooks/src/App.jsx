import { useState } from "react";
import Skaiciuoti from "./components/Skaiciuoti";

const App = () => {
  const [skaicius, setSkaicius] = useState(0);
  const keistiSkaiciu = (kitimas) => {
    setSkaicius(skaicius+kitimas);
  }
  
  return (
    <>
      {/* <Header /> */}
      <Skaiciuoti
        data={skaicius}
        dataChange={keistiSkaiciu}
      />
    </>
  );
}

export default App;
