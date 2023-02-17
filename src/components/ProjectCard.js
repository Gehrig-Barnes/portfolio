import React from "react";
import "../App.css";
import "../style/projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProjectCard({
  name,
  description,
  video,
  image,
  git_hub,
}) {


  return (
    <div className="card">
      <Container>
        <Row>
          <Col>
            <img id="project-image" src={image} />
          </Col>
          <Col>
            <div className="cardDetail">
              <h2 className="cDetail">{name}</h2>
              <p className="cDetail">{description}</p>

              {video !== "" ? (
                <a  className="cDetail, link" href={video}>
                  Video Demo |
                </a>
              ) : null}
              <a  className="cDetail, link" href={git_hub}>
                {" "}
                GitHub
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
