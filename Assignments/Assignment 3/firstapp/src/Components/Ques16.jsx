
import { useState } from "react";
import axios from "axios";

function Ques16() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [msg, setMsg] = useState("");

  const addPost = () => {
    axios
      .post("https://dummyjson.com/posts/add", { title, body })
      .then(() => setMsg("Post Added!"))
      .catch(() => setMsg("Error"));
  };

  return (
    <div>
      <h2>Add Post</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br /><br />

      <input
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      /><br /><br />

      <button onClick={addPost}>Submit</button>

      <h3>{msg}</h3>
    </div>
  );
}

export default Ques16;
