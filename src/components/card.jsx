import React from "react";
import { Bookmark } from "/lucide-react";

const Card = () => {
  return (
    <div id="card">
      <div>
        <div className="top">
          <img
            src="https://i.pinimg.com/736x/3b/70/ac/3b70ac7c3da28e47fdee4cb29dbc5c67.jpg"
            alt=""
          />
          <button>
            Save <Bookmark size={12} />{" "}
          </button>
        </div>
        <div id="middle">
          <h3>
            Amazon <span>5 Days ago</span>
          </h3>
          <h2>Senior UI/UX designer</h2>
          <div className="tag">
            <h4>Part time</h4>
            <h4>Senior level</h4>
          </div>
        </div>
      </div>
      <div id="buttom">
        <div>
          <h3>$120/hr</h3>
          <p>San francisco,CA</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
