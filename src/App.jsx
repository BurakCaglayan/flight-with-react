import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Flights from "./pages/flights/Flights";
import Result from "./pages/result/Result";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/flights" element={<Flights />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default App;
