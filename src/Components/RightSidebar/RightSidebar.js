import React from "react";
import "./RightSidebar.scss";
import { Link } from "react-router-dom";
import code from "../Images/code.png"


const RightSidebar = () => {
  return (
    <>
      <div className="rightSidebar">
        <div className="card rightSidebar--card p-3" style={{width: "19rem"}}>
          <img src={code} class="card-img-top" alt="Code Img" height="130px"  />
          <div class="card-body">
            <h5 class="card-title">CodeNewbie Challenge 2022</h5>
            <h6 class="card-title"><b>|Write More|Start Coding|Code More|Get a Job|Learn in Public|<Link to="/"> → Join Cohort 1 by Jan 30th</Link></b></h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
