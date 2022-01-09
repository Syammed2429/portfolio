import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import { Link as ScrollLink } from "react-scroll";
import { DarkModeContext } from "../../context/DarkModeContext";
import ToggleSwitch from "../footer/ToggleSwitch";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={Link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <ScrollLink
                  activeClass="active"
                  className="about"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activestyle={{ fontWeight: "bold" }}
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  About
                </ScrollLink>
              </li>
              <li></li>
              <li>
                {/* <NavLink
                  to="/experience"
                  tag={Link}
                  activestyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink> */}
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  className="projects"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activestyle={{ fontWeight: "bold" }}
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </ScrollLink>
              </li>

              <li>
                <ScrollLink
                  activeClass="active"
                  className="contact"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activestyle={{ fontWeight: "bold" }}
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </ScrollLink>
              </li>
            </ul>
            {/* <ToggleSwitch
              theme={this.props.theme}
              onToggle={this.props.onToggle}
            /> */}
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
