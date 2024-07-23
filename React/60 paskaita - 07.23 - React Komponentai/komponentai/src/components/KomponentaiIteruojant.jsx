import MaistoKortele from "./MaistoKortele";

const KomponentaiIteruojant = () => {

  // const duomensObjektas = {
  //   pavadinimas: "Kebabas",
  //   kaina: 7,
  //   nuotrauka: 'https://www.dogan.lt/image/cache/catalog/meniu/1_kebabas%20lavase_0029_IMG_0028%20-%20Copy-1600x1200.jpg'
  // };
  const duomenuMasyvas = [
    {
      pavadinimas: "Kebabas",
      kaina: 7,
      nuotrauka: 'https://www.dogan.lt/image/cache/catalog/meniu/1_kebabas%20lavase_0029_IMG_0028%20-%20Copy-1600x1200.jpg'  
    },{
      pavadinimas: "Pica",
      kaina: 12,
      nuotrauka: 'https://images.ctfassets.net/nw5k25xfqsik/64VwvKFqxMWQORE10Tn8pY/200c0538099dc4d1cf62fd07ce59c2af/20220211142754-margherita-9920.jpg'  
    },{
      pavadinimas: "Kepsnys",
      kaina: 20,
      nuotrauka: 'https://www.cookingclassy.com/wp-content/uploads/2022/07/grilled-steak-15.jpg'  
    },{
      pavadinimas: "Sriuba",
      kaina: 4,
      nuotrauka: 'https://downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main-500x375.jpg'  
    }
  ];

  return (
    <section className="foodContainer">
      {/* <MaistoKortele 
        food={duomenuMasyvas[0]}
      />
      <MaistoKortele 
        food={duomenuMasyvas[1]}
      />
      <MaistoKortele 
        food={duomenuMasyvas[2]}
      />
      <MaistoKortele 
        food={duomenuMasyvas[3]}
      /> */}
      {
        duomenuMasyvas.map((el, i) => 
          <MaistoKortele 
            key={i}
            food={el}
          />
        )
      }
    </section>
  );
}
 
export default KomponentaiIteruojant;