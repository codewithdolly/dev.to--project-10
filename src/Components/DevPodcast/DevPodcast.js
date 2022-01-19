import React from "react";
import "./DevPodcast.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import PodcastImg from "../Images/dev.png";

const DevPodcast = () => {
  return (
    <>
      <div className="container-fluid devPodcast">
        <div
          className="row alert text-light alert-dismissible fade show m-md-4 p-md-5 devPodcast-box"
          role="alert"
        >
          <div className="col-md-8 devPodcast-box--left">
          <h5><b>A DEV Original Podcast</b></h5>
          <h1 className="col-md-5 devPodcast-box--left--h1"><b>DevNews Season 7 Has Arrived!</b></h1>
          <h2 className="mt-md-4 mb-md-3">S7:E1 - The Pudgy Penguins NFT Debacle, a Dev Intentionally Breaks His Own Open Source <br /> Libraries, & more.</h2>
          <button type="button" className="btn my-1 btn-link devPodcast-box--left--btn" href="#" >Listen</button>
          </div>
          <div className="col-md-3">
            <img src={PodcastImg} alt="" width="350px" />
          </div>

          <button
          
            type="button"
            className="close"
            size="large"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default DevPodcast;
