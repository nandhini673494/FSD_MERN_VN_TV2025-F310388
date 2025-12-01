import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={props.showAlert}>Click Me</button>
    </div>
  );
}

function Ques7() {
  function showAlert() {
    alert("Button clicked from Child Component!");
  }

  return (
    <div>
      <h2>Parent & Child Example</h2>
      <Child showAlert={showAlert} />
    </div>
  );
}

export default Ques7;
