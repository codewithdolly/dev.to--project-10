import { Link } from "react-router-dom";
import React from "react";
import "./DiscussionList.scss";

const DiscussionList = () => {
  return (
    <>
      <div className="discussionList mt-3">
        <div class="card" style={{ width: "19rem" }}>
          <div className="card-header">
            <h5>
              <b>#discuss</b>
            </h5>
          </div>

          {discussionList2.map((list) => {
            return (
              <>
                <ul class="list-group list-group-flush">
                  <Link to="/">
                    <li class="list-group-item discussionList--list">
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

export default DiscussionList;

const discussionList2 = [
 
  {
    header: "Freelancing For The Summer",
    status: " 2 comment",
    btn: "",
  },
  { header: "How 1.5 years of writing posts on dev.to made me a better developer ✍️↔️🧑‍💻🚀", status: "2 comment",
  btn: "", },
  {
    header: "How do you review CSS?",
    status: " 2 comment",
    btn: "",
  },
  {
    header: "What is your Dev.to Etiquette?",
    status: "",
    btn: <button type="button" class="btn btn-primary btn-sm news--btn">New</button>,
  },
  {
    header: "What was your win this week?",
    status: " 40 comment",
    btn: "",
  },
  
];
