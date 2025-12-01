import React from "react";

function  Ques2() {
  const isLoggedIn = true; 

  return (
    <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in</h2>}
    </div>
  );
}

export default Ques2;
