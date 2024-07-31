import { useContext } from "react";
import PageLoaderContext from "./contexts/PageLoader";

import Header from "./components/UI/organism/header/Header";
import PlantsContainer from "./components/UI/organism/plantsContainer/PlantsContainer";

const App = () => {

  const { pageLoader } = useContext(PageLoaderContext);

  return (
    <>
      <Header />
      {
        pageLoader === 'home' ? <div>Home</div>
        : pageLoader === 'plants' ? <PlantsContainer />
        : <></>
      }
    </>
  );
}

export default App;
