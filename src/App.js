import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* Where to work next */}
      <div style={{ backgroundColor: "red", height: 1000 }} />
    </div>
  );
}

export default App;
