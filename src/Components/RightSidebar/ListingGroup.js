import { Link } from "react-router-dom";
import React from "react";
import "./ListingGroup.scss";

const ListingGroup = () => {
  return (
    <>
      <div className="listingGroup mt-3">
        <div className="card" style={{ width: "19rem"}}>
          <div className="card-header d-flex justify-content-between">
            <h5>
              <b>Listings</b>
            </h5>
            <button type="button" className="btn btn-link listingGroup--link">
              see all
            </button>
          </div>

          {list1.map((list) => {
            return (
              <>
                <ul className="list-group list-group-flush">
                  <Link to="/">
                    <li className="list-group-item listingGroup--list">
                      <div>
                        {list.header} <br />
                        <span className="text-muted">{list.status}</span>
                      </div>
                    </li>
                  </Link>
                </ul>
              </>
            );
          })}
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

  {
    header: (
      <div className="text-center listingGroup--create">
        <b>Create Listing</b>
      </div>
    ),
  },
];
