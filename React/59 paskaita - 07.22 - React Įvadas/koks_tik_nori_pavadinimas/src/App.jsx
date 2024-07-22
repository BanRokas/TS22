import ExtraInfo from "./ExtraInfo";
import KasReact from "./KasReact";
import ReactNauda from "./ReactNauda";

function App() {

  const kintamasis = 'React very fun :)';
  const a = 2;
  const b = 5;

  return (
    <>
      <section id="about">
        <h1>About React</h1>
        <div>
          <KasReact />
          <ReactNauda />
          <ExtraInfo />
        </div>
        <iframe src="https://www.youtube.com/embed/Tn6-PIqc4UM" title="React in 100 Seconds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>

      <section>
        <h3>Labas rytas</h3>
      </section>
      <section>
        <h3>{kintamasis.toUpperCase()}</h3>
        <p>Dauginant {a} ir {b} gausime {a*b}</p>
        <p>Dauginant a ir b gausime a*b</p>
      </section>
    </>
  );
}

export default App;
