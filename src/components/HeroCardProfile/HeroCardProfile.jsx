import "./HeroCardProfile.css";
import { AiFillStar /*  AiOutlineStar  */ } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const HeroCardProfile = () => {
/*   const backgroundImageStyle = {
    backgroundImage: `url(./)`,
    backgroundSize: "cover",
  }; */

  return (
    <div className="cardHero">
      <div className="heroBox" ></div>
      <div className="detalles">
        <div className="titulo">
          <h2 className="textTitle">Martin</h2>
          <AiFillStar className="icono" />
        </div>
        <p>{"holis"}</p>
      </div>
    </div>
  );
};

export default HeroCardProfile;
