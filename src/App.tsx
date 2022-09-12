import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}