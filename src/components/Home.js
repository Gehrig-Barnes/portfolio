import React from "react";
import profilePicture from "../images/self.png";

function Home() {
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
        <div className="name" id="triangle-left"></div>
      </div>
      <div id="about-me">
        <img id="profile" src={profilePicture} />
        <div id="intro">
            <h6>I like to craft solid and scalable fullstack products with great user
          experience</h6>
        </div>
      </div>
    </div>
  );
}

export default Home;
