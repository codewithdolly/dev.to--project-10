import { Button } from "bootstrap";
import React from "react";
import "./ListingGroup.scss";

const ListingGroup = () => {
  return (
    <>
      <div className="listingGroup mt-3">
        <div class="card" style={{ width: "19rem" }}>
          <div className="card-header d-flex justify-content-between">
            <h5>
              <b>Listings</b>
            </h5>
            <button type="button" class="btn btn-link listingGroup--link">
              see all
            </button>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div>
                Introducing my Web 3 newsletter for you!
                <p className="text-muted">products</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListingGroup;

const list1 = [
  { header: "Introducing my Web 3 newsletter for you!", status: "products" },
  {
    header: "DEV Twitch Stream with Dan Abramov & Maggie Appleton",
    status: "events",
  },
  { header: "Check out My Blog", status: "education" },
  { header: "Free Workshop: How to become a contractor", status: "education" },
  {
    header:
      "Chingu - Turn what you've learned into experience to get Dev jobs!",
    status: "education",
  },
];
