import React from "react";
import "./RightSidebar.scss";
import code from "../Images/code.png";
import ListingGroup from "./ListingGroup";
import NewsList from "./NewsList";
import HelpList from "./HelpList";
import MetaList from "./MetaList";
import WaterCoolerList from "./WaterCoolerList";
import ChallengeList from "./ChallengeList";
import DiscussionList from "./DiscussionList";

const RightSidebar = () => {
  return (
    <>
      <div className="rightSidebar">
        <div className="card rightSidebar--card p-3" style={{ width: "19rem" }}>
          <img src={code} class="card-img-top" alt="Code Img" height="130px" />
          <div class="card-body">
            <h5 class="card-title">CodeNewbie Challenge 2022</h5>
            <h6 class="card-title ">
              <b>
                |Write More|Start Coding|Code More|Get a Job|Learn in Public|
                <a
                  className="rightSidebar--card--link "
                  href="https://community.codenewbie.org/cnc2022"
                >
                  → Join Cohort 1 by Jan 30th
                </a>
              </b>
            </h6>
          </div>
        </div>
        <ListingGroup />
        <NewsList />
        <HelpList />
        <DiscussionList />
        <ChallengeList />
        <MetaList />
        <WaterCoolerList />
      </div>
    </>
  );
};

export default RightSidebar;
