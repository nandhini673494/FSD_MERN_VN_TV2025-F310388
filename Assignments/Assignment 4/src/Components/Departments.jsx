import React, { useEffect, useState } from "react";
import DepartmentCard from "./DepartmentCard";

function Departments() {
  const [depts, setDepts] = useState([]);

  useEffect(() => {
    import("./departments.json")
      .then((module) => setDepts(module.default || module))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="departments-page">
      <h2>Departments</h2>

      <div className="cards">
        {depts.map((d) => (
          <DepartmentCard key={d.id} dept={d} />
        ))}
      </div>
    </div>
  );
}

export default Departments;
