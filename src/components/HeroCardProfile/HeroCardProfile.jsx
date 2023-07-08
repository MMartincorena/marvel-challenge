import "./HeroCardProfile.css";
import { AiFillStar /*  AiOutlineStar  */ } from "react-icons/ai";

export const HeroCardProfile = () => {
  return (
    <div className="cardHero">
      <div
        className="heroBox"
        style={{
          backgroundImage: "url(../../src/assets/img/hero.png)",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="detalles">
        <div className="titulo">
          <h2 className="textTitle">Spider - Man</h2>
          <div className="icono" />
          <AiFillStar className="icono" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          quidem fugiat eos provident alias minima eligendi ipsum voluptatibus
          perspiciatis explicabo repudiandae tempore necessitatibus maiores quia
          nulla, voluptas quasi cum dolorem!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Adipisci quidem fugiat eos provident
          alias minima eligendi ipsum voluptatibus perspiciatis explicabo
          repudiandae tempore necessitatibus maiores quia nulla, voluptas quasi
          cum dolorem!
        </p>
      </div>
    </div>
  );
};
