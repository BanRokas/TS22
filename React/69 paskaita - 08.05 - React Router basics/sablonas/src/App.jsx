import { Routes, Route } from "react-router-dom";

import Header from "./components/UI/organism/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Error from "./components/pages/Error";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
