import React, { useState } from "react";

function Ques5() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();  
    setShow(true);
  }

  return (
    <div>
      <h2>Simple Form</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <input 
          type="email" 
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <button>Submit</button>
      </form>

      {show && (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default Ques5;
