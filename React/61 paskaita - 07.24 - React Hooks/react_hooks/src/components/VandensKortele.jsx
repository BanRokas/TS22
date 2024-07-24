const VandensKortele = ({ data, isimtiVandeny }) => {
  return (
    <div className="vandensKortele">
      <h3>{data.pavadinimas}</h3>
      <span>Reitingas: {data.reitingas}</span>
      <button onClick={() => isimtiVandeny(data.id)}>Ištrinti</button>
    </div>
  );
}
 
export default VandensKortele;