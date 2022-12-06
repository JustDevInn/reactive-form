import React from "react";
import Login from "./Login";

//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Login isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
