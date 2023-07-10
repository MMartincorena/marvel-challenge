import { useEffect, useState } from "react";
import HeroCard from "../components/HeroCard/HeroCard";
import "./home.css";

const Home = () => {
  const urlAPI =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ba9f38df312b99cb16056792f9585fdb&hash=2c00c977d27cf34cddf75dc477d7f831";

  const [characters, setCharacters] = useState([]);

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

  return (
    <>
      <div className="card-container">
        {characters.map((character) => (
          <HeroCard
            key={character.id}
            name={character.name}
            image={
              character.thumbnail?.path +
              "/standard_fantastic." +
              character.thumbnail?.extension
            }
          />
        ))}
      </div>
    </>
  );
};

export default Home;
