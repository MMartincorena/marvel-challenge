import "./Navbar.css";
import { AiFillStar/* , AiOutlineStar */ } from "react-icons/ai";
/* import { BsSearch } from "react-icons/bs"; */

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="sectionOne">
        <img
          src="../../src/assets/img/logo_Marvel.png"
          alt=""
          className="logo"
        />
        <div className="divider"></div> {/* Agrega la línea divisoria */}
        <form>
          <input type="text" placeholder={"Buscar"} className="inputSearch" />
        </form>
      </div>
      <div className="favoriteIcon">
        <AiFillStar className="starIcon" />
      </div>
    </nav>
  );
};

export default Navbar;
