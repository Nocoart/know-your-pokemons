import React from "react";

//style
import "./Loader.scss";

//assets
const pokeball = require("../../assets/img/pokeball.png");

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={pokeball} alt="" />
    </div>
  );
};

export default Loader;
