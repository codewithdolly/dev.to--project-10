import React from "react";
import "./LeftSidebar.scss";
import { TwoWheeler } from "@mui/icons-material";
import { TwoWheelerOutlined } from "@mui/icons-material";

const LeftSidebar = () => {
  return (
    <div>
      <TwoWheelerOutlined />
     
    </div>
  );
};

export default LeftSidebar;

const NavLists = [
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



const otherTag= [
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
]
