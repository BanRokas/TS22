import VandensKortele from "./VandensKortele";

const ListOfSomething = ({ data }) => {
  return (
    <section>
      <h2>Vandenys</h2>
      <div>
        {
          data.map(el => 
            <VandensKortele 
              key={el.id}
              data={el}
            />
          )
        }
      </div>
    </section>
  );
}
 
export default ListOfSomething;