import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage data={{ name: "xd", num: 2 }} />
    </div>
  );
}

export default App;
