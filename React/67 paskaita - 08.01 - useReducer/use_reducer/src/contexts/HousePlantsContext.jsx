import { createContext, useState, useReducer } from "react";

const HousePlantsContext = createContext();

export const HousePlantsActionTypes = {
  Add: "adding new plants to the collection",
  Remove: "removing specific plant from the collection"
}

const reducer = (state, action) => {
  switch(action.type){
    case HousePlantsActionTypes.Add:
      return [...state, action.newPlant];
    case HousePlantsActionTypes.Remove:
      return state.filter(el => el.id !== action.id);
    default:
      console.error(`${action.type} does not exist`);
      return state;
  }
}

const HousePlantsProvider = ({ children }) => {

  const [housePlants, setHousePlants] = useReducer(reducer, [
    {
      id: "s8ad7f49s",
      pavadinimas: "Zamioculcas Zamiifolia",
      aprasymas: "Abundant green foliage and unique oval-shaped green leaves of a super glossy touch. A really easy-to-care houseplant that will thrive in any home... No plant like the ZZ Plant!"
    },{
      id: "asd6f54sad98",
      pavadinimas: "Apple Cactus Florida",
      aprasymas: "This sweet Cactus actually bear fruit that can be eaten! A three-sided Cacti that belongs to the Dragon fruit family. The flowers are pale or white - if you're awake to see them! Also known as the Night flowering cactus due to it's nocturnal flowering habits. Super easy to keep, a must have for every Cacti collection."
    },{
      id: "a8s7fas9d1",
      pavadinimas: "Gold Capella",
      aprasymas: "This gentle Schefflera is a beautiful sight to behold. Standing confidently tall and possessing magnificent emerald leaves, it's a mighty houseplant and an understanding companion for the beginner indoor gardener, as it can withstand a bit of under watering! "
    },{
      id: "sa651SD9A81",
      pavadinimas: "African Fig Tree",
      aprasymas: "This Ficus is one of the most undemanding plants we have in our range. Whilst it's rich glossy leaves are native to tropical Africa - it will tolerate all levels of light or lack of light. An ideal plant for a slightly, neglectful plant-parent - or if you're frequently away for a few weeks at a time. Coping well with temperature changes too, this truly is a great all-rounder."
    }
  ]);

  // const [housePlants, setHousePlants] = useState([
  //   {
  //     id: "s8ad7f49s",
  //     pavadinimas: "Zamioculcas Zamiifolia",
  //     aprasymas: "Abundant green foliage and unique oval-shaped green leaves of a super glossy touch. A really easy-to-care houseplant that will thrive in any home... No plant like the ZZ Plant!"
  //   },{
  //     id: "asd6f54sad98",
  //     pavadinimas: "Apple Cactus Florida",
  //     aprasymas: "This sweet Cactus actually bear fruit that can be eaten! A three-sided Cacti that belongs to the Dragon fruit family. The flowers are pale or white - if you're awake to see them! Also known as the Night flowering cactus due to it's nocturnal flowering habits. Super easy to keep, a must have for every Cacti collection."
  //   },{
  //     id: "a8s7fas9d1",
  //     pavadinimas: "Gold Capella",
  //     aprasymas: "This gentle Schefflera is a beautiful sight to behold. Standing confidently tall and possessing magnificent emerald leaves, it's a mighty houseplant and an understanding companion for the beginner indoor gardener, as it can withstand a bit of under watering! "
  //   },{
  //     id: "sa651SD9A81",
  //     pavadinimas: "African Fig Tree",
  //     aprasymas: "This Ficus is one of the most undemanding plants we have in our range. Whilst it's rich glossy leaves are native to tropical Africa - it will tolerate all levels of light or lack of light. An ideal plant for a slightly, neglectful plant-parent - or if you're frequently away for a few weeks at a time. Coping well with temperature changes too, this truly is a great all-rounder."
  //   }
  // ]);
  // const addNewPlant = (newPlant) => {
  //   setHousePlants([...housePlants, newPlant]);
  // }
  // const removePlant = (id) => {
  //   setHousePlants(housePlants.filter(plant => plant.id !== id));
  // }

  return (
    <HousePlantsContext.Provider
      value={{
        housePlants,
        setHousePlants
      }}
    >
      { children }
    </HousePlantsContext.Provider>
  );
}

export { HousePlantsProvider };
export default HousePlantsContext;