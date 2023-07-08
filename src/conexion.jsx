const urlAPI =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ba9f38df312b99cb16056792f9585fdb&hash=a76eb302ff2659e63212323d9ddaa017";

const conexion = () => {
  fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Aquí puedes hacer algo con los datos devueltos por la solicitud
    })
    .catch((error) => {
      console.log("Error:", error);
      // Maneja cualquier error que ocurra durante la solicitud
    });
};

export default conexion;
