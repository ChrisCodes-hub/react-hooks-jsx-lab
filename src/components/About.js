import React from "react";
import { image } from "../data/data";



function About() {
  return (
   <div id="about">
    <h2>About Me</h2>
    <p>My name is Chris. I am a web developer with a passion for creating dynamic and responsive web applications.</p>
    <img src={image} alt="I made this" />
  </div>
  );
}

export default About;
