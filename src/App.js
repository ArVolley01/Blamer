import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar";
import Who from "./Components/Who";
import Blames from "./Components/Blames";
import You from "./Components/You";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Who />} />
        <Route path="blame" element={<Blames />} />
        <Route path="you" element={<You />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
