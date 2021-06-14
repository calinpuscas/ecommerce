import React from "react";
import Homemade from "./../../assets/01.jpg";
import Celebs from "./../../assets/02.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Homemade})`,
          }}
        >
          <a href="/">Homemade Jewelries</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Celebs})`,
          }}
        >
          <a href="/">Celebs Jewelries</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
