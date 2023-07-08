import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Favorites from "./routes/favorites";
import NotFound from "./routes/404";

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
};

export default App;
