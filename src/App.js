import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import Typist from "react-typist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Headline */}
        <h1 style={{ marginBottom: 10 }}>Matthieu Chan Chee</h1>
        <Typist
          avgTypingDelay={100}
          cursor={{
            show: true,
            blink: true,
            element: "|",
            hideWhenDone: false,
            hideWhenDoneDelay: 1000,
          }}
        >
          Machine Learning Engineer
        </Typist>

        {/* Social network links */}
        <div style={{ zIndex: 1, paddingTop: 10 }}>
          <a
            className="social-networks"
            href="https://www.linkedin.com/in/matthieu-chan-chee-883624138/"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a className="social-networks" href="https://github.com/mchanchee">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a
            className="social-networks"
            href="mailto:matthieuchanchee@gmail.com"
          >
            <i class="fas fa-envelope fa-2x"></i>
          </a>
        </div>
      </header>

      {/* The Particles will come on top of the previous component */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 70,
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

      {/* Where to work next */}
      <div style={{ backgroundColor: "red", height: 1000 }} />
    </div>
  );
}

export default App;
