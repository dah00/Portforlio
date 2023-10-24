import React from "react";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App ">
      <Nav />
      <Profile />
      <About />
      <Experience />
    </div>
  );
}

export default App;
