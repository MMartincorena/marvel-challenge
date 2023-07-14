import { useEffect, useState } from "react";
import HeroCard from "../components/HeroCard/HeroCard";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const urlAPI =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ba9f38df312b99cb16056792f9585fdb&hash=2c00c977d27cf34cddf75dc477d7f831";

  const [characters, setCharacters] = useState([]);
  const [modal, setModal] = useState({ details: null, open: false });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlAPI);
        const data = await response.json();

        // Guardar los datos de los personajes en el estado
        setCharacters(data.data.results);
      } catch (error) {
        console.log("No se pudo tener acceso a los datos de la API");
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <>
      <Navbar onFilterChange={handleFilterChange} />
      <Modal details={modal.details} open={modal.open} setModal={setModal} />
      <div className="card-container">
        {characters.map((character) => {
          if (
            filter &&
            !character.name.toLowerCase().includes(filter.toLowerCase())
          ) {
            return null;
          }
          return (
            <HeroCard
              setModal={setModal}
              key={character.id}
              name={character.name}
              image={
                character.thumbnail?.path +
                "/standard_fantastic." +
                character.thumbnail?.extension
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
