import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Favorites from "./routes/favorites";
import NotFound from "./routes/404";
import Comic from "./routes/comic";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <>
      {/*       <Navbar />*/}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/modal" element={<Modal />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/comic/:id" element={<Comic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
