//style
import "./Loader.scss";

//assets
const gif = require("../../assets/img/loader.gif");

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={gif} alt="" />
    </div>
  );
};

export default Loader;
