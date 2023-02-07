import React, { useState } from "react";
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

  const navigate = useNavigate();

  window.addEventListener("scroll", () => {
    setPrev(currY);
    setCurrY(window.scrollY);
  });

  const toggleHide =
    currY > prev ? (
      <>
        {" "}
        <button className="hide" onClick={() => navigate("/")}>
          {" "}
          Back Home
        </button>{" "}
      </>
    ) : (
      <>
        <button className="return-btn" onClick={() => navigate("/")}>
          {" "}
          Back Home
        </button>
      </>
    );

  return (
    
    <div className="abt">
      {toggleHide}
      <div>
        <h1>My Story</h1>
        <p></p>
      </div>

      <div>
        <h1>Experience</h1>
      </div>

      <div>
        <h1>Education</h1>
      </div>

      <div>
        <h1>Interest</h1>
      </div>

      <div className="resume">
        <Timeline align="left" position="left">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>My Story</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Experience</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Education</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Interest</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default AboutMe;
