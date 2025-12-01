
import { useState } from "react";

function Ques13() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);
  const [fruit, setFruit] = useState("");

  const addFruit = () => {
    setFruits([...fruits, fruit]);
    setFruit("");
  };

  return (
    <div>
      <h2>Fruits</h2>

      <input
        type="text"
        value={fruit}
        onChange={(e) => setFruit(e.target.value)}
      />
      <button onClick={addFruit}>Add</button>

      <ul>
        {fruits.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ques13;
