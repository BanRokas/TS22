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
        Komponentai gali priimti kažkokius props (informaciją/parametrus) ir grąžinti HTML'ą, kuriame ta informacija atvaizduojama.<br />
        Komponento return'e galima parašyti ternary sąlygą, kuri esant vienam atvejui grąžina vienokį HTML'ą, kitam atvejui - kitokį.
      </p>

      <Heading
        text="Komponentų stilizavimas (basic)"
        size={3}
      />
      <p>
        Komponento elementus galima stilizuoti įvairiais būdais, keletas iš jų yra: inline-style, suteikiant klases... 
      </p>
      <p>
        Norint stilizuoti inline būdu reikia tag'ui suteikti style atributą ir &#123;&#125; skliausteliuose rašyti objektą, kuriame yra išvardinti stiliai camelCase'intais pavadinimais ir už dvitaškių nurodytais stiliais. pvz.: &#123; &#123; backgroundColor: red, marginRight: 100px &#125; &#125;.<br />
        Suteikti klasę tag'ui jsx faile, galima lygiai taip pat kaip ir paprastame HTML'e, tik rašyti nebe class="kazkokiaKlase", bet className="kazkokiaKlase".
      </p>

      <Heading
        text="Iteracinis Komponentų užkrovimas"
        size={3}
      />
      <p>
        Iteruojant per masyvą, reikia naudoti tokį metodą, kuris kažką grąžina (nenaudoti forEach). <br />
        Komponentui/tag'ui, kuris kuriamas itercijos būdu, reikia priskirti raktą "key" su unikalia reikšme (dėl React'o dalykų, nesukit galvos ką su ją daryti).
      </p>
    </section>
  );
}
 
export default Komponentas;