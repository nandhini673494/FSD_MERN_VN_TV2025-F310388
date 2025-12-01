import React, { useState } from "react";

function Ques8() {
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Mobile", category: "Electronics" },
    { name: "Shirt", category: "Clothes" },
    { name: "Jeans", category: "Clothes" }
  ];

  const [filter, setFilter] = useState("All");

  const filteredProducts = products.filter((p) =>
    filter === "All" ? true : p.category === filter
  );

  return (
    <div>
      <h2>Product Filter</h2>

      {/* Filter Buttons */}
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Electronics")}>Electronics</button>
      <button onClick={() => setFilter("Clothes")}>Clothes</button>

      <h3>Showing: {filter}</h3>

      {/* Display Products */}
      <ul>
        {filteredProducts.map((p, i) => (
          <li key={i}>
            {p.name} - {p.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ques8;
