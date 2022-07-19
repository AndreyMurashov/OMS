import "./Main.css";
import { Routes, Route } from "react-router-dom";
import FZ326 from "./articles/FZ/FZ326";
import FZ323 from "./articles/FZ/FZ323";
import Home from "./Home";

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/326" element={<FZ326 />} />
        <Route exact path="/323" element={<FZ323 />} />
      </Routes>
    </div>
  );
};

export default Main;
