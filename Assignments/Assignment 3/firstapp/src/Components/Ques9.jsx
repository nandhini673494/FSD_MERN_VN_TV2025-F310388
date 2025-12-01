import React, { useState } from "react";

function Ques9() {
  const students = ["Kiran", "Meera", "Arun", "Vijay", "Sara"];
  const [search, setSearch] = useState("");

  const filtered = students.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Student Search</h2>

      <input
        type="text"
        placeholder="Search name"
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ques9;
