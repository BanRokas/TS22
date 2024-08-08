import { Routes, Route } from "react-router-dom";

import Header from "./components/UI/organism/Header";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;