import React from "react";
import products from "./data.json";

function Ques10() {
  return (
    <div>
      <h2>Products</h2>

      {products.map((p, i) => (
        <div key={i}>
          <p>Name: {p.name}</p>
          <p>Price: {p.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Ques10;
