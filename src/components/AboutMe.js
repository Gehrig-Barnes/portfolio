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
    currY > prev ? 'hide' : 'return-btn'

  return (
    
    <div className="abt">
      <button className={toggleHide} onClick={() => navigate("/")} disabled={currY > prev ? true : false}>
      
      Back Home
    </button>
      

      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>
      <h1>sperate</h1>

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
