const NaujoVandensForma = ({ formInputPavadinimas, formInputReitingas, setFormInputPavadinimas, setFormInputReitingas, formosSubmit }) => {
  return (
    <form onSubmit={formosSubmit}>
      <div>
        <label 
          htmlFor="pavadinimas"
        >Pavadinimas</label>
        <input
          type="text"
          id="pavadinimas"
          value={formInputPavadinimas}
          onChange={(e)=>{setFormInputPavadinimas(e.target.value)}}
        />
      </div>
      <div>
        <label 
          htmlFor="reitingas"
        >Reitingas</label>
        <input
          type="number"
          id="reitingas"
          min={1} max={10}
          value={formInputReitingas}
          onChange={(e)=>{setFormInputReitingas(e.target.valueAsNumber)}}
        />
      </div>
      <input type="submit" value="Pridėti" />
    </form>
  );
}
 
export default NaujoVandensForma;