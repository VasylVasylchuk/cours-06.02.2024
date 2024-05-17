import React from "react";
import { BrowserRouter as Test, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Items from "./components/Items";
import Item from "./components/Item";
import Product from "./components/Product";
import NoPage from './components/NoPage';

function App() {

  return (
    <>
      <Test>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/items">items</Link>
            </li>
            <li>
              <Link to="/items/33">item 33</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="items" element={<Items />}>
              <Route path=":id" element={<Item />} />
              <Route path=":id/product" element={<Product />} />
              {/* /product/88 */}
            </Route>

            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Test>
    </>
  );
}

export default App;
