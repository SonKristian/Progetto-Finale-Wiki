import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Main/Home";
import Cards from "./components/Main/Cards"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
