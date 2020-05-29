import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import Typist from "react-typist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* Headline */}
          <p className="display-1" style={{ fontSize: "4.5rem" }}>
            Matthieu Chan Chee
          </p>
          <Typist
            avgTypingDelay={120}
            cursor={{
              show: true,
              blink: true,
              element: "",
              hideWhenDone: false,
              hideWhenDoneDelay: 1000,
            }}
          >
            Machine Learning Engineer
          </Typist>
        </div>

        {/* Social network links */}
        <div style={{ paddingTop: 20, zIndex: 1 }}>
          <a
            className="social-networks fab fa-linkedin fa-2x"
            href="https://www.linkedin.com/in/matthieu-chan-chee-883624138/"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            className="social-networks fab fa-github fa-2x"
            href="https://github.com/mchanchee"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            className="social-networks fab fa-instagram fa-2x"
            href="https://www.instagram.com/mattchan21/"
            target="_blank"
            rel="noopener noreferrer"
          />
          <a
            className="social-networks fas fa-envelope fa-2x"
            href="mailto:matthieuchanchee@gmail.com"
          />
        </div>
      </header>

      {/* The Particles will come on top of the previous component */}
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
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

      {/* Where to work next */}
      <div style={{ backgroundColor: "red", height: 1000 }} />
    </div>
  );
}

export default App;
