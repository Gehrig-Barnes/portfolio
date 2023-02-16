import React from "react";
import profilePicture from "../images/self.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate()
  return (
    <div className="homeContainer">
      <div id="nameContainer">
        <div className="name" id="triangle-left"></div>
        <h1 className="name" id="myName">
          Gehrig Barnes
        </h1>
        <h1> | </h1>
        <h1 className="name" id="title">
          Full Stack Developer
        </h1>
        <div className="name" id="triangle-right"></div>
      </div>
      <div id="about-me">
        <img id="profile" src={profilePicture} />
        <div id="intro">
          
          <h6 id="summary">
            Hello, I am a Software Developer out of Chicago, IL. I began my
            software engineering journey December 2021. I am proficient in
            Javascript, React, && Ruby on Rails
          </h6>
          
          <button onClick={()=> nav('/about_me')} class="aboutClick">More About Me ...</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
