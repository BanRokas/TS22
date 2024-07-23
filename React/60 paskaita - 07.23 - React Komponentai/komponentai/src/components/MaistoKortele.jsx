const MaistoKortele = ({ food }) => {
  // console.log(food);
  return (
    <div className="maistoKortele">
      <h3>{food.pavadinimas}</h3>
      <img
        src={food.nuotrauka}
        alt={food.pavadinimas}
      />
      {
        food.kaina > 15 ?
        <p>Brangu</p> :
        <p>Kaina: {food.kaina}&euro;</p>
      }
    </div>
  );
}
 
export default MaistoKortele;