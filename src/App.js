import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Accolades from "./components/Accolades";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Accolades />
      <Footer />
    </div>
  );
}

export default App;
