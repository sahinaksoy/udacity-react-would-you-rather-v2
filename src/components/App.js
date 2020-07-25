import React from "react";
import "./App.css";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  return (
    <div
      className="container"
      style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}
    >
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
