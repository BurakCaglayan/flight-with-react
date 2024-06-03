import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Flights from "./pages/flights/Flights";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/flights" element={<Flights />} />
    </Routes>
  );
};

export default App;
