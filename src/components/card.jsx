import React from "react";
import { Bookmark } from "/lucide-react";

const Card = (props) => {
  return (
    <div id="card">
      <div>
        <div className="top">
          <img
            src={props.logo}
            alt=""
          />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>
        <div id="middle">
          <h3>
            {props.company} <span>{props.posted}</span>
          </h3>
          <h2>{props.role}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div id="buttom">
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
