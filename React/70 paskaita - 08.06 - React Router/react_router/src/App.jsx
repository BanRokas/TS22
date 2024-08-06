import { Routes, Route } from "react-router-dom";

import Header from "./components/UI/organism/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Error from "./components/pages/Error";
import SpecProduct from "./components/pages/SpecProduct";
import AddProduct from "./components/pages/AddProduct";
import ShopOutlet from "./components/pages/ShopOutlet";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ShopOutlet />} >
            <Route index element={<Shop />}/>
            <Route path='addItem' element={<AddProduct />}/>
            <Route path="item/:id" element={<SpecProduct />} />
            {/* <Route path="item/edit/:id" element={<EditProd />} /> */}
            {/* <Route path="elektronines" element={<h1>Shop Ele</h1>}/>
            <Route path="lauko" element={<h1>Shop Lauko</h1>}/> */}
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
