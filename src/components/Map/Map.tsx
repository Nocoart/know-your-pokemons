import React, { SetStateAction, useRef } from "react";

//styles
import "./Map.scss";

const map = require("../../assets/img/kanto.png");
//interfaces
interface Props {
  setCurrentArea: React.Dispatch<SetStateAction<string>>;
}

const Map: React.FC<Props> = ({ setCurrentArea }) => {
  const handleClick = (area: string) => {
    setCurrentArea(area);
  };
  return (
    <div className="map-container">
      <img src={map} alt="" className="map-img" />
      <div className="plain area" onClick={() => handleClick("plain")} />
      <div className="mountain area" onClick={() => handleClick("mountain")} />
      <div className="cave area" onClick={() => handleClick("cave")} />
      <div className="sky area" onClick={() => handleClick("sky")} />
      <div className="sea area" onClick={() => handleClick("sea")} />
    </div>
  );
};

export default Map;
