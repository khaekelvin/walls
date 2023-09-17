import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Walls from "./components/Walls";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Walls" element={<Walls />} />
      </Routes>
    </div>
  );
}

export default App;
