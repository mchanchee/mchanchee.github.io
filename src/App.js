import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Accolades from "./components/Accolades";
import Footer from "./components/Footer";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Accolades />
      <Footer />
      <Particles
        className="particles-position"
        params={{
          particles: {
            number: {
              value: Math.floor(
                Math.max(window.innerHeight, window.innerWidth) / 30
              ), // Around 50 on desktop,
            },
            size: {
              value: 1,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default App;
