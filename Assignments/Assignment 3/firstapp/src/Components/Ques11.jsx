import React, { useEffect, useState } from "react";

function Ques11() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id}>
          <p>Name: {p.title}</p>
          <p>Price: {p.price}</p>
          <p>Brand: {p.brand}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Ques11;
