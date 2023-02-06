import React, { useState } from "react";
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Project from "./components/Projects";

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className="App" id={isDark ? 'darkMode' : 'lightMode'}>
      <Nav setIsDark={setIsDark} isDark={isDark}/>
      <Routes>
        <Route exact path="/about_me" element={<AboutMe/>}/>
        <Route exact path="/projects" element={<Project/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
