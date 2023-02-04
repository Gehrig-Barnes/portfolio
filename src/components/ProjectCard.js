import React from 'react'

export default function ProjectCard({name, description, video, image}) {
  return (
    <div className="card">
        <h2>{name}</h2>
        <img src = {image}/>
        <p>{description}</p>
        <a href={video}>Video Demo</a>
    </div>
  )
}
