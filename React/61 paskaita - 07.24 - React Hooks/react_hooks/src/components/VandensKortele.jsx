const VandensKortele = ({ data }) => {
  return (
    <div className="vandensKortele">
      <h3>{data.pavadinimas}</h3>
      <span>Reitingas: {data.reitingas}</span>
    </div>
  );
}
 
export default VandensKortele;