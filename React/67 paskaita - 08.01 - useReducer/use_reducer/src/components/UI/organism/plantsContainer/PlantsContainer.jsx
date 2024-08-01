import { useContext } from "react";
import HousePlantsContext from "../../../../contexts/HousePlantsContext";

import PlantCard from "../../molecules/plantCard/PlantCard";

const PlantsContainer = () => {

  const { housePlants } = useContext(HousePlantsContext);

  return (
    <section>
      <h2>Our Plants</h2>
      <div>
        {
          housePlants.map(plant => 
            <PlantCard 
              key={plant.id}
              data={plant}
            />
          )
        }
      </div>
    </section>
  );
}
 
export default PlantsContainer;