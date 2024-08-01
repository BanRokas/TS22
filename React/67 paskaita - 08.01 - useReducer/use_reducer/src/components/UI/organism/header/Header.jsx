import { useContext } from "react";
import HousePlantsContext from "../../../../contexts/HousePlantsContext";
import PageLoaderContext from "../../../../contexts/PageLoader";

const Header = () => {

  const { housePlants } = useContext(HousePlantsContext);
  // console.log(housePlants);
  const { setPageLoader } = useContext(PageLoaderContext);

  return (
    <header>
      <nav>
        <button
          onClick={() => setPageLoader('home')}
        >Home</button>
        <button
          onClick={() => setPageLoader('plants')}
        >Plants</button>
      </nav>
      <p>Mūsų svetainėje yra: {housePlants.length} augalų.</p>
      <nav>
        <button
          onClick={() => setPageLoader('login')}
        >Login</button>
        <button
          onClick={() => setPageLoader('register')}
        >Register</button>
      </nav>
    </header>
  );
}
 
export default Header;