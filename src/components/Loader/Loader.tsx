import React from "react";

//style
import "./Loader.scss";

//assets
const pokeball = require("../../assets/img/pokeball.png");
const gif = require("../../assets/img/loader.gif");

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={gif} alt="" />
    </div>
  );
};

export default Loader;
