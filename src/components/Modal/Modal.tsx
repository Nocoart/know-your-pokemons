import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

//styles
import "./Modal.scss";

//interfaces
interface Props {
  children: React.ReactChild;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ children, setIsOpen }) => {
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "dark" ? "#333" : "#FFF",
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className="overlay" onClick={() => setIsOpen(false)}>
      <div className="modal-container" style={style} onClick={(e) => handleClick(e)}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
