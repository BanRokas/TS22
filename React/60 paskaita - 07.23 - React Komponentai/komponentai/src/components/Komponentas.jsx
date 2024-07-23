import Heading from "./Heading";

const Komponentas = () => {
  return (
    <section>
      {/* <h2>Komponentas</h2> */}
      <Heading
        text="Komponentas"
        size={2}
      />
      <p>
        Kažkoks JS failas, kuris grąžina kažkokį HTML'o kodą.
      </p>

      {/* <h3>Kintantys Komponentai</h3> */}
      <Heading
        text="Kintantys Komponentai"
        size={3}
      />
      <p>
        Komponentai gali priimti kažkokius props (informaciją/parametrus) ir grąžinti HTML'ą, kuriame ta informacija atvaizduojama.
      </p>
    </section>
  );
}
 
export default Komponentas;