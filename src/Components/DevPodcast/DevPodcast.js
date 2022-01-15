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
          class="row alert text-light alert-dismissible fade show m-4 p-5 devPodcast-box"
          role="alert"
        >
          <div className="col-md-8 devPodcast-box--left">
          <h5><b>A DEV Original Podcast</b></h5>
          <h1 className="col-md-5 devPodcast-box--left--h1">DevNews Season 7 Has Arrived!</h1>
          <h2>S7:E1 - The Pudgy Penguins NFT Debacle, a Dev Intentionally Breaks His Own Open Source Libraries, & more.</h2>
          <button className="btn my-1 devPodcast-box--left--btn" href="/" >Listen</button>
          </div>
          <div className="col-md-4">
            <img src={PodcastImg} alt="" width="300px" />
          </div>

          <button
            type="button"
            class="close"
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
