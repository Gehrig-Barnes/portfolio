import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import githubLight from "../images/github-mark.png";
import linkedinLight from "../images/icons8-linkedin-2-48.png";
import githubDark from "../images/github-mark-white.png";
import linkedinDark from "../images/icons8-linkedin-2-64.png";


function Nav({ setIsDark, isDark }) {
  const navigate = useNavigate();

  function handleDarkMode(e) {
    setIsDark(e.target.checked);
  }

  let url = window.location.href;

  return (
    <div className="navContainer">
      {url.includes("/about_me") ? null : (
        <>
          {" "}
          <Row className="navBar">
            <Col className="col">
              <h3
                onClick={() => navigate("/portfolio")}
                className={isDark ? "navText routes" : "routes"}
              >
                Home
              </h3>
            </Col>
            <Col className="col">
              <h3
                onClick={() => navigate("/projects")}
                className={isDark ? "navText routes" : "routes"}
              >
                Projects
              </h3>
            </Col>

            <Col>
              <a href="https://github.com/Gehrig-Barnes">
                <img
                  src={isDark ? githubDark : githubLight}
                  className=" logos"
                  alt="githubLogo"
                />
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/gehrig-barnes-64a78b163/">
                <img
                  src={isDark ? linkedinLight : linkedinDark}
                  className=" logos"
                  alt="githubLogo"
                />
              </a>
            </Col>
            <Col>
              <label className="switch">
                <input checked = {isDark} type="checkbox" onChange={handleDarkMode} />
                <span className="slider round"></span>
              </label>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}

export default Nav;
