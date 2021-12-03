import React, { Component } from "react";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { Element } from "react-scroll";

import ProjectsData from "../../shared/opensource/projects.json";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";

class Projects extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <Element id="projects" name="projects">
        <div className="projects-main">
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="projects-heading-div">
                <div className="projects-heading-img-div">
                  <ProjectsImg theme={theme} />
                </div>
                <div className="projects-heading-text-div">
                  <h1
                    className="projects-heading-text"
                    style={{ color: theme.text }}
                  >
                    {projectsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {projectsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="repo-cards-div-main">
            <div className="repo-cards-div-main">
              {ProjectsData.data.map((repo) => {
                return <GithubRepoCard repo={repo} theme={theme} />;
              })}
            </div>
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href="https://github.com/kerrybli"
            newTab={true}
            theme={theme}
          />

          <div className="repo-cards-div-main"></div>

          <TopButton theme={this.props.theme} />
        </div>
      </Element>
    );
  }
}

export default Projects;
