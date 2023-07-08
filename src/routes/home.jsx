import { useEffect } from "react";

function Home() {
  const urlAPI =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ba9f38df312b99cb16056792f9585fdb&hash=2c00c977d27cf34cddf75dc477d7f831";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlAPI);
        const data = await response.json();
        console.log(data);
        // Hacer algo con los datos recibidos
      } catch (error) {
        console.log("Error:", error);
        // Manejar el error
      }
    };

    fetchData();
  }, []);

  return <div>Componente</div>;
}

export default Home;
