import VandensKortele from "./VandensKortele";
import NaujoVandensForma from "./NaujoVandensForma";

const ListOfSomething = ({ data, formInputPavadinimas, formInputReitingas, setFormInputPavadinimas, setFormInputReitingas, formosSubmit, isimtiVandeny }) => {
  return (
    <section className="vandenys">
      <h2>Vandenys</h2>
      <NaujoVandensForma
        formInputPavadinimas={formInputPavadinimas}
        formInputReitingas={formInputReitingas}
        setFormInputPavadinimas={setFormInputPavadinimas}
        setFormInputReitingas={setFormInputReitingas}
        formosSubmit={formosSubmit}
      />
      <div>
        {
          data.map(el => 
            <VandensKortele 
              key={el.id}
              data={el}
              isimtiVandeny={isimtiVandeny}
            />
          )
        }
      </div>
    </section>
  );
}
 
export default ListOfSomething;