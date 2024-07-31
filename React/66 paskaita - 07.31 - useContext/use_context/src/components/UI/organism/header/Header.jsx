import { useContext } from "react";
import HousePlantsContext from "../../../../contexts/HousePlantsContext";

const Header = () => {

  const { housePlants } = useContext(HousePlantsContext);
  console.log(housePlants);

  return (
    <header>
      <p>Mūsų svetainėje yra: {housePlants.length} augalų.</p>
    </header>
  );
}
 
export default Header;