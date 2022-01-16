import React from "react";
import "./LeftSidebar.scss";
import {Link} from "react-router-dom";
import { Button } from "@mui/material";

const LeftSidebar = () => {
  return (
    <>
      <div className="leftSidebar">
      <div className="card">
      <h5><Link to="/">DEV Community</Link> is a community of 781,397 amazing developers</h5>
          <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
          <Link to="/">Hi</Link>
          <Button>Create Account</Button>
          <Button>Log In</Button>

      </div>
        {navLists.map((nav) => {
          return (
            <>
              <div className="d-flex" style={{ fontSize: "18px" }}>
                <div className="mr-3">{nav.icon}</div>
                <div>{nav.name}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default LeftSidebar;

const navLists = [
  {
    icon: "🏠",
    name: "Home",
  },
  {
    icon: "📚",
    name: "Reading List",
  },
  {
    icon: "📜",
    name: "Listing",
  },
  {
    icon: "🎙️",
    name: "Podcasts",
  },
  {
    icon: "🎥",
    name: "ideos",
  },
  {
    icon: "📝",
    name: "Tags",
  },
  {
    icon: "💡",
    name: "FAQ",
  },
  {
    icon: "🛍️",
    name: "Dev Shop",
  },
  {
    icon: "❤️",
    name: "Sponsors",
  },
  {
    icon: "💻",
    name: "About",
  },
  {
    icon: "🤝",
    name: "Contact",
  },
];

const otherTag = [
  {
    icon: "👍",
    name: "Code of Conduct",
  },
  {
    icon: "🤓",
    name: "Privacy Policy",
  },
  {
    icon: "👀",
    name: "Terms of use",
  },
];
