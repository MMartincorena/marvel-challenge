import { useState } from "react";
import { HeroCardProfile } from "../HeroCardProfile/HeroCardProfile";
import "./Modal.css";
import { ImCross } from "react-icons/im";

// eslint-disable-next-line react/prop-types
export const Modal = ({name}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

return (
  <div className="Container">
    <a href="#openModal" onClick={() => setModalOpen(true)}>Lanzar el modal</a>
    {modalOpen && (
      <div id="openModal" className="modalDialog">
        <div className="closeButton">
          <div className="encabezado">
            <div href="#close" title="Close" className="close" onClick={closeModal}>
              <ImCross />
            </div>
            <h2 className="nameCharacter">{name}</h2>
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