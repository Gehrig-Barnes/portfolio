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
            <img id="project-image" src={image} />
          </Col>
          <Col>
            <div className = "cardDetail">
              <h2 className="cDetail">{name}</h2>
              <p className="cDetail">{description}</p>
              <a className="cDetail" href={video}>Video Demo</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
