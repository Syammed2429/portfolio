import React from "react";
import profile from "../../assests/images/profile1.jpg";

const About = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <img className="w-50 rounded-circle" src={profile} alt="mine" />
        </div>
        <div className="col ">
          <p className="align-left">
            A passionate Full Stack Web Developer{" "}
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            having an experience of building web applications with JavaScript /
            ReactJS / NodeJS / ExpressJS and some other cool libraries and
            frameworks.
          </p>
        </div>
      </div>
      {/* <div className="d-flex justify-content-around">
        <div className="">
        </div>
        <div className="container h5 col">
        </div>
      </div> */}
    </div>
  );
};

export { About };
