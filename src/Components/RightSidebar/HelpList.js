import { Link } from "react-router-dom";
import React from "react";
import "./HelpList.scss";

const HelpList = () => {
  return (
    <>
      <div className="helpList mt-3">
        <div class="card" style={{ width: "19rem" }}>
          <div className="card-header">
            <h5>
              <b>#news</b>
            </h5>
          </div>

          {helpList2.map((list) => {
            return (
              <>
                <ul class="list-group list-group-flush">
                  <Link to="/">
                    <li class="list-group-item helpList--list">
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

export default HelpList;

const helpList2 = [
  {
    header: "10 BACKEND PROGRAMMING LANGUAGES THAT YOU SHOULD KNOW IN 2022",
    btn:  <button type="button" class="btn btn-primary btn-sm news--btn">New</button>,
    status: " ",
  },
  
];
