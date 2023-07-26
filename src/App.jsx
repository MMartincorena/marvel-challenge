import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Favorites from "./routes/Favorites/Favorites";
import Comic from "./routes/Comic/Comic";
import NotFound from "./routes/NotFound/NotFound";

const App = () => {
  return (
    <>
      {/*       <Navbar />*/}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/comic/:id" element={<Comic />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
