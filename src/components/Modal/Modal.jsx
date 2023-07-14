import { useState } from "react";
import { ImCross } from "react-icons/im";
import "./Modal.css";
import "../HeroCard/HeroCard.css";
import HeroCardProfile from "../HeroCardProfile/HeroCardProfile";

// eslint-disable-next-line react/prop-types
const Modal = ({ details, open, setModal }) => {
  console.log(details);
  return (
    <div className="modalContainer">
      {open && (
        <div id="openModal" className="modalDialog">
          <div className="closeButton">
            <div className="encabezado">
              <div
                href="#close"
                title="Close"
                className="close"
                onClick={() => setModal({ details: null, open: false })}
              >
                <ImCross />
              </div>
              <h2 className="nameCharacter">{details.name}</h2>
            </div>
            <div className="contenido">
              <HeroCardProfile />
              <HeroCardProfile />
              <HeroCardProfile />
              <HeroCardProfile />
              <HeroCardProfile />
              <HeroCardProfile />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
