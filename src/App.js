import React, { useEffect, useState } from "react";
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./componenets/Nav";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Project from "./componenets/Projects";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
