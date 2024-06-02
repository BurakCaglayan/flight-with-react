
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import './App.scss'
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
    // <>
    //   <Home />
    // </>
  )
}

export default App
