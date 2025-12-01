import React, { useState } from "react";

function Ques4() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h2>Live Username Display</h2>

      <input 
        type="text" 
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <p>You typed: {username}</p>
    </div>
  );
}

export default Ques4;
