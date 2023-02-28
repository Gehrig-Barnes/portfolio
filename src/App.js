import React, { useState } from "react";
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Project from "./components/Projects";

function App() {
  const [isDark, setIsDark] = useState(false)

  //TO DO:
 
  //Nick Suggest that I add more color/oomf to the favicon. 
  return (
    <div className="App" id={isDark ? 'darkMode' : 'lightMode'}>
     <Nav setIsDark={setIsDark} isDark={isDark}/>
     
      <Routes>
        <Route exact path="/gh-pages-url/about_me" element={<AboutMe isDark={isDark}/>}/>
        <Route exact path="/gh-pages-url/projects" element={<Project/>}/>
        <Route exact path="/portfolio" element={<Home isDark={isDark}/>}/>
      </Routes>
    </div>
  );
}

export default App;
