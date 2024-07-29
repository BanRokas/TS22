import Par from "../par/Par";
import Heading from "../heading/Heading";
import Image from "../image/Image";
import List from "../list/List";
import Button from "../button/Button";

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
      <List 
        type="ul"
        items={['malta mėsa', 'kepsnys', 'bulvės', 'morkos', 'svogūnas']}
      />
      <List 
        type="ol"
        items={['Išsiurbti kambarius', 'Nusivalyti dulkes', 'Išplauti kambarius']}
      />
      <Button 
        text="Click ME!"
      />
      <Button 
        text="Click ME 2!"
        bgColor="red"
        textColor="blue"
      />
    </section>
  );
}
 
export default CssTryout;