import { Link } from "react-router-dom";
import React from "react";
import "./WaterCoolerList.scss";

const WaterCoolerList = () => {
  return (
    <>
      <div className="waterCoolerList mt-3">
        <div class="card" style={{ width: "19rem" }}>
          <div className="card-header">
            <h5>
              <b>#watercooler</b>
            </h5>
          </div>

          {waterCoolerList2.map((list) => {
            return (
              <>
                <ul class="list-group list-group-flush">
                  <Link to="/">
                    <li class="list-group-item waterCoolerList--list">
                      <div>
                        {list.header} <br />
                        {list.btn}
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

export default WaterCoolerList;

const waterCoolerList2 = [
  {
    header: "How 1.5 years of writing posts on dev.to made me a better developer ✍️↔️🧑‍💻🚀",
    btn: "",
    status: " 2 comments",
  },
  {
    header: "How I found a good opener for Wordle",
    status: " 4 comment",
    btn: "",
  },
  {
    header: "Geolinux 0 : Intro",
    status: "",
    btn: <button type="button" class="btn btn-primary btn-sm news--btn">New</button>,
  },
  {
    header:
      "Hashnode is taking over the world",
    status: "",
    btn: <button type="button" class="btn btn-primary btn-sm news--btn">New</button>,
  }
  
];
