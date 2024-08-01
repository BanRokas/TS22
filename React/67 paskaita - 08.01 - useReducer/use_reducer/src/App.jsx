import { useContext } from "react";
import PageLoaderContext from "./contexts/PageLoader";

import Header from "./components/UI/organism/header/Header";
import PlantsContainer from "./components/UI/organism/plantsContainer/PlantsContainer";
import LoginPage from "./components/pages/login/LoginPage";
import RegisterPage from "./components/pages/register/RegisterPage";

const App = () => {

  const { pageLoader } = useContext(PageLoaderContext);

  return (
    <>
      <Header />
      {
        pageLoader === 'home' ? <div>Home</div>
        : pageLoader === 'plants' ? <PlantsContainer />
        : pageLoader === 'login' ? <LoginPage />
        : pageLoader === 'register' ? <RegisterPage />
        : <></>
      }
    </>
  );
}

export default App;
