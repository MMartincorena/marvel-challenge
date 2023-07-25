import Navbar from "../components/Navbar/Navbar";
import "./comic.css";

const Comic = () => {
  /*     const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }; */

  return (
    <>
      <Navbar />
      <div className="workSpace">
        <div className="partOne">
          <div className="imgComic"></div>
        </div>
        <div className="partTwo">
          <h1>titulo</h1>
          <div className="details">
            <p>Published:</p>
            <p>Writer:</p>
            <p>Penciler:</p>
            <p>Cover Artist:</p>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            maxime iusto numquam mollitia voluptatem ullam, aut placeat
            quibusdam magnam obcaecati officia ex nihil, consequatur magni,
            inventore et beatae sit velit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Comic;
