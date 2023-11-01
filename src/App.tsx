import React from "react";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import "./App.css";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import { projects } from "./components/Project/projects_list";

function App() {
  return (
    <div className="App ">
      <Nav />
      <Profile />
      <About />
      <Project />
    </div>
  );
}

export default App;
