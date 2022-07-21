import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./Components/Cards/Cards";
import Example from "./Components/Exam/Example";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cards" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
