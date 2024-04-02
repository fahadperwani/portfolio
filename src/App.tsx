import React from "react";
import Nav from "./sections/Nav";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
// import Projects from "./Projects";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
