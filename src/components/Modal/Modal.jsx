import { ImCross } from "react-icons/im";
import "./Modal.css";
import "../HeroCard/HeroCard.css";
import HeroCardProfile from "../HeroCardProfile/HeroCardProfile";

// eslint-disable-next-line react/prop-types
const Modal = ({ details: { character = {} } = {}, open, setModal }) => {
  console.log(character);
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
                onClick={() => setModal({ details: {}, open: false })}
              >
                <ImCross />
              </div>
              <h2 className="nameCharacter">{character.name}</h2>
            </div>
            <div className="contenido">
              <HeroCardProfile />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
