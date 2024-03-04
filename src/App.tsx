import React from "react";
import Nav from "./sections/Nav";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
