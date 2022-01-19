import React from "react";
import "./MainBody.scss";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import JSImg from "../Images/js.png";
import user1 from "../Images/ben.jpg";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const MainBody = () => {
  return (
    <>
      <div className="mainBody">
        <Card sx={{ maxWidth: 700 }} className="mainBody--card">
          <CardMedia
            component="img"
            height="300"
            image={JSImg}
            alt="green iguana"
          />
          <div className="d-flex mx-md-3 mt-md-3">
            <Avatar src={user1} className="mr-2" />
            <Typography>
              Tapas Adhikary <br />
              <small>jan 18</small>
            </Typography>
          </div>

          <CardContent className="pl-md-5">
            <Link to="/">
              <Typography className="mainBody--header">
                JavaScript object destructuring usages you must know
              </Typography>
            </Link>
            <CardActions>
              <button className="btn btn-sm mainBody--btn1">#javascript</button>
              <button className="btn btn-sm mainBody--btn2">#programing</button>
              <button className="btn btn-sm mainBody--btn3">#begginers</button>
              <button className="btn btn-sm mainBody--btn4">#codenewbie</button>
            </CardActions>
            <CardActions className="d-flex justify-content-between">
              <div>
                {" "}
                <button className="btn btn-sm">
                  <FavoriteBorderIcon size="sm" /> #codenewbie
                </button>
                <button className="btn btn-sm">
                  <ChatBubbleOutlineIcon size="sm" /> #codenewbie
                </button>
              </div>
              <div>
                {" "}
                <button className="btn btn-sm">9 min read</button>
                <button className="btn  mainBody--btn5">Save</button>
              </div>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MainBody;

const hastags = [
  {
    user: "../Image/ben.jpg",
    name: "Matej Bačo",
    date: "17 jan",
    header: "Did we just build a Netflix clone with Appwrite?",
    hash1: "javascript",
    hash3: "opensource",
    hash4: "Webdev",
    hash5: "programing",
    comment: "14",
    readMin: "9 min",
  },
];
