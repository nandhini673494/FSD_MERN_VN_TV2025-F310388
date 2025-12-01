import React from "react";

function Ques1() {
  const students = [
    { name: "Pavithra", dept: "IT" },
    { name: "Dharshini", dept: "CSE" },
    { name: "Nandhini", dept: "AIDS" },
  ];

  return (
    <div>
      <h2>Students</h2>

      {students.map((stu, i) => (
        <div key={i}>
          <p>Name: {stu.name}</p>
          <p>Department: {stu.dept}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Ques1;
