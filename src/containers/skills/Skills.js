import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import Contact from "../../pages/contact/ContactComponent";
import { About } from "./About";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h4 className="skills-header" style={{ color: theme.text }}>
            What I Do ?
          </h4>
          <div className="text-center h3">
            <About />I build Full-Stack Web Applications 💻
          </div>
          {/* <p>A passionate Full Stack Web Developer 🚀 having an experience of building web applications with JavaScript / ReactJS / NodeJS / ExpressJS and some other cool libraries and frameworks.</p> */}
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
