import React from "react";
import profile from "../../assests/images/profile1.jpg";

const About = () => {
  return (
    <div>
      <h1>Me</h1>
      <div className="d-flex justify-content-around">
        <div className="">
          <img className="w-50 rounded-circle" src={profile} alt="mine" />
        </div>
        <div className="container h5 col">
          <p>
            A passionate Full Stack Web Developer 🚀 having an experience of
            building web applications with JavaScript / ReactJS / NodeJS /
            ExpressJS and some other cool libraries and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export { About };
