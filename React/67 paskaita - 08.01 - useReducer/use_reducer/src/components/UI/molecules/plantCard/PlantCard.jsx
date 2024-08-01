import { useContext } from "react";
import HousePlantsContext from "../../../../contexts/HousePlantsContext";

const PlantCard = ({ data }) => {

  const { removePlant } = useContext(HousePlantsContext);

  return (
    <div>
      <h3>{data.pavadinimas}</h3>
      <p>{data.aprasymas}</p>
      <button
        onClick={() => removePlant(data.id)}
      >Delete</button>
    </div>
  );
}
 
export default PlantCard;