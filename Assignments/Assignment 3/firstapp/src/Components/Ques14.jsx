import { useState } from "react";

function Ques14() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);
  const [fruit, setFruit] = useState("");

  const addFruit = () => {
    setFruits([...fruits, fruit]);
    setFruit("");
  };

  const deleteFruit = (index) => {
    setFruits(fruits.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Fruit List</h2>

      <input
        type="text"
        value={fruit}
        onChange={(e) => setFruit(e.target.value)}
      />
      <button onClick={addFruit}>Add</button>

      <ul>
        {fruits.map((f, i) => (
          <li key={i}>
            {f} 
            <button onClick={() => deleteFruit(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ques14;
