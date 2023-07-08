import './HeroCard.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const HeroCard = () => {
  return (
    <div className="container">
      <div className="iconContainer"><AiFillStar className='icon'/></div>
      <h3 className="heroName">nombre</h3>
    </div>
  );
};
