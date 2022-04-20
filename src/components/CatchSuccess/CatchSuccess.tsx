import React, { useEffect, useState } from "react";

//styles
import "./CatchSuccess.scss";

const successGif = require("../../assets/img/success-catch.gif");
const missedGif = require("../../assets/img/missed-catch.gif");

//interfaces

type Success = "wait" | "yes" | "no";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  success: Success;
  setSuccess: React.Dispatch<React.SetStateAction<Success>>;
}

const CatchSuccess: React.FC<Props> = ({ setIsOpen, success, setSuccess }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    setTimeout(() => {
      success === "yes" ? setText("Got it!!") : setText("Oh no, the pokemon has escaped");
    }, 1500);
    setTimeout(() => {
      setIsOpen(false);
      setSuccess("wait");
    }, 3000);
  }, []);

  return (
    <div className="success-container">
      <img src={success === "yes" ? successGif : missedGif} alt="" className="gif" />
      <p className="description">{text}</p>
    </div>
  );
};

export default CatchSuccess;
