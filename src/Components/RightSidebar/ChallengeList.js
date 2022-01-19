import { Link } from "react-router-dom";
import React from "react";
import "./ChallengeList.scss";

const ChallengeList = () => {
  return (
    <>
      <div className="challengeList mt-3">
        <div className="card" style={{ width: "19rem" }}>
          <div className="card-header">
            <h5>
              <b>#challenge</b>
            </h5>
          </div>

          {challengeList2.map((list) => {
            return (
              <>
                <ul className="list-group list-group-flush">
                  <Link to="/">
                    <li className="list-group-item challengeList--list">
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

export default ChallengeList;

const challengeList2 = [
  {
    header: "C Programing #Day1 variables, datatypes and i/o operations in C.",
    btn:  <button type="button" className="btn btn-primary btn-sm news--btn">New</button>,
    status: " ",
  },
  {
    header: "Thirty Days of Rust: Day Four",
    btn:  <button type="button" className="btn btn-primary btn-sm news--btn">New</button>,
    status: " ",
  },
  {
    header: "JavaScript Coding Challenges for Chunkies! - JSCodebox launched! 🎉",
    status: " 5 comment",
    btn: "",
  },
  { header: "Frontend Challenge #12, Time Tracking Dashboard", status: "",
  btn: <button type="button" className="btn btn-primary btn-sm news--btn">New</button>,},
  {
    header: "Thirty Days of Rust: Day Three*",
    status: "",
    btn: <button type="button" className="btn btn-primary btn-sm news--btn">New</button>,
  },
  
];
