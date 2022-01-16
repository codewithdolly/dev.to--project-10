import React from "react";
import "./socialMedia.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";

const SocialMedia = () => {
  return (
    <>
      <div className="d-flex justify-content-around socialMedia ">
      {socialIcon.map((media)=>{
          return(<>
            <Link to={media.link}><div className="socialMedia--link">{media.icon}</div></Link>
          </>)
      })}
       
      </div>
    </>
  );
};

export default SocialMedia;

const socialIcon=[
    {
        icon:<TwitterIcon  />,
        link:"https://www.linkedin.com/in/codewithdolly/",
    },
    {
        icon:<FacebookIcon  />,
        link:"https://www.linkedin.com/in/codewithdolly/",
    },
    {
        icon:<GitHubIcon  />,
        link:"https://www.linkedin.com/in/codewithdolly/",
    },
    {
        icon:<LinkedInIcon  />,
        link:"https://www.linkedin.com/in/codewithdolly/",
    },
    {
        icon:<InstagramIcon  />,
        link:"https://www.linkedin.com/in/codewithdolly/",
    },

]

