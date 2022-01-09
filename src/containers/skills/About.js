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
            I'm a passionate full stack web developer from india. My passion for
            software lies with dreaming up ideas and making them come true with
            elegant interfaces. I take great care in the experience,
            architecture, and code quality of the things I build.
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
