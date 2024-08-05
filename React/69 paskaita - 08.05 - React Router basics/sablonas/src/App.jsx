import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/shop" element={<h1>Our Products</h1>} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
