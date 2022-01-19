import { Link } from "react-router-dom";
import React from "react";
import "./MetaList.scss";

const MetaList = () => {
  return (
    <>
      <div className="metaList mt-3">
        <div className="card" style={{ width: "19rem" }}>
          <div className="card-header">
            <h5>
              <b>#meta</b>
            </h5>
          </div>

          {metaList2.map((list) => {
            return (
              <>
                <ul className="list-group list-group-flush">
                  <Link to="/">
                    <li className="list-group-item metaList--list">
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

export default MetaList;

const metaList2 = [
  {
    header: "Who wants to post videos natively on dev.to?",
    btn:  "",
    status: "34 comments ",
  },
  {
    header: "What's with the 🦄?",
    status: " 34 comments",
    btn: "",
  },
  { header: "You can now web-monetize your DEV posts! (But don't get your hopes up too quickly)", status: "44 comment",
  btn: "", },
  {
    header: "The dev.to tech stack?",
    status: "35 comments",
    btn:"",
  },
  {
    header:
      "Is there a way to edit dev.to post directly on VSCode?",
    status: "4 comments",
    btn: "",
  }
  
];
