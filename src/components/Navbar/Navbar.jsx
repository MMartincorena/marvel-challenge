import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";

// eslint-disable-next-line react/prop-types
const Navbar = ({ onFilterChange }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onFilterChange(value);
  };

  return (
    <nav className="navbar">
      <div className="sectionOne">
        <Link to="/">
          <img
            src={"../../src/assets/img/logo_Marvel.png"}
            alt=""
            className="logo"
          />
        </Link>
        <div className="divider"></div>
        <form>
          <input
            type="text"
            placeholder={"Buscar"}
            className="inputSearch"
            onChange={handleInputChange}
          />
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
