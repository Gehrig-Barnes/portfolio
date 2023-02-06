import React from "react";
import "../App.css";
import "../style/projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProjectCard({ name, description, video, image }) {
  return (
    <div className="card">
      <Container>
        <Row>
          <Col>
            <h2>{name}</h2>
            <img id="project-image" src={image} />
          </Col>
          <Col>
            <p>{description}</p>
            <a href={video}>Video Demo</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
