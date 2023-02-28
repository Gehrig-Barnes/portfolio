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

function AboutMe({ isDark }) {
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
            <TimelineContent
              className={isDark ? "timeLineContentDark" : "timeLineContent"}
            >
              About
            </TimelineContent>
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
            <TimelineContent
              className={isDark ? "timeLineContentDark" : "timeLineContent"}
            >
              Experience
            </TimelineContent>
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
            <TimelineContent
              className={isDark ? "timeLineContentDark" : "timeLineContent"}
            >
              Skills
            </TimelineContent>
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
            <TimelineContent
              className={isDark ? "timeLineContentDark" : "timeLineContent"}
            >
              Education
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <button
        className={toggleHide}
        id={isDark ? "backBtnDark" : "backBtn"}
        onClick={() => navigate("/")}
        disabled={currY > prev ? true : false}
      >
        Back Home
      </button>

      <div style={hidden} id="my_story" className="me">
        <h1 className={isDark ? "abtDark" : "abt"}> About</h1>

        <p className={isDark ? "abtDark" : "abt"}>
          I am a business school graduate and software engineer. I pivoted into
          software engineering by attending Flatiron School, a renowned coding
          boot-camp, in December 2021. Prior to my career change, I established
          a strong foundation in business, including coursework in finance,
          marketing, and management. I have a passion for solving complex
          problems through software development. I am excited about the
          opportunities that technology can provide to individuals and
          businesses alike.
        </p>
        <p className={isDark ? "abtDark" : "abt"}>
          In my free time, I enjoy staying active with hobbies such as chess and
          rock climbing. I have been rock climbing for two years and I enjoy the
          physical and mental challenges that bouldering provides. I also enjoy
          playing chess and I find that the strategic and analytical aspects of
          the game to be a great mental exercise.
        </p>
      </div>
      <div style={hidden} id="experience" className="me">
        <h1 className={isDark ? "abtDark" : "abt"}>Experience</h1>
        <h2 className={isDark ? "abtDark" : "abt"}>
          Flatiron School - New York, NY
        </h2>
        <h3 className={isDark ? "abtDark" : "abt"}>
          Software Engineering Coach - 07/2022 - Present
        </h3>
        <ul>
          <li className={isDark ? "abtDark" : "abt"}>
            Adapted lessons to teach various topics and coding languages such as
            JavaScript, React, and Ruby on Rails.{" "}
          </li>
          <li className={isDark ? "abtDark" : "abt"}>
            Cultivated an inclusive classroom environment by fostering
            sensitivity and awareness of different cultural, racial, ethnic,
            religious, and socioeconomic background.{" "}
          </li>
          <li className={isDark ? "abtDark" : "abt"}>
            Collaborated with team members to design interactive labs and lesson
            plans for the Flatiron curriculum.{" "}
          </li>
        </ul>
        <h2 className={isDark ? "abtDark" : "abt"}>
          Risk Strategies - Fort Washington, PA
        </h2>
        <h3 className={isDark ? "abtDark" : "abt"}>
          Assistant Case Manager - 03/2021 - 10/2021
        </h3>
        <ul>
          <li className={isDark ? "abtDark" : "abt"}>
            Designed premium-calculating spreadsheets to support new business
            proposals for prospective clients.{" "}
          </li>
          <li className={isDark ? "abtDark" : "abt"}>
            Managed database of key client information to support case
            management workflow.{" "}
          </li>
          <li className={isDark ? "abtDark" : "abt"}>
            Reviewed client applications to ensure accuracy and completeness
            before submitting to designated insurance carriers.{" "}
          </li>
        </ul>
        <h2 className={isDark ? "abtDark" : "abt"}>
          firstPro - Fort Washington, PA
        </h2>
        <h3 className={isDark ? "abtDark" : "abt"}>
          Revenue Operations Specialist for health provider (contract) - 08/2020
          - 01/2021
        </h3>
        <ul className={isDark ? "abtDark" : "abt"}>
          <li className={isDark ? "abtDark" : "abt"}>
            Submitted hundreds of insurance claims per day to insurers across
            the country.{" "}
          </li>
          <li className={isDark ? "abtDark" : "abt"}>
            Analyzed databases using Excel and VBA.
          </li>
        </ul>
      </div>
      <div style={hidden} id="education" className="me">
        <h1 className={isDark ? "abtDark" : "abt"}>Skills</h1>
        <div className="skill-box">
          <h3 className={isDark ? "abtDark" : "abt"}> ▣ JavaScript</h3>
          <h3 className={isDark ? "abtDark" : "abt"}> ▣ CSS</h3>
          <h3 className={isDark ? "abtDark" : "abt"}> ▣ HTML</h3>
          <h3 className={isDark ? "abtDark" : "abt"}> ▣ React</h3>
          <h3 className={isDark ? "abtDark" : "abt"}> ▣ Ruby</h3>
          <h3 className={isDark ? "abtDark" : "abt"}> ▣ Ruby on Rails</h3>
          <h3 className={isDark ? "abtDark" : "abt"}> ▣ Python</h3>
          <h3 className={isDark ? "abtDark" : "abt"}> ▣ Flask</h3>
          <h3 className={isDark ? "abtDark" : "abt"}> ▣ Postgres</h3>
          <h3 className={isDark ? "abtDark" : "abt"}> ▣ MUI</h3>
          <h3 className={isDark ? "abtDark" : "abt"}> ▣ Bootstrap</h3>
        </div>
      </div>
      <div style={hidden} id="interest" className="me">
        <h1 className={isDark ? "abtDark" : "abt"}>Education</h1>
        <h2 className={isDark ? "abtDark" : "abt"}>
          Flatiron School - Chicago, IL
        </h2>
        <p>
          <strong className={isDark ? "abtDark" : "abt"}>
            Full Stack Web Development, Ruby on Rails and JavaScript program -
            12/2021 - 04/2022
          </strong>
        </p>
        <h2 className={isDark ? "abtDark" : "abt"}>
          Temple University - Philadelphia, PA
        </h2>
        <p className={isDark ? "abtDark" : "abt"}>
          <strong className={isDark ? "abtDark" : "abt"}>Degree:</strong>{" "}
          Bachelors of Business Administration - 08/2017 - 05/2020f
          <br/>
          <strong className={isDark ? "abtDark" : "abt"}>Major:</strong> Risk
          Management and Insurance
        </p>
        <ul>
          <li className={isDark ? "abtDark" : "abt"}>
            Gamma Iota Sigma Professional Risk Management, Insurance and
            Actuarial Science Fraternity, Fall 2018 - Present
          </li>
          <li className={isDark ? "abtDark" : "abt"}>
            Community Affairs Committee, Member, Fall 2018
          </li>
          <li className={isDark ? "abtDark" : "abt"}>
            Temple University Presidential Academic Scholarship, Fall 2017
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
