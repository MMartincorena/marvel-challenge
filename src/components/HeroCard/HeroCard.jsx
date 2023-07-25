import { useState } from "react";
import "./HeroCard.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const HeroCard = ({ setModal, image, character = {} }) => {
  const [filled, setFilled] = useState(true);
  console.log(character);
  const handleIconStarClick = () => {
    setFilled(!filled);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className="container"
      style={backgroundImageStyle}
      onClick={() => setModal({ details: { character }, open: true })}
    >
      <div className="iconContainer" onClick={handleIconStarClick}>
        {filled ? (
          <AiFillStar className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </div>
      <div className="parrafoTexto">
        <h3 className="heroName">{character.name}</h3>
      </div>
    </div>
  );
};

export default HeroCard;
