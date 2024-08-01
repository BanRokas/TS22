import { useContext } from "react";
import HousePlantsContext from "../../../../contexts/HousePlantsContext";
import PageLoaderContext from "../../../../contexts/PageLoader";
import UsersContext from "../../../../contexts/UsersContext";

const Header = () => {

  const { housePlants } = useContext(HousePlantsContext);
  // console.log(housePlants);
  const { setPageLoader } = useContext(PageLoaderContext);
  const { loggedInUser, setLoggedInUser } = useContext(UsersContext);

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
        {
          loggedInUser ? <>
            <span>{loggedInUser.name}</span>
            <button
              onClick={() => {
                setLoggedInUser('');
                setPageLoader('home');
              }}
            >LogOut</button>
          </> : <>
            <button
              onClick={() => setPageLoader('login')}
            >Login</button>
            <button
              onClick={() => setPageLoader('register')}
            >Register</button>
          </>
        }
      </nav>
    </header>
  );
}
 
export default Header;