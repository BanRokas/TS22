import { useContext } from "react";
import HousePlantsContext from "../../../../contexts/HousePlantsContext";
import { HousePlantsActionTypes } from "../../../../contexts/HousePlantsContext";

const PlantCard = ({ data }) => {

  const { setHousePlants } = useContext(HousePlantsContext);

  return (
    <div>
      <h3>{data.pavadinimas}</h3>
      <p>{data.aprasymas}</p>
      <button
        onClick={() => setHousePlants({
          type: HousePlantsActionTypes.Remove,
          id: data.id
        })}
      >Delete</button>
    </div>
  );
}
 
export default PlantCard;