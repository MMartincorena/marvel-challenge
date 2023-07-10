import "./HeroCardProfile.css";
import { AiFillStar /*  AiOutlineStar  */ } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const HeroCardProfile = ({ name, description, image }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };

  return (
    <div className="cardHero">
      <div className="heroBox" style={backgroundImageStyle}></div>
      <div className="detalles">
        <div className="titulo">
          <h2 className="textTitle">{name}</h2>
          <AiFillStar className="icono" />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeroCardProfile;
