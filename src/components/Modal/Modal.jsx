import { useState } from "react";
import { ImCross } from "react-icons/im";
import "./Modal.css";
import '../HeroCard/HeroCard.css'
import HeroCardProfile from "../HeroCardProfile/HeroCardProfile";

// eslint-disable-next-line react/prop-types
 const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modalContainer" >
      <a href="#openModal" onClick={() => setModalOpen(true)}>
        Lanzar el modal
      </a>
      {modalOpen && (
        <div id="openModal" className="modalDialog">
          <div className="closeButton">
            <div className="encabezado">
              <div
                href="#close"
                title="Close"
                className="close"
                onClick={closeModal}
              >
                <ImCross />
              </div>
              <h2 className="nameCharacter">Spiderman</h2>
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