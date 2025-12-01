import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import Electronics from "./Electronics.jsx";
import Fashion from "./Fashion.jsx";

function Ques20() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/product" element={<Product />}>
          <Route path="electronics" element={<Electronics />} />
          <Route path="fashion" element={<Fashion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Ques20;


