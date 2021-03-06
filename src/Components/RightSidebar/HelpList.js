import { Link } from "react-router-dom";
import React from "react";
import "./HelpList.scss";

const HelpList = () => {
  return (
    <>
      <div className="helpList mt-3">
        <div className="card" style={{ width: "19rem" }}>
          <div className="card-header">
            <h5>
              <b>#help</b>
            </h5>
          </div>

          {helpList2.map((list) => {
            return (
              <>
                <ul className="list-group list-group-flush">
                  <Link to="/">
                    <li className="list-group-item helpList--list">
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
    header: "Thirty Days of Rust: Day Three*",
    btn:  <button type="button" className="btn btn-primary btn-sm news--btn">New</button>,
    status: " ",
  },
  
];
