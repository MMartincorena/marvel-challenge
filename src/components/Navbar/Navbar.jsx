import "./Navbar.css";
import { AiFillStar /* , AiOutlineStar */ } from "react-icons/ai";
import { Link } from "react-router-dom";
/* import { BsSearch } from "react-icons/bs"; */

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="sectionOne">
        <Link to="/">
          <img
            src="../../src/assets/img/logo_Marvel.png"
            alt=""
            className="logo"
          />
        </Link>
        <div className="divider"></div> {/* Agrega la línea divisoria */}
        <form>
          <input type="text" placeholder={"Buscar"} className="inputSearch" />
        </form>
      </div>
      <Link to="/favorites">
      <div className="favoriteIcon">
        <AiFillStar className="starIcon" />
      </div>
      </Link>
    </nav>
  );
};

export default Navbar;
