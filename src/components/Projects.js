import React, { useState } from "react";
import projects from "../projectsData";
import "../style/projects.css";
import ProjectCard from "./ProjectCard";
import '../App.css';

function Project() {
  const projectCard = projects.map((project, index) => {
    return (
      <ProjectCard
        key={index}
        name={project.name}
        description={project.description}
        video = {project.video}
        image = {project.image}
      />
    );
  });
  return <div className="projectContainer">{projectCard}</div>;
}

export default Project;
