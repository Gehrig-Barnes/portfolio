import React from "react";
import "../App.css";
import "../style/projects.css";

export default function ProjectCard({ name, description, video, image }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img id="project-image"src={image} />
      <p>{description}</p> 
      <a href={video}>Video Demo</a>
    </div>
  );
}
