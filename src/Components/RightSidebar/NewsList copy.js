import { Link } from "react-router-dom";
import React from "react";
import "./NewsList.scss";

const NewsList = () => {
  return (
    <>
      <div className="newsList mt-3">
        <div class="card" style={{ width: "19rem" }}>
          <div className="card-header">
            <h5>
              <b>#news</b>
            </h5>
          </div>

          {newsList2.map((list) => {
            return (
              <>
                <ul class="list-group list-group-flush">
                  <Link to="/">
                    <li class="list-group-item newsList--list">
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

export default NewsList;

const newsList2 = [
  {
    header: "10 BACKEND PROGRAMMING LANGUAGES THAT YOU SHOULD KNOW IN 2022",
    btn:  <button type="button" class="btn btn-primary btn-sm news--btn">New</button>,
    status: " ",
  },
  {
    header: "How I Bypassed Netflix Profile Lock?",
    status: " 1 comment",
    btn: "",
  },
  { header: "Appwrite 0.12 - Ask Me Anything", status: "1 comment",
  btn: "", },
  {
    header: "The algorithms of the tech giants soon accessible by China?",
    status: "",
    btn: <button type="button" class="btn btn-primary btn-sm news--btn">New</button>,
  },
  {
    header:
      "Game Dev Digest — Issue #124 - New Features",
    status: "",
    btn: <button type="button" class="btn btn-primary btn-sm news--btn">New</button>,
  }
  
];
