import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "../App.css";
import "../style/about.css";



function AboutMe() {
  const [currY, setCurrY] = useState(0);
  const [prev, setPrev] = useState(0);
  const [outlined, setOutline] = useState([true, false, false, false]);

  const navigate = useNavigate();

  window.addEventListener("scroll", () => {
    setPrev(currY);
    setCurrY(window.scrollY);
  });

  const toggleHide = currY > prev ? "hide" : "return-btn";

  function handleDotOne() {
    setOutline([true, false, false, false]);
  }
  function handleDotTwo() {
    setOutline([false, true, false, false]);
  }
  function handleDotThree() {
    setOutline([false, false, true, false]);
  }
  function handleDotFour() {
    setOutline([false, false, false, true]);
  }

  const hidden = {
    opacity: 0,
    transition: "all 1s",
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".me");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting === true) {
            if (entry.target.id === "my_story") {
              setOutline([true, false, false, false]);
              entry.target.style.opacity = 1;
            } else if (entry.target.id === "experience") {
              setOutline([false, true, false, false]);
              entry.target.style.opacity = 1;
            } else if (entry.target.id === "education") {
              setOutline([false, false, true, false]);
              entry.target.style.opacity = 1;
            } else if (entry.target.id === "interest") {
              setOutline([false, false, false, true]);
              entry.target.style.opacity = 1;
            }
          }
        });
      },
      {
        rootMargin: "0% 0% 0% 10%",
        threshold: 0.5,
      }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="abt">
      <div className="timeLineContainer">
        <Timeline className="timeLine" align="left" position="left">
          <TimelineItem>
            <TimelineSeparator>
              <a href="#my_story" className="anchor">
                <TimelineDot
                  variant={outlined[0] ? "filled" : "outlined"}
                  className="separator"
                  onClick={handleDotOne}
                />
              </a>
              <TimelineConnector className="connector" />
            </TimelineSeparator>
            <TimelineContent>My Story</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <a href="#experience" className="anchor">
                <TimelineDot
                  variant={outlined[1] ? "filled" : "outlined"}
                  className="separator"
                  onClick={handleDotTwo}
                />
              </a>
              <TimelineConnector className="connector" />
            </TimelineSeparator>
            <TimelineContent>Experience</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <a href="#education" className="anchor">
                <TimelineDot
                  variant={outlined[2] ? "filled" : "outlined"}
                  className="separator"
                  onClick={handleDotThree}
                />
              </a>
              <TimelineConnector className="connector" />
            </TimelineSeparator>
            <TimelineContent>Skills</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <a href="#interest" className="anchor">
                <TimelineDot
                  variant={outlined[3] ? "filled" : "outlined"}
                  className="separator"
                  onClick={handleDotFour}
                />
              </a>
            </TimelineSeparator>
            <TimelineContent>Interest</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <button
        className={toggleHide}
        onClick={() => navigate("/")}
        disabled={currY > prev ? true : false}
      >
        Back Home
      </button>

      <div style={hidden} id="my_story" className="me">
        <h1> My Story</h1>
        <p>
          TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTEST TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST
        </p>
        <p>
          TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTEST TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST
        </p>
        <p>
          TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTEST TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST
        </p>
      </div>
      <div style={hidden} id="experience" className="me">
        <h1>Experience</h1>
        <p>
          TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST TEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTEST TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST
        </p>
        <p>
          TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTEST TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST
        </p>
        <p>
          TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTEST TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST
        </p>
        <p>
          TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTEST TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST
        </p>
      </div>
      <div style={hidden} id="education" className="me">
        <h1>Skills</h1>
        <div className="skill-box">
          <h5>JavaScript</h5>
          <h5>CSS</h5>
          <h5>HTML</h5>
          <h5>React</h5>
          <h5>Ruby</h5>
          <h5>Ruby on Rails</h5>
          <h5>Python</h5>
          <h5>Flask</h5>
          <h5>Postgres</h5>
          <h5>MUI</h5>
          <h5>Bootstrap</h5>
        </div>
      </div>
      <div style={hidden} id="interest" className="me">
        <h1>Interest</h1>
        <p>
          TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST TEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTEST TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST
        </p>
        <p>
          TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTEST TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST
        </p>
        <p>
          TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTEST TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST
        </p>
        <p>
          TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTEST TEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTESTTEST
          TESTTESTTESTTEST TESTTESTTESTTEST TESTTESTTEST
        </p>
      </div>
      <div className="test">hello</div>
    </div>
  );
}

export default AboutMe;
