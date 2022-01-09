import React from "react";
import profile from "../../assests/images/profile1.jpg";

const About = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12-sm col-md my-3">
          <img className="w-50 rounded-circle" src={profile} alt="mine" />
        </div>
        <div className="col d-flex align-items-center text-start my-3 ">
          <p>
            I'm a passionate full stack web developer from india. My passion for
            software lies with dreaming up ideas and making them come true with
            elegant interfaces. I take great care in the experience,
            architecture, and code quality of the things I build.
          </p>
        </div>
      </div>
    </div>
  );
};

export { About };
