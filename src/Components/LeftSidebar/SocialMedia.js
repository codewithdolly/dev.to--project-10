import React from "react";
import "./socialMedia.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";

const SocialMedia = () => {
  function handleChange(evt) {
    console.log("new value is: ", evt.target.value);
  }
  return (
    <>
      <div className="socialMedia">
        {/* Socail media page started */}
        <div className="d-flex justify-content-around  my-3">
          {" "}
          {socialIcon.map((media) => {
            return (
              <>
                <Link to={media.link}>
                  <div className="socialMedia--link p-2">{media.icon}</div>
                </Link>
              </>
            );
          })}
        </div>
        {/* Socail media page ends */}

        {/* hashtags started */}
        <div>
          <p>
            <b>Populor Tags</b>
          </p>
          <select
            name="Software"
            id="software"
            multiple
            className="p-2 select"
            onChange={handleChange}
          >
            {hashTags.map((tag) => {
              return (
                <>
                  <option value={tag}>{tag}</option>
                </>
              );
            })}
          </select>
        </div>
        {/* hashtags ends */}
      </div>
    </>
  );
};

export default SocialMedia;

const socialIcon = [
  {
    icon: <TwitterIcon />,
    link: "https://www.linkedin.com/in/codewithdolly/",
  },
  {
    icon: <FacebookIcon />,
    link: "https://www.linkedin.com/in/codewithdolly/",
  },
  {
    icon: <GitHubIcon />,
    link: "https://www.linkedin.com/in/codewithdolly/",
  },
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/codewithdolly/",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.linkedin.com/in/codewithdolly/",
  },
];

const hashTags = [
  "#html",
  "#css",
  "#JavaScript",
  "#PHP",
  "#docker",
  "#Security",
  "#Angular",
  "#blockchain",
  "#vue",
  "#Lenux",
];
