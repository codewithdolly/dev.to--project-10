import React from "react";
import "./LeftSidebar.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const LeftSidebar = () => {
  return (
    <>
      <div className="leftSidebar">
        <div className="card p-3">
          <h5>
            <Link to="/">DEV Community</Link> is a community of 781,397 amazing
            developers
          </h5>
          <p>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
          <center>
            <Link to="/signup">
              {" "}
              <Button
                type="button"
                className="btn leftSidebar--btn"
                variant="outlined"
                fullWidth
              >
                Create Account
              </Button>
            </Link>

            <Link to="/login">
              {" "}
              <Button type="button" fullWidth>
                Log In
              </Button>
            </Link>
          </center>
        </div>
        {navLists.map((nav) => {
          return (
            <>
              <Link to={nav.link} className="d-flex ml-2 leftsidebar--link">
                <div className="mr-3">{nav.icon}</div>
                <p>{nav.name}</p>
              </Link>
            </>
          );
        })}
        <p>
          <b>Other</b>
        </p>
        <div>
        {otherTag.map((nav) => {
          return (
            <>
              <Link to={nav.link} className="d-flex ml-2 leftsidebar--link">
                <div className="mr-3">{nav.icon}</div>
                <p>{nav.name}</p>
              </Link>
            </>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;

const navLists = [
  {
    icon: "🏠",
    name: "Home",
    link: "/",
  },
  {
    icon: "📚",
    name: "Reading List",
    link: "/reading-list",
  },
  {
    icon: "📜",
    name: "Listing",
    link: "/listning",
  },
  {
    icon: "🎙️",
    name: "Podcasts",
    link: "/podcast",
  },
  {
    icon: "🎥",
    name: "ideos",
    link: "/ideas",
  },
  {
    icon: "📝",
    name: "Tags",
    link: "/tags",
  },
  {
    icon: "💡",
    name: "FAQ",
    link: "/faq",
  },
  {
    icon: "🛍️",
    name: "Dev Shop",
    link: "/devshop",
  },
  {
    icon: "❤️",
    name: "Sponsors",
    link: "/sponcer",
  },
  {
    icon: "💻",
    name: "About",
    link: "/about",
  },
  {
    icon: "🤝",
    name: "Contact",
    link: "/contact",
  },
];

const otherTag = [
  {
    icon: "👍",
    name: "Code of Conduct",
    link: "/code-of-conduct",
  },
  {
    icon: "🤓",
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    icon: "👀",
    name: "Terms of use",
    link: "/turms-of-use",
  },
];
