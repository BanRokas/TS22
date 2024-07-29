import Par from "../par/Par";
import Heading from "../heading/Heading";
import Image from "../image/Image";

const CssTryout = () => {
  return (
    <section>
      <Par
        text="Labas rytas"
      />
      <Heading
        text="Einam pertraukon"
      />
      <Image 
        url="https://hobbyshop.lt/wp-content/uploads/2023/08/26821.jpg"
        name="Exploding Kittens card game"
      />

    </section>
  );
}
 
export default CssTryout;