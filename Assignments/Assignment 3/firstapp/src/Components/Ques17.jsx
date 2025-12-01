import { useEffect, useState } from "react";
import axios from "axios";

function Ques17() {
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/users/1")
      .then(res => {
        setFirst(res.data.firstName);
        setEmail(res.data.email);
      });
  }, []);

  const updateUser = () => {
    axios.put("https://dummyjson.com/users/1", {
      firstName: first,
      email: email
    })
    .then(() => setMsg("Updated!"));
  };

  return (
    <div>
      <h2>Edit User</h2>

      <input value={first} onChange={(e) => setFirst(e.target.value)} /><br /><br />
      <input value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

      <button onClick={updateUser}>Update</button>

      <h3>{msg}</h3>
    </div>
  );
}

export default Ques17;
