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

  function transitionDiv() {
    var myDiv = document.getElementById("myDiv");
    setTimeout(function() {
      myDiv.classList.add("transitioned");
    }, 1000);
  }

  transitionDiv();

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
        rootMargin: "-10% 10% 10% 10%",
        threshold: 0.7,
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
            <TimelineContent>About</TimelineContent>
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
            <TimelineContent>Education</TimelineContent>
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
        <h1> About</h1>

        <p>
          I am business school graduate and software engineer born on February
          22, 1995. I recently pivoted into software engineering by attending
          Flatiron School, a renowned coding bootcamp, in December 2021. Prior
          to my career change, I had established a strong foundation in
          business, including coursework in finance, marketing, and management.
          I have a passion for solving complex problems through software
          development, and I am excited about the opportunities that technology
          can provide to individuals and businesses alike.
        </p>
        <p>
          In my free time, I enjoy staying active with hobbies such as chess and
          rock climbing. I have been rock for two years and I enjoys the
          physical and mental challenges that bouldering provides. I also enjoys
          playing chess and find the strategic and analytical aspects of the
          game to be a great mental exercise.
        </p>
      </div>
      <div style={hidden} id="experience" className="me">
        <h1>Experience</h1>
        <h2>Flatiron School - New York, NY</h2>
        <h3>Software Engineering Coach - 07/2022 - Present</h3>
        <ul>
          <li>
            Adapted lessons to teach various topics and coding languages such as
            JavaScript, React, and Ruby on Rails.{" "}
          </li>
          <li>
            Cultivated an inclusive classroom environment by fostering
            sensitivity and awareness of different cultural, racial, ethnic,
            religious, and socioeconomic background.{" "}
          </li>
          <li>
            Collaborated with team members to design interactive labs and lesson
            plans for the Flatiron curriculum.{" "}
          </li>
        </ul>
        <h2>Risk Strategies - Fort Washington, PA</h2>
        <h3>Assistant Case Manager - 03/2021 - 10/2021</h3>
        <ul>
          <li>
            Designed premium-calculating spreadsheets to support new business
            proposals for prospective clients.{" "}
          </li>
          <li>
            Managed database of key client information to support case
            management workflow.{" "}
          </li>
          <li>
            Reviewed client applications to ensure accuracy and completeness
            before submitting to designated insurance carriers.{" "}
          </li>
        </ul>
        <h2>firstPro - Fort Washington, PA</h2>
        <h3>
          Revenue Operations Specialist for health provider (contract) - 08/2020
          - 01/2021
        </h3>
        <ul>
          <li>
            Submitted hundreds of insurance claims per day to insurers across
            the country.{" "}
          </li>
          <li>Analyzed databases using Excel and VBA.</li>
        </ul>
      </div>
      <div style={hidden} id="education" className="me">
        <h1>Skills</h1>
        <div className="skill-box">
          <h3> ▣ JavaScript</h3>
          <h3> ▣ CSS</h3>
          <h3> ▣ HTML</h3>
          <h3> ▣ React</h3>
          <h3> ▣ Ruby</h3>
          <h3> ▣ Ruby on Rails</h3>
          <h3> ▣ Python</h3>
          <h3> ▣ Flask</h3>
          <h3> ▣ Postgres</h3>
          <h3> ▣ MUI</h3>
          <h3> ▣ Bootstrap</h3>
        </div>
      </div>
      <div style={hidden} id="interest" className="me">
        <h1>Education</h1>
        <h2>Flatiron School - Chicago, IL</h2>
        <p>
          <strong>
            Full Stack Web Development, Ruby on Rails and JavaScript program -
            12/2021 - 04/2022
          </strong>
        </p>
        <h2>Temple University - Philadelphia, PA</h2>
        <p>
          <strong>Degree:</strong> Bachelors of Business Administration -
          08/2017 - 05/2020
        </p>
        <p>
          <strong>Major:</strong> Risk Management and Insurance
        </p>
        <ul>
          <li>
            Gamma Iota Sigma Professional Risk Management, Insurance and
            Actuarial Science Fraternity, Fall 2018 - Present
          </li>
          <li>Community Affairs Committee, Member, Fall 2018</li>
          <li>
            Temple University Presidential Academic Scholarship, Fall 2017
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default AboutMe;
