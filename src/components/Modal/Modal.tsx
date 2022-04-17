import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

//styles
import "./Modal.scss";
import { IPokemon } from "pokeapi-typescript";

//interfaces
interface Props {
  children: React.ReactChild;
  setCurrentPokemon: React.Dispatch<React.SetStateAction<IPokemon>>;
}

const Modal: React.FC<Props> = ({ children, setCurrentPokemon }) => {
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "dark" ? "#333" : "#FFF",
  };
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className="overlay" onClick={() => setCurrentPokemon({} as React.SetStateAction<IPokemon>)}>
      <div className="modal-container" style={style} onClick={(e) => handleClick(e)}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
